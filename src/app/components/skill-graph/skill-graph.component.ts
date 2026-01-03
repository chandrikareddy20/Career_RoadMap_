import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillNode {
  id: string;
  label: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  x?: number;
  y?: number;
}

interface SkillEdge {
  from: string;
  to: string;
  type: 'prerequisite' | 'recommended';
}

@Component({
  selector: 'app-skill-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-graph.component.html',
  styleUrls: ['./skill-graph.component.css']
})
export class SkillGraphComponent implements OnInit, OnDestroy, OnChanges {
  @Input() skills: any[] = [];
  @ViewChild('graphContainer', { static: true }) graphContainer!: ElementRef<SVGElement>;
  
  nodes: SkillNode[] = [];
  edges: SkillEdge[] = [];
  selectedNode: SkillNode | null = null;
  hoveredNode: SkillNode | null = null;
  private svg: any;
  width = 800;
  height = 600;

  ngOnInit(): void {
    if (this.skills && this.skills.length > 0) {
      this.processSkills();
      this.drawGraph();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skills'] && this.skills && this.skills.length > 0) {
      this.processSkills();
      this.drawGraph();
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  private processSkills() {
    // Convert skills to nodes
    this.nodes = this.skills.map((skill, index) => ({
      id: skill.name || `skill-${index}`,
      label: skill.name || 'Unknown Skill',
      level: this.getSkillLevel(skill),
      completed: skill.completed || false
    }));

    // Generate edges based on skill relationships
    this.edges = this.generateEdges();
    
    // Calculate positions using force-directed layout simulation
    this.calculatePositions();
  }

  private getSkillLevel(skill: any): 'beginner' | 'intermediate' | 'advanced' {
    if (typeof skill === 'string') return 'beginner';
    // Determine level based on roadmap level or skill data
    const level = (skill.level || '').toLowerCase();
    if (level.includes('beginner')) return 'beginner';
    if (level.includes('intermediate')) return 'intermediate';
    if (level.includes('advanced') || level.includes('expert')) return 'advanced';
    return 'beginner';
  }

  private generateEdges(): SkillEdge[] {
    const edges: SkillEdge[] = [];
    
    // Create relationships: beginner -> intermediate -> advanced
    const beginnerSkills = this.nodes.filter(n => n.level === 'beginner');
    const intermediateSkills = this.nodes.filter(n => n.level === 'intermediate');
    const advancedSkills = this.nodes.filter(n => n.level === 'advanced');

    // Connect beginner to intermediate
    beginnerSkills.forEach((beginner, i) => {
      const relatedIntermediate = intermediateSkills[i % intermediateSkills.length];
      if (relatedIntermediate) {
        edges.push({ from: beginner.id, to: relatedIntermediate.id, type: 'prerequisite' });
      }
    });

    // Connect intermediate to advanced
    intermediateSkills.forEach((intermediate, i) => {
      const relatedAdvanced = advancedSkills[i % advancedSkills.length];
      if (relatedAdvanced) {
        edges.push({ from: intermediate.id, to: relatedAdvanced.id, type: 'prerequisite' });
      }
    });

    // Add some recommended connections within same level
    beginnerSkills.slice(0, Math.min(3, beginnerSkills.length - 1)).forEach((skill, i) => {
      if (i < beginnerSkills.length - 1) {
        edges.push({ from: skill.id, to: beginnerSkills[i + 1].id, type: 'recommended' });
      }
    });

    return edges;
  }

  private calculatePositions() {
    // Simple grid-based layout with some randomness
    const levelPositions: { [key: string]: { x: number, y: number }[] } = {
      beginner: [],
      intermediate: [],
      advanced: []
    };

    // Calculate positions for each level
    ['beginner', 'intermediate', 'advanced'].forEach((level, levelIndex) => {
      const levelSkills = this.nodes.filter(n => n.level === level);
      const cols = Math.ceil(Math.sqrt(levelSkills.length));
      const startX = (this.width / 3) * levelIndex + 50;
      const startY = this.height / 2;

      levelSkills.forEach((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        node.x = startX + (col * 150);
        node.y = startY + (row * 120) - (levelSkills.length * 30);
      });
    });
  }

  private drawGraph() {
    // Graph will be drawn in the template using SVG
    // This method can be extended for more complex rendering
  }

  onNodeClick(node: SkillNode) {
    this.selectedNode = this.selectedNode?.id === node.id ? null : node;
  }

  onNodeHover(node: SkillNode | null) {
    this.hoveredNode = node;
  }

  getNodeClass(node: SkillNode): string {
    let classes = `node node-${node.level}`;
    if (node.completed) classes += ' node-completed';
    if (this.selectedNode?.id === node.id) classes += ' node-selected';
    if (this.hoveredNode?.id === node.id) classes += ' node-hovered';
    return classes;
  }

  getConnectedNodes(nodeId: string): string[] {
    const connected: string[] = [];
    this.edges.forEach(edge => {
      if (edge.from === nodeId) connected.push(edge.to);
      if (edge.to === nodeId) connected.push(edge.from);
    });
    return connected;
  }

  // Helper methods for template bindings (Angular doesn't support arrow functions in templates)
  getNodeX(nodeId: string): number | undefined {
    const node = this.nodes.find(n => n.id === nodeId);
    return node?.x;
  }

  getNodeY(nodeId: string): number | undefined {
    const node = this.nodes.find(n => n.id === nodeId);
    return node?.y;
  }

  getNodeLabel(nodeId: string): string {
    const node = this.nodes.find(n => n.id === nodeId);
    return node?.label || '';
  }

  getConnectedNodeLabels(nodeId: string): string[] {
    const connectedIds = this.getConnectedNodes(nodeId);
    return connectedIds.map(id => this.getNodeLabel(id));
  }
}

