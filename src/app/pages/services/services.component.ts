import { Component } from '@angular/core';

interface Service {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; icon: string; color?: string }[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    // ===== FRONT-END =====
    {
      title: 'Front-End Development',
      icon: 'fa-solid fa-laptop-code',
      description: 'Creation of modern, responsive and high-performance interfaces.',
      skills: [
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'Sass', icon: 'fa-brands fa-sass', color: '#c69' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#563d7c' },
        { name: 'Figma', icon: 'fa-brands fa-figma', color: '#a259ff' }
      ]
    },

    // ===== BACK-END =====
    {
      title: 'Back-End Development',
      icon: 'fa-solid fa-database',
      description: 'Creation of APIs, database management, and business logic.',
      skills: [
        { name: 'Java', icon: 'fa-brands fa-java', color: '#007396' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' }
      ]
    },

    // ===== AI / DATA =====
    {
      title: 'Artificial Intelligence & Data',
      icon: 'fa-solid fa-brain',
      description: 'Data analysis, machine learning, and visualization.',
      skills: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Pandas', icon: 'fa-solid fa-table', color: '#150458' },
        { name: 'NumPy', icon: 'fa-solid fa-square-root-variable', color: '#013243' },
        { name: 'Matplotlib', icon: 'fa-solid fa-chart-column', color: '#11557c' },
        { name: 'Scikit-learn', icon: 'fa-solid fa-robot', color: '#f7931e' }
      ]
    }
  ];
}
