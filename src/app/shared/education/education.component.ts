import { Component } from '@angular/core';

interface Education {
  school: string;
  degree: string;
  period: string;
  specialty: string;
  icon: string;
  badge?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations: Education[] = [
    {
      school: 'EPI School of Engineering Sousse',
      degree: '2nd Year – Engineering Cycle',
      period: '2024 – 2025',
      specialty: 'Software Engineering',
      icon: 'fa-solid fa-graduation-cap',
      badge: 'fa-solid fa-certificate'
    },
    {
      school: 'EPI School of Engineering Sousse',
      degree: '1st Year – Engineering Cycle',
      period: '2023 – 2024',
      specialty: 'Focus on advanced programming, software engineering, and system architecture',
      icon: 'fa-solid fa-graduation-cap',
      badge: 'fa-solid fa-certificate'
    },
    {
      school: 'IPEIM Monastir',
      degree: '2nd Year – Preparatory Cycle',
      period: '2022 – 2023',
      specialty: 'Mathematics, physics, and computer science fundamentals',
      icon: 'fa-solid fa-school',
      badge: 'fa-solid fa-check-circle'
    },
    {
      school: 'IPEIN Nabeul',
      degree: '1st Year – Preparatory Cycle',
      period: '2021 – 2022',
      specialty: 'Mathematics, physics, and computer science fundamentals',
      icon: 'fa-solid fa-school',
      badge: 'fa-solid fa-check-circle'
    },
    {
      school: "Lycée Hached, M'saken Sousse",
      degree: 'Baccalaureate in Experimental Sciences',
      period: '2020 – 2021',
      specialty: 'Experimental Sciences',
      icon: 'fa-solid fa-user-graduate',
      badge: 'fa-solid fa-award'
    }
  ];
}
