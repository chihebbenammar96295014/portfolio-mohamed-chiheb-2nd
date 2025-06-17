import { Component, Input, OnInit } from '@angular/core';

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  stack: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
  image: string;
  type: 'stage' | 'project';
  demo?: string;
  mediaType?: 'image' | 'video';
  mediaUrl?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() typeFilter: 'stage' | 'project' | 'all' = 'all';
  showVideoModal = false;
  currentVideoUrl = '';

  selectedExperience: Experience | null = null;

  experiences: Experience[] = [
    {
      company: 'Satoripop, Sousse',
      period: '07/2024 – 09/2024',
      role: 'Angular & Spring Boot Intern',
      description: 'Practical training on Angular and Spring Boot. Participated in code reviews to improve software quality.',
      stack: [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'Java', icon: 'fa-brands fa-java', color: '#007396' }
      ],
      image: '/assets/exp-satoripop.png',
      type: 'stage'
    },
    {
      company: 'Avionav, Borjine',
      period: '09/2023 – 09/2023',
      role: 'Qt Intern',
      description: 'Developed user interfaces for avionics systems using Qt.',
      stack: [
        { name: 'Qt', icon: 'fa-solid fa-cube', color: '#41cd52' },
        { name: 'C++', icon: 'fa-solid fa-code', color: '#00599c' }
      ],
      image: '/assets/exp-avionav.png',
      type: 'stage'
    },
    {
      company: 'Projet WorkWave (ENISO)',
      period: '2024',
      role: 'Fullstack Developer',
      description: 'Web platform for freelancers and companies. Project management, profiles, matching.',
      stack: [
        { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' },
        { name: 'MySQL', icon: 'fa-solid fa-database', color: '#4479a1' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
      ],
      image: '/assets/workWave/logo.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/workWave/video workWave.mp4'
    },
    {
      company: 'Projet Medical Chatbot',
      period: '2025',
      role: 'AI Chatbot Developer',
      description: 'Medical pre-diagnosis system with appointment booking, AI chatbot (Rasa), web interface.',
      stack: [
        { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
        { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6db33f' },
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Rasa', icon: 'fa-solid fa-robot', color: '#5d5dff' }
      ],
      image: '/assets/consultEase/consultEase-home.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/consultEase/video-consultEase.mp4'
    },
    {
      company: 'Projet Tic-Tac-Toe Game',
      period: '2024',
      role: 'Python Developer',
      description: 'Interactive game coded in Python, score management, simple interface.',
      stack: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' }
      ],
      image: '/assets/jeux xo/jeuxo.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/jeux xo/jeu XO.mp4'
    },
    {
      company: 'Projet Site ENISO',
      period: '2023',
      role: 'Frontend Developer',
      description: "Showcase website for ENISO, presentation of activities and clubs.",
      stack: [
        { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e44d26' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
        { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' }
      ],
      image: '/assets/Eniso-Team/logo.png',
      type: 'project',
      mediaType: 'video',
      mediaUrl: '/assets/Eniso-Team/magazin_eniso.mp4'
    },
    {
      company: 'Data Analysis Project',
      period: '2025',
      role: 'Data Analyst',
      description: 'Conducted data cleaning, visualization, and insight extraction using Python (Pandas, Matplotlib, Seaborn).',
      stack: [
        { name: 'Python', icon: 'fa-brands fa-python', color: '#3776ab' },
        { name: 'Pandas', icon: 'fa-solid fa-database', color: '#150458' },
        { name: 'Matplotlib', icon: 'fa-solid fa-chart-line', color: '#11557c' },
        { name: 'Seaborn', icon: 'fa-solid fa-water', color: '#43b7ba' }
      ],
      image: '/assets/analyse/photo-analyse.png',
      type: 'project',
      mediaType: 'image',
      mediaUrl: '/assets/analyse/photo-analyse.png'
    },
    {
      company: 'Speed Interface for Aircraft',
      period: '2024',
      role: 'Embedded Software Developer',
      description: 'Developed a high-performance speed interface for aircraft systems using Qt and C++.',
      stack: [
        { name: 'Qt', icon: 'fa-solid fa-cube', color: '#41cd52' },
        { name: 'C++', icon: 'fa-solid fa-code', color: '#00599c' }
      ],
      image: '/assets/avionav-speed/avionav.png',
      type: 'project',
      mediaType: 'image',
      mediaUrl: '/assets/avionav-speed/avionav.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get filteredExperiences(): Experience[] {
    if (this.typeFilter === 'all') {
      return this.experiences;
    } else {
      return this.experiences.filter(exp => exp.type === this.typeFilter);
    }
  }

  openExperienceMedia(experience: Experience) {
    this.selectedExperience = experience;
  }

  closeModal(): void {
    this.selectedExperience = null;
  }

  openVideoModal(videoUrl: string) {
    this.currentVideoUrl = videoUrl;
    this.showVideoModal = true;
  }

  closeVideoModal() {
    this.showVideoModal = false;
    this.currentVideoUrl = '';
  }

  isVideo(url: string): boolean {
    return url.toLowerCase().endsWith('.mp4');
  }
}
