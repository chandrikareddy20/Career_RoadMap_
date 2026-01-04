import { Injectable } from '@angular/core';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface RoadmapQuiz {
  id: string;
  name: string;
  questions: QuizQuestion[];
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  // Example: in-memory snapshot store for quizzes. In production replace with HTTP calls.
  private exampleQuizzes: { [roadmapId: string]: RoadmapQuiz } = {};

  constructor() {
    // example placeholder quiz for a roadmap id 'example-1'
    this.exampleQuizzes['example-1'] = {
      id: 'example-1',
      name: 'Example Roadmap Quiz',
      questions: [
        { question: 'What is the main focus of this roadmap?', options: ['Core skills', 'Gardening', 'Cooking', 'Dancing'], correctIndex: 0, explanation: 'This roadmap focuses on core, project-ready skills.' },
        { question: 'Which resource helps most?', options: ['Hands-on projects', 'Horoscopes', 'TV shows', 'Comics'], correctIndex: 0, explanation: 'Hands-on projects help you practice and retain skills.' },
        { question: 'Good next step after finishing?', options: ['Build a small project', 'Ignore it', 'Publish a novel', 'Travel'], correctIndex: 0, explanation: 'Building a small project consolidates learning and creates portfolio evidence.' }
      ]
    };
  }

  // Public method to get topic questions for a skill (used by quiz-page component)
  getTopicQuestionsForSkill(skillName: string): QuizQuestion[] {
    return this.getTopicQuestions(skillName);
  }

  // Topic-based question bank
  private getTopicQuestions(skillName: string): QuizQuestion[] {
    const skillLower = skillName.toLowerCase();
    const questions: QuizQuestion[] = [];

    // Python-related questions
    if (skillLower.includes('python')) {
      questions.push(
        { question: 'What is the primary use case for Python in data science?', options: ['Data analysis and machine learning', 'Only web development', 'Only game development', 'Only mobile apps'], correctIndex: 0, explanation: 'Python is widely used in data science for data analysis, machine learning, and scientific computing due to libraries like Pandas, NumPy, and scikit-learn.' },
        { question: 'Which Python library is most commonly used for data manipulation?', options: ['Pandas', 'Django', 'Flask', 'PyGame'], correctIndex: 0, explanation: 'Pandas is the go-to library for data manipulation and analysis in Python.' },
        { question: 'What is a Python list comprehension?', options: ['A concise way to create lists', 'A type of loop', 'A function', 'A class'], correctIndex: 0, explanation: 'List comprehensions provide a concise way to create lists based on existing lists or iterables.' },
        { question: 'Which of these is NOT a Python data structure?', options: ['Array (in traditional sense)', 'List', 'Dictionary', 'Tuple'], correctIndex: 0, explanation: 'Python uses lists instead of traditional arrays, though NumPy arrays exist for numerical computing.' }
      );
    }

    // Machine Learning questions
    if (skillLower.includes('machine learning') || skillLower.includes('ml') || skillLower.includes('deep learning')) {
      questions.push(
        { question: 'What is the difference between supervised and unsupervised learning?', options: ['Supervised uses labeled data, unsupervised uses unlabeled data', 'They are the same', 'Supervised is faster', 'Unsupervised requires more data'], correctIndex: 0, explanation: 'Supervised learning uses labeled training data, while unsupervised learning finds patterns in unlabeled data.' },
        { question: 'What is overfitting in machine learning?', options: ['Model performs well on training data but poorly on new data', 'Model is too simple', 'Model uses too much data', 'Model is too fast'], correctIndex: 0, explanation: 'Overfitting occurs when a model learns the training data too well, including noise, and fails to generalize to new data.' },
        { question: 'Which algorithm is commonly used for classification tasks?', options: ['Random Forest', 'Only linear regression', 'Only clustering', 'Only neural networks'], correctIndex: 0, explanation: 'Random Forest is a versatile algorithm that works well for both classification and regression tasks.' },
        { question: 'What is cross-validation used for?', options: ['To assess model performance and prevent overfitting', 'To speed up training', 'To reduce data size', 'To visualize data'], correctIndex: 0, explanation: 'Cross-validation helps evaluate model performance and detect overfitting by testing on different subsets of data.' }
      );
    }

    // Web Development questions
    if (skillLower.includes('html') || skillLower.includes('css') || skillLower.includes('javascript') || skillLower.includes('react') || skillLower.includes('angular') || skillLower.includes('web')) {
      questions.push(
        { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System', 'Coded Style Syntax'], correctIndex: 0, explanation: 'CSS stands for Cascading Style Sheets, used to style HTML elements.' },
        { question: 'What is the purpose of JavaScript in web development?', options: ['To add interactivity and dynamic behavior to web pages', 'Only for styling', 'Only for structure', 'Only for databases'], correctIndex: 0, explanation: 'JavaScript is used to add interactivity, handle events, and create dynamic content on web pages.' },
        { question: 'What is a React component?', options: ['A reusable piece of UI code', 'A database table', 'A CSS file', 'A server endpoint'], correctIndex: 0, explanation: 'React components are reusable pieces of code that return JSX to render UI elements.' },
        { question: 'What is the Document Object Model (DOM)?', options: ['A programming interface for HTML and XML documents', 'A database', 'A CSS framework', 'A JavaScript library'], correctIndex: 0, explanation: 'The DOM is a programming interface that represents the structure of HTML/XML documents as a tree of objects.' }
      );
    }

    // Database questions
    if (skillLower.includes('sql') || skillLower.includes('database') || skillLower.includes('nosql')) {
      questions.push(
        { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Logic', 'System Query Language'], correctIndex: 0, explanation: 'SQL stands for Structured Query Language, used to manage and query relational databases.' },
        { question: 'What is a primary key in a database?', options: ['A unique identifier for each row in a table', 'A foreign key', 'A column name', 'A table name'], correctIndex: 0, explanation: 'A primary key uniquely identifies each row in a database table and cannot be null.' },
        { question: 'What is the difference between SQL and NoSQL databases?', options: ['SQL is relational, NoSQL is non-relational', 'They are identical', 'SQL is faster', 'NoSQL is older'], correctIndex: 0, explanation: 'SQL databases use structured, relational schemas, while NoSQL databases use flexible, non-relational data models.' },
        { question: 'What is normalization in database design?', options: ['Organizing data to reduce redundancy and improve integrity', 'Making databases faster', 'Adding more tables', 'Removing all indexes'], correctIndex: 0, explanation: 'Normalization is the process of organizing data in a database to eliminate redundancy and ensure data integrity.' }
      );
    }

    // Cloud/DevOps questions
    if (skillLower.includes('cloud') || skillLower.includes('aws') || skillLower.includes('azure') || skillLower.includes('docker') || skillLower.includes('kubernetes') || skillLower.includes('devops')) {
      questions.push(
        { question: 'What is Docker used for?', options: ['Containerizing applications for consistent deployment', 'Only for databases', 'Only for web servers', 'Only for mobile apps'], correctIndex: 0, explanation: 'Docker is a platform for containerizing applications, making them portable and consistent across environments.' },
        { question: 'What is the main benefit of cloud computing?', options: ['Scalability and cost-effectiveness', 'Only security', 'Only speed', 'Only storage'], correctIndex: 0, explanation: 'Cloud computing provides scalability, cost-effectiveness, and flexibility in resource management.' },
        { question: 'What is Kubernetes used for?', options: ['Orchestrating containerized applications', 'Only for databases', 'Only for web development', 'Only for machine learning'], correctIndex: 0, explanation: 'Kubernetes is an orchestration platform for managing containerized applications at scale.' },
        { question: 'What is Infrastructure as Code (IaC)?', options: ['Managing infrastructure through code and configuration files', 'Writing code in infrastructure', 'Building physical servers', 'Manual server setup'], correctIndex: 0, explanation: 'IaC allows you to define and manage infrastructure using code, enabling version control and automation.' }
      );
    }

    // Security questions
    if (skillLower.includes('security') || skillLower.includes('cyber') || skillLower.includes('penetration') || skillLower.includes('network security')) {
      questions.push(
        { question: 'What is encryption used for?', options: ['Protecting data by converting it to unreadable format', 'Making data faster', 'Compressing data', 'Deleting data'], correctIndex: 0, explanation: 'Encryption converts data into a secure format that can only be read by authorized parties with the decryption key.' },
        { question: 'What is a firewall?', options: ['A network security device that monitors and controls traffic', 'A database', 'A web server', 'A programming language'], correctIndex: 0, explanation: 'A firewall is a security device that monitors and filters network traffic based on security rules.' },
        { question: 'What is SQL injection?', options: ['A security vulnerability where malicious SQL code is inserted', 'A database feature', 'A query optimization', 'A backup method'], correctIndex: 0, explanation: 'SQL injection is an attack where malicious SQL code is inserted into input fields to manipulate databases.' },
        { question: 'What is two-factor authentication (2FA)?', options: ['A security method requiring two forms of verification', 'A single password', 'A firewall', 'An encryption method'], correctIndex: 0, explanation: '2FA requires users to provide two different authentication factors to verify their identity.' }
      );
    }

    // General programming questions (fallback)
    if (questions.length === 0) {
      questions.push(
        { question: `What is the primary purpose of learning ${skillName}?`, options: ['To apply it in real-world projects and solve problems', 'Only for exams', 'Only for theory', 'Only for certificates'], correctIndex: 0, explanation: `Learning ${skillName} should focus on practical application to solve real-world problems and build projects.` },
        { question: `Which learning method is most effective for ${skillName}?`, options: ['Hands-on practice and building projects', 'Only reading documentation', 'Only watching videos', 'Only taking notes'], correctIndex: 0, explanation: 'Hands-on practice and building projects help reinforce learning and develop practical skills.' },
        { question: `What is a good next step after learning ${skillName}?`, options: ['Build a project to apply the knowledge', 'Forget everything', 'Only read more theory', 'Stop learning'], correctIndex: 0, explanation: 'Building projects helps consolidate learning and creates a portfolio of your skills.' },
        { question: `How do you measure proficiency in ${skillName}?`, options: ['By successfully completing projects and solving problems', 'By reading speed', 'By number of courses taken', 'By time spent studying'], correctIndex: 0, explanation: 'Proficiency is best measured by your ability to apply knowledge in practical projects and solve real problems.' }
      );
    }

    // Add more general questions to reach 9-10 questions
    const generalQuestions: QuizQuestion[] = [
      { question: 'What is version control used for?', options: ['Tracking changes in code and collaborating', 'Only for backups', 'Only for deployment', 'Only for testing'], correctIndex: 0, explanation: 'Version control systems like Git help track code changes, collaborate with teams, and manage project history.' },
      { question: 'What is the importance of code documentation?', options: ['Helps others understand and maintain code', 'Only for beginners', 'Only for comments', 'Not important'], correctIndex: 0, explanation: 'Good documentation makes code maintainable, helps team collaboration, and explains complex logic.' },
      { question: 'What is the difference between frontend and backend development?', options: ['Frontend is user interface, backend is server-side logic', 'They are the same', 'Frontend is faster', 'Backend is easier'], correctIndex: 0, explanation: 'Frontend handles what users see and interact with, while backend handles server logic, databases, and APIs.' },
      { question: 'What is an API?', options: ['Application Programming Interface - allows applications to communicate', 'A database', 'A programming language', 'A web framework'], correctIndex: 0, explanation: 'An API (Application Programming Interface) defines how different software components should interact and communicate.' },
      { question: 'What is the importance of testing in software development?', options: ['Ensures code quality and catches bugs early', 'Only slows down development', 'Only for large projects', 'Not necessary'], correctIndex: 0, explanation: 'Testing helps ensure code quality, catch bugs early, and maintain reliable software.' }
    ];

    // Combine topic-specific and general questions, shuffle and take 9-10
    const allQuestions = [...questions, ...generalQuestions];
    
    // Shuffle options for each question and update correctIndex
    allQuestions.forEach(q => {
      const correctAnswer = q.options[q.correctIndex];
      // Shuffle options array
      const shuffledOptions = [...q.options];
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      // Find new position of correct answer
      q.correctIndex = shuffledOptions.indexOf(correctAnswer);
      q.options = shuffledOptions;
    });
    
    // Shuffle question order
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    // Return 9-10 questions
    return allQuestions.slice(0, Math.min(10, Math.max(9, allQuestions.length)));
  }

  // Load a quiz for a saved roadmap id. If a stored example exists, return it; otherwise generate from savedRoadmaps.
  // Note: This method should be called with user-specific data, but for backward compatibility,
  // it accepts the saved roadmaps array. The caller should use UserStorageService to get user-specific roadmaps.
  getQuizForRoadmap(roadmapId: string, savedRoadmaps?: any[]) : RoadmapQuiz | null {
    if (!roadmapId) return null;
    if (this.exampleQuizzes[roadmapId]) return this.exampleQuizzes[roadmapId];

    try {
      // Use provided savedRoadmaps or fallback to localStorage (for backward compatibility)
      let saved: any[] = [];
      if (savedRoadmaps) {
        saved = savedRoadmaps;
      } else {
        // Fallback: try to get from localStorage (shouldn't happen in normal flow)
        try {
          saved = JSON.parse(localStorage.getItem('savedRoadmaps') || '[]');
        } catch (e) {
          saved = [];
        }
      }
      const found = saved.find((r: any) => r.id === roadmapId);
      if (!found) return null;
      
      // Collect all skills from the roadmap
      const skills: string[] = [];
      for (const level of (found.roadmapLevels || [])) {
        for (const s of level.skills || []) {
          if (typeof s === 'string') skills.push(s);
          else if (s && s.name) skills.push(s.name);
        }
      }
      
      // Dedupe skills
      const uniq = Array.from(new Set(skills));
      
      if (uniq.length === 0) {
        // Fallback to general questions
        let fallbackQuestions = this.getTopicQuestions('General Programming');
        // Shuffle options for each question
        fallbackQuestions.forEach(q => {
          const correctAnswer = q.options[q.correctIndex];
          const shuffledOptions = [...q.options];
          for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
          }
          q.correctIndex = shuffledOptions.indexOf(correctAnswer);
          q.options = shuffledOptions;
        });
        return {
          id: roadmapId,
          name: found.name || 'Roadmap Quiz',
          questions: fallbackQuestions
        };
      }

      // Generate questions based on the most common skill or combine multiple skills
      const primarySkill = uniq[0];
      const questions = this.getTopicQuestions(primarySkill);
      
      // If we don't have enough questions, add questions from other skills
      if (questions.length < 9 && uniq.length > 1) {
        for (let i = 1; i < uniq.length && questions.length < 10; i++) {
          const additionalQuestions = this.getTopicQuestions(uniq[i]);
          questions.push(...additionalQuestions.slice(0, 10 - questions.length));
        }
      }

      // Ensure we have 9-10 questions
      let finalQuestions = questions.length >= 9 ? questions.slice(0, 10) : questions;
      
      // Shuffle options for each question and update correctIndex
      finalQuestions.forEach(q => {
        const correctAnswer = q.options[q.correctIndex];
        // Shuffle options array
        const shuffledOptions = [...q.options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        // Find new position of correct answer
        q.correctIndex = shuffledOptions.indexOf(correctAnswer);
        q.options = shuffledOptions;
      });

      return {
        id: roadmapId,
        name: found.name || 'Roadmap Quiz',
        questions: finalQuestions
      };
    } catch (e) {
      return null;
    }
  }
}
