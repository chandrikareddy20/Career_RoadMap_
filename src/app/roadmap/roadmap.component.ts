import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserStorageService } from '../services/user-storage.service';
import { SkillGraphComponent } from '../components/skill-graph/skill-graph.component';

interface Skill {
  name: string;
  level: string;
}

interface SkillDetail {
  name: string;
  description?: string;
  durationWeeks?: number;
  resources?: { title: string; url: string }[];
  completed?: boolean;
  quiz?: SkillQuiz;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface SkillQuiz {
  questions: QuizQuestion[];
  userAnswers: number[]; // -1 for unanswered
  score?: number;
  show?: boolean;
  attempted?: boolean;
}

interface RoadmapLevel {
  level: string;
  // support legacy string entries or detailed skill objects
  skills: Array<string | SkillDetail>;
  expanded: boolean;
}

interface SoftSkill {
  title: string;
  description: string;
  course: string;
  courseUrl: string;
}

interface CareerData {
  title: string;
  description: string;
  roadmapLevels: RoadmapLevel[];
  softSkills: SoftSkill[];
  certifications: string[];
  projectIdeas: string[];
}

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, SkillGraphComponent],
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
  careerTitle: string = 'Data Scientist';
  careerDescription: string = 'A Data Scientist analyzes and interprets complex digital data to assist a company in its decision-making and strategy formulation.';
  progress: number = 0;
  skillsCompleted: number = 0;
  estimatedTime: string = '6-12 months';

  currentSkills: Skill[] = [];

  roadmapLevels: RoadmapLevel[] = [];
  softSkills: SoftSkill[] = [];
  certifications: string[] = [];
  projectIdeas: string[] = [];
  showSkillGraph: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userStorage: UserStorageService
  ) {}

  // track if roadmap completion confetti already played to avoid repeats
  private roadmapConfettiPlayed = false;

  // Checkbox is now read-only and auto-completed via quiz completion
  // This method is kept for backward compatibility but should not be called
  onSkillToggle(skill: any, checked: boolean) {
    // Disabled: Checkboxes are now read-only and auto-completed via quiz completion
    // Users cannot manually toggle checkboxes
    return;
  }

  private playConfetti() {
    // lightweight canvas confetti implementation
    const duration = 2500;
    const animationEnd = Date.now() + duration;
    const colors = ['#bb0000', '#ffffff', '#00bbff', '#ffdd00', '#9bff5c'];

    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: any[] = [];
    const num = 80;
    for (let i = 0; i < num; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 200,
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 10,
        tiltSpeed: Math.random() * 0.1 + 0.05,
        vx: (Math.random() - 0.5) * 6,
        vy: 2 + Math.random() * 4,
        rotate: Math.random() * Math.PI * 2,
        rotateSpeed: (Math.random() - 0.5) * 0.2,
        opacity: 1
      });
    }

    const frame = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.rotate += p.rotateSpeed;
        p.tilt += p.tiltSpeed;
        p.opacity = Math.max(0, (animationEnd - now) / duration);

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotate);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (now < animationEnd) {
        requestAnimationFrame(frame);
      } else {
        // fade out then remove
        document.body.removeChild(canvas);
      }
    };
    requestAnimationFrame(frame);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  // Navigate to quiz page for the active saved roadmap (create one if needed)
  goToQuizRoadmap() {
    try {
      let id = this.userStorage.getActiveRoadmapId();
      if (!id) {
        const newId = this.saveAsNewRoadmap();
        if (newId) id = newId;
      }
      if (id) {
        this.router.navigate(['/quiz', id]);
      } else {
        // fallback: go to dashboard
        this.router.navigate(['/dashboard']);
      }
    } catch (e) {
      this.router.navigate(['/dashboard']);
    }
  }

  goToQuiz(skillName: string) {
    // navigate to quiz page for the active saved roadmap and pass skill as query param
    try {
      let id = this.userStorage.getActiveRoadmapId();
      if (!id) {
        const newId = this.saveAsNewRoadmap();
        if (newId) id = newId;
      }
      if (id) {
        this.router.navigate(['/quiz', id], { queryParams: { skill: skillName } });
      }
    } catch (e) { }
  }

  // Basic resource suggestions for common skills (lowercased keys)
  private resourceSuggestions: { [skill: string]: { description?: string; durationWeeks?: number; resources?: { title: string; url: string }[] } } = {
    'python basics': {
      description: 'Learn Python syntax, data types and control flow.',
      durationWeeks: 4,
      resources: [
        { title: 'Python for Everybody (Coursera)', url: 'https://www.coursera.org/specializations/python' },
        { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/' },
        { title: 'freeCodeCamp Python Course', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/' },
        { title: 'Real Python Tutorials', url: 'https://realpython.com/' },
        { title: 'Python Crash Course (book)', url: 'https://nostarch.com/pythoncrashcourse2e' }
      ]
    },
    'python programming': {
      description: 'Learn the basics of Python programming, focusing on syntax, data structures, and libraries like Pandas and NumPy.',
      durationWeeks: 4,
      resources: [
        { title: 'Python for Everybody (Coursera)', url: 'https://www.coursera.org/specializations/python' },
        { title: 'Automate the Boring Stuff with Python (book)', url: 'https://automatetheboringstuff.com/' },
        { title: 'Python Data Structures (Coursera)', url: 'https://www.coursera.org/learn/python-data' },
        { title: 'Learn Python (Codecademy)', url: 'https://www.codecademy.com/learn/learn-python-3' },
        { title: 'Python Exercises (Practice)', url: 'https://www.practicepython.org/' }
      ]
    },
    'data analysis with pandas': {
      description: 'Analyze data using pandas and perform data cleaning and aggregation.',
      durationWeeks: 3,
      resources: [
        { title: 'Data Analysis with Python (Coursera)', url: 'https://www.coursera.org/learn/data-analysis-with-python' },
        { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
        { title: '10 Minutes to Pandas (Tutorial)', url: 'https://pandas.pydata.org/docs/user_guide/10min.html' },
        { title: 'DataCamp Pandas Course', url: 'https://www.datacamp.com/courses/intro-to-python-for-data-science' },
        { title: 'Python for Data Analysis (book)', url: 'https://wesmckinney.com/book/' }
      ]
    },
    'machine learning fundamentals': {
      description: 'Introduction to supervised and unsupervised learning algorithms.',
      durationWeeks: 6,
      resources: [
        { title: 'Machine Learning by Andrew Ng (Coursera)', url: 'https://www.coursera.org/learn/machine-learning' },
        { title: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/user_guide.html' },
        { title: 'Hands-On Machine Learning (book)', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
        { title: 'Fast.ai Practical Deep Learning', url: 'https://www.fast.ai/' },
        { title: 'Kaggle Learn (Free Courses)', url: 'https://www.kaggle.com/learn' }
      ]
    },
    'statistical analysis': {
      description: 'Core statistical concepts used in data science and analysis.',
      durationWeeks: 3,
      resources: [
        { title: 'Statistics with Python Specialization (Coursera)', url: 'https://www.coursera.org/specializations/statistics' },
        { title: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability' },
        { title: 'Think Stats (book)', url: 'https://greenteapress.com/wp/think-stats-2e/' },
        { title: 'Introduction to Statistical Learning (book)', url: 'https://www.statlearning.com/' },
        { title: 'StatQuest YouTube Channel', url: 'https://www.youtube.com/user/joshstarmer' }
      ]
    },
    'statistics': {
      description: 'Understand fundamental statistical concepts that are crucial for data analysis.',
      durationWeeks: 3,
      resources: [
        { title: 'Statistics with Python Specialization (Coursera)', url: 'https://www.coursera.org/specializations/statistics' },
        { title: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability' },
        { title: 'Think Stats (book)', url: 'https://greenteapress.com/wp/think-stats-2e/' },
        { title: 'Introduction to Statistical Learning (book)', url: 'https://www.statlearning.com/' },
        { title: 'StatQuest YouTube Channel', url: 'https://www.youtube.com/user/joshstarmer' }
      ]
    },
    'deep learning': {
      description: 'Neural network architectures, training techniques, and frameworks like TensorFlow or PyTorch.',
      durationWeeks: 8,
      resources: [
        { title: 'Deep Learning Specialization (Coursera)', url: 'https://www.coursera.org/specializations/deep-learning' },
        { title: 'PyTorch Official Tutorials', url: 'https://pytorch.org/tutorials/' },
        { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials' },
        { title: 'Deep Learning Book (Ian Goodfellow)', url: 'https://www.deeplearningbook.org/' },
        { title: 'Fast.ai Deep Learning Course', url: 'https://course.fast.ai/' },
        { title: '3Blue1Brown Neural Networks', url: 'https://www.3blue1brown.com/topics/neural-networks' }
      ]
    },
    'big data processing': {
      description: 'Techniques and tools for processing large datasets (Spark, Hadoop).',
      durationWeeks: 6,
      resources: [
        { title: 'Big Data Specialization (Coursera)', url: 'https://www.coursera.org/specializations/big-data' },
        { title: 'Apache Spark Documentation', url: 'https://spark.apache.org/docs/latest/' },
        { title: 'Hadoop Tutorial', url: 'https://hadoop.apache.org/docs/current/' },
        { title: 'Databricks Learning Academy', url: 'https://www.databricks.com/learn' },
        { title: 'Big Data Analytics (edX)', url: 'https://www.edx.org/course/big-data-analytics' }
      ]
    },
    'linux fundamentals': {
      description: 'Command line usage, file permissions, process management and basic admin tasks.',
      durationWeeks: 3,
      resources: [
        { title: 'Linux Command Line Basics (Coursera)', url: 'https://www.coursera.org/learn/linux-command-line-basics' },
        { title: 'Linux Journey (Interactive)', url: 'https://linuxjourney.com/' },
        { title: 'The Linux Command Line (book)', url: 'https://linuxcommand.org/tlcl.php' },
        { title: 'Linux Academy', url: 'https://www.pluralsight.com/paths/linux' },
        { title: 'Linux Documentation Project', url: 'https://tldp.org/' }
      ]
    },
    'git & version control': {
      description: 'Version control workflows using Git and GitHub.',
      durationWeeks: 2,
      resources: [
        { title: 'Git & GitHub (Coursera)', url: 'https://www.coursera.org/learn/introduction-git-github' },
        { title: 'Pro Git (book)', url: 'https://git-scm.com/book/en/v2' },
        { title: 'GitHub Learning Lab', url: 'https://lab.github.com/' },
        { title: 'Learn Git Branching (Interactive)', url: 'https://learngitbranching.js.org/' },
        { title: 'Atlassian Git Tutorials', url: 'https://www.atlassian.com/git/tutorials' }
      ]
    },
    'docker & containerization': {
      description: 'Containerize applications using Docker and build reproducible deployments.',
      durationWeeks: 3,
      resources: [
        { title: 'Docker for Developers (Coursera)', url: 'https://www.coursera.org/learn/docker' },
        { title: 'Docker Official Docs', url: 'https://docs.docker.com/get-started/' },
        { title: 'Docker Deep Dive (book)', url: 'https://www.udemy.com/course/docker-mastery/' },
        { title: 'Play with Docker (Hands-on)', url: 'https://labs.play-with-docker.com/' },
        { title: 'Docker Curriculum', url: 'https://docker-curriculum.com/' }
      ]
    },
    'ci/cd pipelines': {
      description: 'Automate build, test, and deployment workflows using CI/CD tools.',
      durationWeeks: 4,
      resources: [
        { title: 'CI/CD with Jenkins (Coursera)', url: 'https://www.coursera.org/learn/continuous-integration' },
        { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
        { title: 'GitLab CI/CD Docs', url: 'https://docs.gitlab.com/ee/ci/' },
        { title: 'Jenkins Tutorial', url: 'https://www.jenkins.io/doc/tutorials/' },
        { title: 'CI/CD Best Practices', url: 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment' }
      ]
    },
    'kubernetes orchestration': {
      description: 'Deploy and manage containerized applications with Kubernetes.',
      durationWeeks: 4,
      resources: [
        { title: 'Kubernetes Basics (Coursera)', url: 'https://www.coursera.org/learn/google-kubernetes-engine' },
        { title: 'Kubernetes Official Docs', url: 'https://kubernetes.io/docs/home/' },
        { title: 'Kubernetes Tutorial', url: 'https://kubernetes.io/docs/tutorials/' },
        { title: 'Play with Kubernetes', url: 'https://labs.play-with-k8s.com/' },
        { title: 'Kubernetes the Hard Way', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' }
      ]
    },
    'infrastructure as code': {
      description: 'Manage infrastructure using declarative tools like Terraform.',
      durationWeeks: 4,
      resources: [
        { title: 'Terraform for Beginners', url: 'https://learn.hashicorp.com/collections/terraform/aws-get-started' },
        { title: 'Terraform Documentation', url: 'https://www.terraform.io/docs' },
        { title: 'Ansible Documentation', url: 'https://docs.ansible.com/' },
        { title: 'Pulumi Infrastructure as Code', url: 'https://www.pulumi.com/docs/' },
        { title: 'CloudFormation Templates', url: 'https://docs.aws.amazon.com/cloudformation/' },
        { title: 'Infrastructure as Code (book)', url: 'https://www.oreilly.com/library/view/infrastructure-as-code/9781491924294/' }
      ]
    },
    'network security basics': {
      description: 'Fundamentals of network security, firewalls, and secure architectures.',
      durationWeeks: 3,
      resources: [
        { title: 'Intro to Cyber Security (Coursera)', url: 'https://www.coursera.org/specializations/intro-cyber-security' },
        { title: 'Network Security Fundamentals', url: 'https://www.udemy.com/course/network-security-fundamentals/' },
        { title: 'Cisco Network Security', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html' },
        { title: 'Firewall Configuration Guide', url: 'https://www.pfsense.org/documentation/' },
        { title: 'Network Security Best Practices', url: 'https://www.sans.org/white-papers/network-security/' }
      ]
    },
    'security fundamentals': {
      description: 'Basic security principles, encryption, authentication and authorization.',
      durationWeeks: 3,
      resources: [
        { title: 'Security Fundamentals (Coursera)', url: 'https://www.coursera.org/learn/it-security' },
        { title: 'CompTIA Security+ Study Guide', url: 'https://www.comptia.org/certifications/security' },
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { title: 'Cryptography Basics', url: 'https://www.coursera.org/learn/crypto' },
        { title: 'Security Fundamentals (SANS)', url: 'https://www.sans.org/cyber-security-courses/security-fundamentals/' }
      ]
    },
    'penetration testing': {
      description: 'Techniques for ethical hacking and vulnerability assessment.',
      durationWeeks: 5,
      resources: [
        { title: 'Penetration Testing (Coursera)', url: 'https://www.coursera.org/learn/penetration-testing' },
        { title: 'OWASP Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
        { title: 'Metasploit Unleashed', url: 'https://www.offensive-security.com/metasploit-unleashed/' },
        { title: 'Burp Suite Documentation', url: 'https://portswigger.net/burp/documentation' },
        { title: 'Penetration Testing Execution Standard', url: 'http://www.pentest-standard.org/' },
        { title: 'The Web Application Hacker\'s Handbook', url: 'https://www.amazon.com/Web-Application-Hackers-Handbook-Exploiting/dp/1118026470' }
      ]
    },
    'security monitoring': {
      description: 'Setting up monitoring and logging for security events.',
      durationWeeks: 4,
      resources: [
        { title: 'Security Monitoring (Coursera)', url: 'https://www.coursera.org/learn/security-operations' },
        { title: 'Security Onion', url: 'https://www.securityonion.net/' },
        { title: 'OSSEC Documentation', url: 'https://www.ossec.net/docs/' },
        { title: 'Splunk Security Essentials', url: 'https://www.splunk.com/en_us/software/security-essentials.html' },
        { title: 'ELK Stack for Security', url: 'https://www.elastic.co/guide/en/security/current/index.html' }
      ]
    },
    'incident response': {
      description: 'Processes and best practices to respond to security incidents.',
      durationWeeks: 4,
      resources: [
        { title: 'Incident Response (Coursera)', url: 'https://www.coursera.org/learn/incident-response' },
        { title: 'NIST Incident Response Guide', url: 'https://www.nist.gov/publications/computer-security-incident-handling-guide' },
        { title: 'SANS Incident Response', url: 'https://www.sans.org/cyber-security-courses/incident-response-handling/' },
        { title: 'Incident Response Playbooks', url: 'https://github.com/cisagov/playbook' },
        { title: 'The Practice of Network Security Monitoring (book)', url: 'https://www.amazon.com/Practice-Network-Security-Monitoring-Understanding/dp/1593275099' }
      ]
    },
    'security architecture': {
      description: 'Design secure systems and networks with layered defenses.',
      durationWeeks: 5,
      resources: [
        { title: 'Security Architecture (Coursera)', url: 'https://www.coursera.org/learn/security-architecture' },
        { title: 'SABSA Framework', url: 'https://sabsa.org/' },
        { title: 'Zero Trust Architecture', url: 'https://www.nist.gov/publications/zero-trust-architecture' },
        { title: 'Security Architecture Patterns', url: 'https://owasp.org/www-community/vulnerabilities/Architecture' },
        { title: 'Defense in Depth Guide', url: 'https://www.sans.org/white-papers/defense-in-depth/' }
      ]
    },
    'programming fundamentals': {
      description: 'Core programming concepts: variables, control flow, functions and OOP basics.',
      durationWeeks: 4,
      resources: [
        { title: 'Programming Foundations (course)', url: 'https://www.coursera.org/specializations/programming-foundations' }
      ]
    },
    'data structures & algorithms': {
      description: 'Common data structures and algorithm patterns for solving problems efficiently.',
      durationWeeks: 6,
      resources: [
        { title: 'Data Structures and Algorithms (Coursera)', url: 'https://www.coursera.org/specializations/data-structures-algorithms' },
        { title: 'LeetCode (Practice Platform)', url: 'https://leetcode.com/' },
        { title: 'Grokking Algorithms (book)', url: 'https://www.manning.com/books/grokking-algorithms' },
        { title: 'Introduction to Algorithms (CLRS)', url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/' },
        { title: 'HackerRank Algorithms', url: 'https://www.hackerrank.com/domains/algorithms' },
        { title: 'Algorithm Visualizations', url: 'https://visualgo.net/' }
      ]
    },
    'software design patterns': {
      description: 'Re-usable design patterns for common software architecture problems.',
      durationWeeks: 4,
      resources: [
        { title: 'Design Patterns (Refactoring Guru)', url: 'https://refactoring.guru/design-patterns' },
        { title: 'Head First Design Patterns (book)', url: 'https://www.oreilly.com/library/view/head-first-design/9781492077992/' },
        { title: 'Design Patterns: Elements of Reusable OOP (Gang of Four)', url: 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612' },
        { title: 'JavaScript Design Patterns', url: 'https://www.patterns.dev/' },
        { title: 'Python Design Patterns', url: 'https://python-patterns.guide/' }
      ]
    },
    'database management': {
      description: 'Basics of relational databases, normalization, and management practices.',
      durationWeeks: 4,
      resources: [
        { title: 'Database Management (course)', url: 'https://www.coursera.org/specializations/database-management' }
      ]
    },
    'system architecture': {
      description: 'Designing scalable, maintainable, and resilient system architectures.',
      durationWeeks: 6,
      resources: [
        { title: 'System Design (Coursera)', url: 'https://www.coursera.org/specializations/system-design' },
        { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
        { title: 'High Scalability Blog', url: 'http://highscalability.com/' },
        { title: 'Designing Data-Intensive Applications (book)', url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/' },
        { title: 'System Design Interview (book)', url: 'https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF' },
        { title: 'Grokking the System Design Interview', url: 'https://www.educative.io/courses/grokking-the-system-design-interview' }
      ]
    },
    'performance optimization': {
      description: 'Techniques to profile and optimize software performance.',
      durationWeeks: 4,
      resources: [
        { title: 'Performance Optimization (Coursera)', url: 'https://www.coursera.org/learn/program-performance' },
        { title: 'Web Performance Optimization', url: 'https://web.dev/performance/' },
        { title: 'High Performance Browser Networking (book)', url: 'https://hpbn.co/' },
        { title: 'Profiling Tools Guide', url: 'https://developer.chrome.com/docs/devtools/performance/' },
        { title: 'Performance Best Practices', url: 'https://developers.google.com/web/fundamentals/performance' }
      ]
    },
    'html/css': {
      description: 'Fundamentals of HTML and CSS for building web pages.',
      durationWeeks: 2,
      resources: [
        { title: 'HTML, CSS, and Javascript for Web Developers (Coursera)', url: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers' },
        { title: 'freeCodeCamp Responsive Web Design', url: 'https://www.freecodecamp.org/learn/responsive-web-design/' },
        { title: 'MDN Web Docs (HTML/CSS)', url: 'https://developer.mozilla.org/en-US/docs/Web' },
        { title: 'CSS-Tricks (Tutorials)', url: 'https://css-tricks.com/' },
        { title: 'Flexbox Froggy (Game)', url: 'https://flexboxfroggy.com/' },
        { title: 'Grid Garden (Game)', url: 'https://cssgridgarden.com/' }
      ]
    },
    'javascript basics': {
      description: 'Core JavaScript concepts including DOM, events, and ES6 features.',
      durationWeeks: 3,
      resources: [
        { title: 'JavaScript Basics (Coursera)', url: 'https://www.coursera.org/learn/javascript-basics' },
        { title: 'Eloquent JavaScript (book)', url: 'https://eloquentjavascript.net/' },
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
        { title: 'JavaScript.info', url: 'https://javascript.info/' },
        { title: 'freeCodeCamp JavaScript', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' },
        { title: 'You Don\'t Know JS (book series)', url: 'https://github.com/getify/You-Dont-Know-JS' }
      ]
    },
    'react/angular framework': {
      description: 'Learn a modern frontend framework (React or Angular) for building SPAs.',
      durationWeeks: 6,
      resources: [
        { title: 'React - Official Tutorial', url: 'https://reactjs.org/tutorial/tutorial.html' },
        { title: 'Angular - Tour of Heroes', url: 'https://angular.io/tutorial' },
        { title: 'React Documentation', url: 'https://react.dev/' },
        { title: 'Angular Documentation', url: 'https://angular.io/docs' },
        { title: 'Full Stack Open (React)', url: 'https://fullstackopen.com/en/' },
        { title: 'React Router Tutorial', url: 'https://reactrouter.com/en/main/start/tutorial' }
      ]
    },
    'restful apis': {
      description: 'Design and consume RESTful APIs, HTTP methods, and status codes.',
      durationWeeks: 3,
      resources: [
        { title: 'REST APIs (Coursera)', url: 'https://www.coursera.org/learn/rest-api' },
        { title: 'REST API Tutorial', url: 'https://restfulapi.net/' },
        { title: 'Postman Learning Center', url: 'https://learning.postman.com/' },
        { title: 'HTTP Status Codes Guide', url: 'https://httpstatuses.com/' },
        { title: 'API Design Best Practices', url: 'https://restfulapi.net/' }
      ]
    },
    'progressive web apps': {
      description: 'Build installable, offline-capable web apps using modern web APIs.',
      durationWeeks: 4,
      resources: [
        { title: 'Progressive Web Apps (Coursera)', url: 'https://www.coursera.org/learn/progressive-web-apps' },
        { title: 'PWA Documentation (MDN)', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' },
        { title: 'Google PWA Guide', url: 'https://web.dev/progressive-web-apps/' },
        { title: 'Workbox (PWA Libraries)', url: 'https://developers.google.com/web/tools/workbox' },
        { title: 'PWA Checklist', url: 'https://web.dev/pwa-checklist/' }
      ]
    },
    'cloud fundamentals': {
      description: 'Core cloud concepts, service models, and typical cloud workflows.',
      durationWeeks: 3,
      resources: [
        { title: 'Cloud Computing (Coursera)', url: 'https://www.coursera.org/learn/cloud-computing-basics' },
        { title: 'Cloud Computing Concepts', url: 'https://www.coursera.org/learn/cloud-computing' },
        { title: 'AWS Cloud Essentials', url: 'https://aws.amazon.com/training/learning-paths/cloud-practitioner/' },
        { title: 'Google Cloud Fundamentals', url: 'https://cloud.google.com/learn/fundamentals' },
        { title: 'Azure Fundamentals', url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/' }
      ]
    },
    'basic networking': {
      description: 'Networking fundamentals: IP, routing, switching and common protocols.',
      durationWeeks: 3,
      resources: [
        { title: 'Computer Networking (Coursera)', url: 'https://www.coursera.org/learn/computer-networking' },
        { title: 'Network+ Study Guide', url: 'https://www.comptia.org/certifications/network' },
        { title: 'Cisco Networking Basics', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/entry/ccna.html' },
        { title: 'TCP/IP Illustrated (book)', url: 'https://www.amazon.com/TCP-Illustrated-Protocols-Addison-Wesley-Professional/dp/0201633469' },
        { title: 'Wireshark Network Analysis', url: 'https://www.wireshark.org/docs/' }
      ]
    },
    'cloud services (aws/azure/gcp)': {
      description: 'Overview of major cloud providers and their common service offerings.',
      durationWeeks: 4,
      resources: [
        { title: 'AWS Cloud Practitioner Essentials', url: 'https://aws.amazon.com/training/' },
        { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free/' },
        { title: 'Azure Fundamentals', url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/' },
        { title: 'Google Cloud Free Tier', url: 'https://cloud.google.com/free' },
        { title: 'Cloud Academy', url: 'https://cloudacademy.com/' },
        { title: 'A Cloud Guru', url: 'https://www.pluralsight.com/cloud-guru' }
      ]
    },
    'infrastructure management': {
      description: 'Managing cloud resources, monitoring, and scaling practices.',
      durationWeeks: 4,
      resources: [
        { title: 'Cloud Infrastructure (Coursera)', url: 'https://www.coursera.org/learn/cloud-infrastructure' },
        { title: 'AWS Systems Manager', url: 'https://docs.aws.amazon.com/systems-manager/' },
        { title: 'Azure Resource Manager', url: 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/' },
        { title: 'Cloud Monitoring Best Practices', url: 'https://cloud.google.com/monitoring/docs/best-practices' },
        { title: 'Infrastructure Scaling Strategies', url: 'https://aws.amazon.com/architecture/scalability/' }
      ]
    },
    'multi-cloud architecture': {
      description: 'Patterns for designing systems that span multiple cloud providers.',
      durationWeeks: 5,
      resources: [
        { title: 'Multi-Cloud Strategies (Google)', url: 'https://cloud.google.com/architecture/multi-cloud' },
        { title: 'AWS Multi-Cloud Architecture', url: 'https://aws.amazon.com/solutions/implementations/multi-cloud/' },
        { title: 'Multi-Cloud Management Guide', url: 'https://www.hashicorp.com/resources/multi-cloud-strategy' },
        { title: 'Kubernetes Multi-Cloud', url: 'https://kubernetes.io/docs/setup/multiple-zones/' },
        { title: 'Multi-Cloud Best Practices', url: 'https://www.gartner.com/en/documents/3893165' }
      ]
    },
    'cloud security': {
      description: 'Security best practices for cloud deployments.',
      durationWeeks: 4,
      resources: [
        { title: 'Cloud Security (Coursera)', url: 'https://www.coursera.org/learn/cloud-security' },
        { title: 'AWS Security Best Practices', url: 'https://aws.amazon.com/security/security-resources/' },
        { title: 'Azure Security Documentation', url: 'https://docs.microsoft.com/en-us/azure/security/' },
        { title: 'Google Cloud Security', url: 'https://cloud.google.com/security' },
        { title: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/' },
        { title: 'CIS Benchmarks for Cloud', url: 'https://www.cisecurity.org/cis-benchmarks/' }
      ]
    },
    'python for ai': {
      description: 'Python libraries and tools commonly used in AI (NumPy, pandas, scikit-learn, TensorFlow).',
      durationWeeks: 4,
      resources: [
        { title: 'AI Programming with Python (course)', url: 'https://www.coursera.org/professional-certificates/ai-programming-with-python' }
      ]
    },
    'machine learning basics': {
      description: 'Introductory machine learning concepts and simple models.',
      durationWeeks: 5,
      resources: [
        { title: 'Intro to Machine Learning (Coursera)', url: 'https://www.coursera.org/learn/intro-to-ml' },
        { title: 'Machine Learning Crash Course (Google)', url: 'https://developers.google.com/machine-learning/crash-course' },
        { title: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html' },
        { title: 'Kaggle Learn - Intro to Machine Learning', url: 'https://www.kaggle.com/learn/intro-to-machine-learning' },
        { title: 'Machine Learning Yearning (book)', url: 'https://www.deeplearning.ai/machine-learning-yearning/' }
      ]
    },
    'neural networks': {
      description: 'Foundations of neural networks and backpropagation.',
      durationWeeks: 6,
      resources: [
        { title: 'Neural Networks and Deep Learning (Coursera)', url: 'https://www.coursera.org/learn/neural-networks-deep-learning' },
        { title: 'Neural Networks Playlist (3Blue1Brown)', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi' },
        { title: 'Neural Networks from Scratch', url: 'https://nnfs.io/' },
        { title: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' },
        { title: 'PyTorch Neural Networks Tutorial', url: 'https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html' }
      ]
    },
    'natural language processing': {
      description: 'Techniques to process and model human language.',
      durationWeeks: 6,
      resources: [
        { title: 'Natural Language Processing (Coursera)', url: 'https://www.coursera.org/learn/language-processing' },
        { title: 'NLP with spaCy', url: 'https://course.spacy.io/' },
        { title: 'Hugging Face Course', url: 'https://huggingface.co/learn/nlp-course' },
        { title: 'Natural Language Processing with Python (NLTK)', url: 'https://www.nltk.org/book/' },
        { title: 'Stanford CS224N (NLP with Deep Learning)', url: 'https://web.stanford.edu/class/cs224n/' }
      ]
    },
    'computer vision': {
      description: 'Techniques for image processing and building vision models.',
      durationWeeks: 6,
      resources: [
        { title: 'Computer Vision Specialization (Coursera)', url: 'https://www.coursera.org/specializations/computer-vision' },
        { title: 'OpenCV Tutorials', url: 'https://docs.opencv.org/4.x/d9/df8/tutorial_root.html' },
        { title: 'Fast.ai Practical Deep Learning for Coders', url: 'https://course.fast.ai/' },
        { title: 'PyImageSearch Blog', url: 'https://pyimagesearch.com/' },
        { title: 'Computer Vision Course (Stanford)', url: 'https://cs231n.stanford.edu/' }
      ]
    },
    'sql fundamentals': {
      description: 'Learn SQL queries, joins, aggregation and database design basics.',
      durationWeeks: 3,
      resources: [
        { title: 'SQL for Data Science (Coursera)', url: 'https://www.coursera.org/learn/sql-for-data-science' },
        { title: 'SQLBolt (Interactive Tutorial)', url: 'https://sqlbolt.com/' },
        { title: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
        { title: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
        { title: 'SQL Practice (HackerRank)', url: 'https://www.hackerrank.com/domains/sql' },
        { title: 'Learn SQL (Codecademy)', url: 'https://www.codecademy.com/learn/learn-sql' }
      ]
    },
    'database design': {
      description: 'Design relational schemas and normalization techniques.',
      durationWeeks: 4,
      resources: [
        { title: 'Database Design (Coursera)', url: 'https://www.coursera.org/learn/database-design' },
        { title: 'Database Design Fundamentals', url: 'https://www.udemy.com/course/database-design/' },
        { title: 'Database Design Tutorial', url: 'https://www.lucidchart.com/pages/database-diagram/database-design' },
        { title: 'Database Design for Mere Mortals (book)', url: 'https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0136788041' },
        { title: 'Normalization Explained', url: 'https://www.studytonight.com/dbms/database-normalization.php' }
      ]
    },
    'database administration': {
      description: 'DBA tasks, backups, replication, and maintenance.',
      durationWeeks: 5,
      resources: [
        { title: 'Database Administration (Coursera)', url: 'https://www.coursera.org/learn/database-administration' },
        { title: 'MySQL Administration', url: 'https://dev.mysql.com/doc/refman/8.0/en/administration.html' },
        { title: 'PostgreSQL Administration', url: 'https://www.postgresql.org/docs/current/admin.html' },
        { title: 'Oracle DBA Tutorial', url: 'https://www.oracletutorial.com/' },
        { title: 'Database Backup and Recovery', url: 'https://www.udemy.com/course/database-backup-recovery/' }
      ]
    },
    'query optimization': {
      description: 'Techniques to optimize SQL queries and indexing strategies.',
      durationWeeks: 4,
      resources: [
        { title: 'Use The Index, Luke!', url: 'https://use-the-index-luke.com/' },
        { title: 'SQL Performance Explained (book)', url: 'https://sql-performance-explained.com/' },
        { title: 'Query Optimization Guide', url: 'https://www.sqlshack.com/query-optimization-techniques-in-sql-server/' },
        { title: 'Database Indexing Tutorial', url: 'https://www.tutorialspoint.com/dbms/dbms_indexing.htm' },
        { title: 'PostgreSQL Performance Tuning', url: 'https://wiki.postgresql.org/wiki/Performance_Optimization' }
      ]
    },
    'nosql databases': {
      description: 'Non-relational databases and their use-cases (e.g., MongoDB, Cassandra).',
      durationWeeks: 4,
      resources: [
        { title: 'MongoDB University', url: 'https://university.mongodb.com/' },
        { title: 'MongoDB Documentation', url: 'https://docs.mongodb.com/' },
        { title: 'Redis University', url: 'https://university.redis.com/' },
        { title: 'Cassandra Documentation', url: 'https://cassandra.apache.org/doc/latest/' },
        { title: 'NoSQL Database Explained', url: 'https://www.mongodb.com/nosql-explained' }
      ]
    },
    'data warehousing': {
      description: 'Designing analytics-ready data warehouses and ETL pipelines.',
      durationWeeks: 5,
      resources: [
        { title: 'Data Warehousing (Coursera)', url: 'https://www.coursera.org/learn/data-warehousing' },
        { title: 'Data Warehouse Fundamentals', url: 'https://www.udemy.com/course/data-warehouse-fundamentals-for-beginners/' },
        { title: 'Kimball Group Data Warehouse Toolkit', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/' },
        { title: 'ETL vs ELT Explained', url: 'https://www.stitchdata.com/resources/etl-vs-elt/' },
        { title: 'Snowflake Data Warehouse', url: 'https://docs.snowflake.com/en/user-guide-warehouses.html' },
        { title: 'Amazon Redshift Getting Started', url: 'https://aws.amazon.com/redshift/getting-started/' }
      ]
    },
    'security monitoring basics': {
      description: 'Core concepts in monitoring for security events and alerts.',
      durationWeeks: 3,
      resources: [
        { title: 'Security Monitoring (Coursera)', url: 'https://www.coursera.org/learn/security-operations' },
        { title: 'Security Monitoring Guide', url: 'https://www.sans.org/white-papers/security-monitoring/' },
        { title: 'Network Security Monitoring', url: 'https://www.securityonion.net/' },
        { title: 'OSSEC Documentation', url: 'https://www.ossec.net/docs/' },
        { title: 'Security Event Logging Best Practices', url: 'https://www.cisecurity.org/white-papers/security-logging/' }
      ]
    },
    'siem tools': {
      description: 'Use SIEM tools like Splunk and ELK for centralized logging and alerting.',
      durationWeeks: 4,
      resources: [
        { title: 'Splunk Fundamentals', url: 'https://www.splunk.com/en_us/training.html' },
        { title: 'Splunk Documentation', url: 'https://docs.splunk.com/Documentation' },
        { title: 'ELK Stack Tutorial', url: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html' },
        { title: 'QRadar SIEM Guide', url: 'https://www.ibm.com/docs/en/qsip/7.4' },
        { title: 'SIEM Best Practices', url: 'https://www.sans.org/white-papers/siem/' },
        { title: 'Wazuh SIEM', url: 'https://documentation.wazuh.com/' }
      ]
    },
    'threat analysis': {
      description: 'Techniques to analyze and prioritize threats to an organization.',
      durationWeeks: 4,
      resources: [
        { title: 'Threat Intelligence (Coursera)', url: 'https://www.coursera.org/learn/threat-intelligence' },
        { title: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
        { title: 'Threat Modeling Guide', url: 'https://owasp.org/www-community/Threat_Modeling' },
        { title: 'STRIDE Threat Model', url: 'https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats' },
        { title: 'Threat Intelligence Platforms', url: 'https://www.recordedfuture.com/threat-intelligence/' }
      ]
    },
    'forensic analysis': {
      description: 'Principles of digital forensics and evidence preservation.',
      durationWeeks: 5,
      resources: [
        { title: 'Digital Forensics (Coursera)', url: 'https://www.coursera.org/learn/digital-forensics' },
        { title: 'SANS Digital Forensics', url: 'https://www.sans.org/cyber-security-courses/digital-forensics-incident-response/' },
        { title: 'Autopsy Forensic Browser', url: 'https://www.autopsy.com/' },
        { title: 'Wireshark Network Analysis', url: 'https://www.wireshark.org/docs/' },
        { title: 'Volatility Memory Forensics', url: 'https://www.volatilityfoundation.org/' },
        { title: 'Digital Forensics and Incident Response (book)', url: 'https://www.packtpub.com/product/digital-forensics-and-incident-response/9781838649005' }
      ]
    },
    'security automation': {
      description: 'Automating security tasks and incident response with scripts and tools.',
      durationWeeks: 4,
      resources: [
        { title: 'Security Automation (Coursera)', url: 'https://www.coursera.org/learn/security-automation' },
        { title: 'Ansible for Security', url: 'https://docs.ansible.com/ansible/latest/scenario_guides/guide_security.html' },
        { title: 'Python for Security Automation', url: 'https://www.blackhat.com/presentations/bh-usa-07/Seitz/Whitepaper/bh-usa-07-seitz-WP.pdf' },
        { title: 'SOAR Platforms Guide', url: 'https://www.splunk.com/en_us/data-insider/what-is-soar.html' },
        { title: 'Security Orchestration with Phantom', url: 'https://www.splunk.com/en_us/software/phantom.html' }
      ]
    }
  };

  private enrichRoadmapLevels() {
    if (!this.roadmapLevels) return;
    for (const level of this.roadmapLevels) {
      level.skills = level.skills.map(s => {
        if (typeof s !== 'string') {
          // ensure existing detailed skills also have a quiz
          if (!s.quiz) s.quiz = this.generateQuizForSkill(s.name);
          return s;
        }
        const key = s.toLowerCase();
        const suggestion = this.resourceSuggestions[key];
        const detail: SkillDetail = {
          name: s,
          description: suggestion?.description || '',
          durationWeeks: suggestion?.durationWeeks || 2,
          resources: suggestion?.resources || [],
          completed: false
        };
        // attach a generated quiz for each skill detail
        detail.quiz = this.generateQuizForSkill(detail.name);
        return detail;
      });
    }
  }

  // Generate a small 5-question quiz for a skill using simple templates
  private generateQuizForSkill(skillName: string): SkillQuiz {
    const qBase = skillName;
    const questions: QuizQuestion[] = [
      {
        question: `What is the primary purpose of ${qBase}?`,
        options: [
          `To use ${qBase} to solve relevant problems`,
          `To ignore ${qBase} completely`,
          `Unrelated task`,
          `Only for designers`
        ],
        correctIndex: 0
      },
      {
        question: `Which of the following is commonly associated with ${qBase}?`,
        options: [`Libraries/tools commonly used`, `Astrology`, `Cooking`, `Singing`],
        correctIndex: 0
      },
      {
        question: `What is a sensible next step after learning ${qBase}?`,
        options: [`Apply it in a small project`, `Forget it`, `Sell it`, `Throw it away`],
        correctIndex: 0
      },
      {
        question: `How would you measure proficiency in ${qBase}?`,
        options: [`Completing practical tasks or projects`, `By reading headlines`, `By number of tabs open`, `By phone battery`],
        correctIndex: 0
      },
      {
        question: `Which resource type helps most with ${qBase}?`,
        options: [`Hands-on tutorials or projects`, `Horoscopes`, `Movie reviews`, `Novels`],
        correctIndex: 0
      }
    ];
    return {
      questions,
      userAnswers: questions.map(() => -1),
      score: 0,
      show: false,
      attempted: false
    };
  }

  // Toggle visibility of the quiz panel for a skill
  toggleQuiz(skill: SkillDetail) {
    if (!skill.quiz) skill.quiz = this.generateQuizForSkill(skill.name);
    skill.quiz.show = !skill.quiz.show;
  }

  // Submit quiz answers for a skill and compute score
  submitQuiz(skill: SkillDetail) {
    if (!skill.quiz) return;
    const q = skill.quiz;
    let correct = 0;
    for (let i = 0; i < q.questions.length; i++) {
      if (q.userAnswers[i] === q.questions[i].correctIndex) correct++;
    }
    q.score = Math.round((correct / q.questions.length) * 100);
    q.attempted = true;
    // Auto-complete: mark the skill completed after the quiz is submitted
    // This automatically checks the disabled checkbox
    const wasCompleted = !!skill.completed;
    skill.completed = true;
    // hide the quiz panel and update progress/persist
    q.show = false;
    // record completion and quiz attempt
    try { this.recordCompletion(skill.name); } catch (e) {}
    try { this.recordQuizAttempt(skill.name, q.score || 0); } catch (e) {}
    // Save the updated completion status to persisted roadmap
    this.saveRoadmapCompletionStatus(skill);
    this.updateProgress();
    // play confetti only when newly completed
    if (!wasCompleted && skill.completed) {
      this.playConfetti();
    }
  }

  // Save completion status to persisted roadmap
  private saveRoadmapCompletionStatus(skill: SkillDetail) {
    try {
      const activeId = this.userStorage.getActiveRoadmapId();
      if (!activeId) return;
      
      const saved = this.userStorage.getSavedRoadmaps();
      const roadmap = saved.find(r => r.id === activeId);
      if (!roadmap) return;

      // Update the skill completion status in the saved roadmap
      roadmap.roadmapLevels.forEach((level: RoadmapLevel) => {
        level.skills.forEach((s: any) => {
          if (typeof s === 'object' && s.name === skill.name) {
            s.completed = true;
          }
        });
      });

      this.userStorage.setSavedRoadmaps(saved);
    } catch (e) {
      // Silently fail if storage update fails
    }
  }

  // Record a completion event to localStorage to support badges
  private recordCompletion(skillName: string, roadmapId?: string) {
    const ev = { skill: skillName, roadmapId: roadmapId || this.userStorage.getActiveRoadmapId() || null, at: new Date().toISOString() };
    this.userStorage.addCompletionEvent(ev);
  }

  // Record quiz attempt with score to localStorage for badge detection
  private recordQuizAttempt(skillName: string, score: number, roadmapId?: string) {
    const ev = { skill: skillName, roadmapId: roadmapId || this.userStorage.getActiveRoadmapId() || null, score, at: new Date().toISOString() };
    this.userStorage.addQuizAttempt(ev);
  }

  updateProgress() {
    // Count total detailed skills and completed ones to compute progress
    let total = 0;
    let done = 0;
    for (const level of this.roadmapLevels) {
      for (const s of level.skills) {
        if (typeof s !== 'string') {
          total++;
          if (s.completed) done++;
        }
      }
    }
    if (total > 0) {
      this.skillsCompleted = done;
      this.progress = Math.round((done / total) * 100);
    } else {
      this.skillsCompleted = 0;
      this.progress = 0;
    }
    // when whole roadmap becomes 100% and we haven't played confetti, play celebration
    if (this.progress === 100 && !this.roadmapConfettiPlayed) {
      this.roadmapConfettiPlayed = true;
      this.playConfetti();
    }
    // persist summary
    this.saveSummaryToStorage();
  }

  ngOnInit() {
    // Load user's current skills from localStorage
    this.loadCurrentSkills();
    
    // Get career from route params
    this.route.queryParams.subscribe(params => {
      // If a saved roadmap id is provided, load that saved roadmap (takes precedence)
      if (params['savedId']) {
        const id = params['savedId'];
        const ok = this.loadSavedRoadmap(id);
        if (ok) {
          this.userStorage.setActiveRoadmapId(id);
          // ensure string skills are enriched and progress is updated
          this.enrichRoadmapLevels();
          // Sync completion status from quiz attempts
          this.syncCompletionFromQuizAttempts();
          this.updateProgress();
          return;
        }
      }

      if (params['career']) {
        this.setCareerData(params['career']);
      } else {
        // Default to data scientist if no career selected
        this.setCareerData('data-scientist');
      }
    });
  }

  // Sync completion status from quiz attempts stored in localStorage
  // This ensures checkboxes are auto-checked based on completed quizzes
  private syncCompletionFromQuizAttempts() {
    try {
      const activeId = this.userStorage.getActiveRoadmapId();
      if (!activeId) return;

      // Get all quiz attempts for this roadmap
      const quizAttempts = this.userStorage.getQuizAttempts() || [];
      const roadmapAttempts = quizAttempts.filter((attempt: any) => 
        attempt.roadmapId === activeId
      );

      // Mark skills as completed if they have a quiz attempt
      this.roadmapLevels.forEach(level => {
        level.skills.forEach((skill: any) => {
          if (typeof skill === 'object' && skill.name) {
            const hasAttempt = roadmapAttempts.some((attempt: any) => 
              attempt.skill === skill.name
            );
            if (hasAttempt && !skill.completed) {
              skill.completed = true;
            }
          }
        });
      });
    } catch (e) {
      // Silently fail if sync fails
    }
  }

  loadCurrentSkills() {
    this.currentSkills = this.userStorage.getUserSkills();
  }

  setCareerData(careerId: string) {
    const careerDataMap: { [key: string]: CareerData } = {
      'data-scientist': {
        title: 'Data Scientist',
        description: 'A Data Scientist analyzes and interprets complex digital data to assist a company in its decision-making and strategy formulation.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: [
              {
                name: 'Python Programming',
                description: 'Learn the basics of Python programming, focusing on syntax, data structures, and libraries like Pandas and NumPy.',
                durationWeeks: 4,
                resources: [
                  { title: 'Python for Everybody (course)', url: 'https://www.coursera.org/specializations/python' },
                  { title: 'Automate the Boring Stuff with Python (book)', url: 'https://automatetheboringstuff.com/' }
                ],
                completed: false
              },
              {
                name: 'Statistics',
                description: 'Understand fundamental statistical concepts that are crucial for data analysis.',
                durationWeeks: 3,
                resources: [
                  { title: 'Statistics with Python Specialization (course)', url: 'https://www.coursera.org/specializations/statistics' }
                ],
                completed: false
              }
            ],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Machine Learning Fundamentals', 'Statistical Analysis'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Deep Learning', 'Big Data Processing'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Critical for presenting data insights clearly and effectively to stakeholders.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for identifying issues and coming up with effective solutions in data projects.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'Data Science Professional Certificate',
          'AWS Certified Machine Learning'
        ],
        projectIdeas: [
          'Build a Predictive Model for Housing Prices',
          'Create an Interactive Data Visualization Dashboard'
        ]
      },
      'devops-engineer': {
        title: 'DevOps Engineer',
        description: 'A DevOps Engineer combines software development and IT operations to enhance the efficiency and quality of software delivery cycles through automation and continuous improvement.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['Linux Fundamentals', 'Git & Version Control'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Docker & Containerization', 'CI/CD Pipelines'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Kubernetes Orchestration', 'Infrastructure as Code'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication',
            description: 'Essential for effective collaboration between development and operations teams.',
            course: 'Communication Skills: Become More Clear, Concise, & Confident (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem-Solving',
            description: 'Critical for diagnosing and resolving integration and deployment issues.',
            course: 'Creative Problem Solving: Creativity & Innovation (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'AWS Certified Solutions Architect - Associate',
          'Certified Kubernetes Administrator (CKA)'
        ],
        projectIdeas: [
          'Set up a CI/CD pipeline using Jenkins and GitHub for a sample application.',
          'Containerize a web application using Docker and deploy it using Kubernetes on a cloud provider like AWS or GCP.'
        ]
      },
      'cybersecurity-analyst': {
        title: 'Cybersecurity Analyst',
        description: 'A Cybersecurity Analyst protects systems and networks from cyber threats and security breaches.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['Network Security Basics', 'Security Fundamentals'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Penetration Testing', 'Security Monitoring'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Incident Response', 'Security Architecture'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Important for reporting security incidents and explaining risks to stakeholders.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for analyzing security threats and developing mitigation strategies.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'CompTIA Security+',
          'Certified Information Systems Security Professional (CISSP)'
        ],
        projectIdeas: [
          'Build a security monitoring dashboard',
          'Conduct a vulnerability assessment on a test network'
        ]
      },
      'software-developer': {
        title: 'Software Developer',
        description: 'A Software Developer builds applications and software solutions to solve business problems.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['Programming Fundamentals', 'Data Structures & Algorithms'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Software Design Patterns', 'Database Management'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['System Architecture', 'Performance Optimization'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Critical for collaborating with team members and understanding requirements.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for debugging and developing efficient solutions.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'Oracle Certified Professional Java SE Developer',
          'Microsoft Certified: Azure Developer Associate'
        ],
        projectIdeas: [
          'Build a full-stack web application',
          'Create a mobile app with cross-platform framework'
        ]
      },
      'web-developer': {
        title: 'Web Developer',
        description: 'A Web Developer creates and maintains websites and web applications using various technologies.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['HTML/CSS', 'JavaScript Basics'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['React/Angular Framework', 'RESTful APIs'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Progressive Web Apps', 'Performance Optimization'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Important for understanding client requirements and presenting solutions.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for debugging and creating responsive designs.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'Google Mobile Web Specialist',
          'AWS Certified Developer - Associate'
        ],
        projectIdeas: [
          'Build a responsive e-commerce website',
          'Create a single-page application with modern framework'
        ]
      },
      'cloud-engineer': {
        title: 'Cloud Engineer',
        description: 'A Cloud Engineer designs and manages cloud infrastructure and services.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['Cloud Fundamentals', 'Basic Networking'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Cloud Services (AWS/Azure/GCP)', 'Infrastructure Management'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Multi-Cloud Architecture', 'Cloud Security'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Critical for explaining cloud solutions to stakeholders.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for troubleshooting cloud infrastructure issues.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'AWS Certified Solutions Architect',
          'Microsoft Certified: Azure Solutions Architect Expert'
        ],
        projectIdeas: [
          'Design and deploy a scalable cloud infrastructure',
          'Migrate on-premises applications to the cloud'
        ]
      },
      'ai-engineer': {
        title: 'AI Engineer',
        description: 'An AI Engineer develops artificial intelligence systems and machine learning models.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['Python for AI', 'Machine Learning Basics'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Deep Learning', 'Neural Networks'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Natural Language Processing', 'Computer Vision'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Important for explaining AI models and their implications.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for designing effective AI solutions.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'TensorFlow Developer Certificate',
          'AWS Certified Machine Learning - Specialty'
        ],
        projectIdeas: [
          'Build a chatbot using NLP',
          'Create an image recognition system'
        ]
      },
      'database-engineer': {
        title: 'Database Engineer',
        description: 'A Database Engineer designs and optimizes database systems for efficient data storage and retrieval.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['SQL Fundamentals', 'Database Design'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Database Administration', 'Query Optimization'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['NoSQL Databases', 'Data Warehousing'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Important for collaborating with developers and stakeholders.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for optimizing database performance.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'Oracle Certified Professional MySQL Database Administrator',
          'MongoDB Certified Developer'
        ],
        projectIdeas: [
          'Design a database schema for a large application',
          'Optimize slow database queries'
        ]
      },
      'soc-engineer': {
        title: 'SOC Engineer',
        description: 'A SOC Engineer monitors and responds to security incidents in real-time.',
        roadmapLevels: [
          {
            level: 'Beginner',
            skills: ['Security Monitoring Basics', 'SIEM Tools'],
            expanded: false
          },
          {
            level: 'Intermediate',
            skills: ['Incident Response', 'Threat Analysis'],
            expanded: false
          },
          {
            level: 'Advanced',
            skills: ['Forensic Analysis', 'Security Automation'],
            expanded: false
          }
        ],
        softSkills: [
          {
            title: 'Communication Skills',
            description: 'Critical for reporting security incidents quickly and accurately.',
            course: 'Business Communication (course)',
            courseUrl: 'https://www.coursera.org/learn/business-communication'
          },
          {
            title: 'Problem Solving',
            description: 'Essential for analyzing and responding to security threats.',
            course: 'Creative Problem Solving (course)',
            courseUrl: 'https://www.linkedin.com/learning/page-not-found?trk=lynda_redirect_learning'
          }
        ],
        certifications: [
          'GIAC Security Operations (GSEC)',
          'Certified SOC Analyst (CSA)'
        ],
        projectIdeas: [
          'Set up a security monitoring system',
          'Create incident response playbooks'
        ]
      }
    };

    const careerData = careerDataMap[careerId] || careerDataMap['data-scientist'];

    this.careerTitle = careerData.title;
    this.careerDescription = careerData.description;
    this.roadmapLevels = careerData.roadmapLevels;
    // convert simple string skills into detailed SkillDetail objects when possible
    this.enrichRoadmapLevels();
    // Expand the first level by default (to match the example UI)
    if (this.roadmapLevels && this.roadmapLevels.length > 0) {
      this.roadmapLevels.forEach((l, idx) => l.expanded = idx === 0);
    }
    this.softSkills = careerData.softSkills;
    this.certifications = careerData.certifications;
    this.projectIdeas = careerData.projectIdeas;
    // initialize progress based on any detailed skills
    this.updateProgress();
    // Auto-save the generated roadmap (if not a duplicate) and persist a lightweight summary for dashboard
    this.autoSaveGeneratedRoadmap();
    this.saveSummaryToStorage();
  }

  // Auto-save a freshly generated roadmap so it appears in the dashboard saved list.
  // Avoid creating exact duplicates by comparing the career title and serialized roadmapLevels.
  private autoSaveGeneratedRoadmap() {
    try {
      const existing = this.userStorage.getSavedRoadmaps();
      const currentHash = JSON.stringify(this.roadmapLevels || []);
      const duplicate = existing.some((r: any) => {
        try {
          return r.careerTitle === this.careerTitle && JSON.stringify(r.roadmapLevels || []) === currentHash;
        } catch (e) {
          return false;
        }
      });
      if (!duplicate) {
        // create a named entry and mark as active
        this.saveAsNewRoadmap();
      }
    } catch (e) {
      // ignore errors silently
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.router.navigate(['/auth']);
  }

  toggleLevel(level: RoadmapLevel) {
    level.expanded = !level.expanded;
  }

  getSkillsCount(level: RoadmapLevel): number {
    return level.skills.length;
  }

  // Get all skills for the graph visualization
  getAllSkillsForGraph(): SkillDetail[] {
    const allSkills: SkillDetail[] = [];
    this.roadmapLevels.forEach((level: RoadmapLevel) => {
      level.skills.forEach(skill => {
        if (typeof skill !== 'string') {
          const skillDetail = skill as SkillDetail;
          allSkills.push({
            ...skillDetail,
            level: level.level
          } as any);
        }
      });
    });
    return allSkills;
  }

  toggleSkillGraph() {
    this.showSkillGraph = !this.showSkillGraph;
  }

  saveSummaryToStorage() {
    const summary = {
      careerTitle: this.careerTitle,
      estimatedTime: this.estimatedTime,
      progress: this.progress,
      skillsCompleted: this.skillsCompleted
    };
    this.userStorage.setRoadmapSummary(summary);
  }

  // Save the full roadmap (including skill completed flags) as a named entry so multiple
  // roadmaps can be stored. Entries are stored under 'savedRoadmaps' in localStorage.
  saveAsNewRoadmap(name?: string) {
    try {
      const existing = this.userStorage.getSavedRoadmaps();
      const id = `${this.careerTitle.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}`;
      const entry = {
        id,
        name: name || `${this.careerTitle} (${new Date().toLocaleString()})`,
        careerTitle: this.careerTitle,
        estimatedTime: this.estimatedTime,
        progress: this.progress,
        skillsCompleted: this.skillsCompleted,
        roadmapLevels: this.roadmapLevels
      };
      existing.push(entry);
      this.userStorage.setSavedRoadmaps(existing);
      this.userStorage.setActiveRoadmapId(id);
      // also keep lightweight summary for dashboard
      this.saveSummaryToStorage();
      return id;
    } catch (e) {
      return null;
    }
  }

  // List saved roadmaps
  listSavedRoadmaps() {
    return this.userStorage.getSavedRoadmaps();
  }

  // Load a saved roadmap by id into the current view (overwrites current roadmap)
  loadSavedRoadmap(id: string) {
    try {
      const saved = this.listSavedRoadmaps();
      const found = saved.find((r: any) => r.id === id);
      if (found) {
        this.careerTitle = found.careerTitle || this.careerTitle;
        this.estimatedTime = found.estimatedTime || this.estimatedTime;
        this.progress = found.progress || 0;
        this.skillsCompleted = found.skillsCompleted || 0;
        this.roadmapLevels = found.roadmapLevels || this.roadmapLevels;
        return true;
      }
    } catch (e) {
      // ignore
    }
    return false;
  }
}
