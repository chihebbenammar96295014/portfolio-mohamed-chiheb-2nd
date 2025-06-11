import { Component } from '@angular/core';

interface Interest {
  name: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent {
  interests: Interest[] = [
    { name: 'Natation', icon: 'fa-solid fa-person-swimming', description: "J'aime nager pour me détendre et rester en forme." },
    { name: 'Randonnée', icon: 'fa-solid fa-person-hiking', description: 'Explorer la nature et relever de nouveaux défis.' },
    { name: 'Échecs', icon: 'fa-solid fa-chess', description: 'Développer la stratégie et la concentration.' },
    { name: 'Competitive programming', icon: 'fa-solid fa-laptop-code', description: 'Résoudre des problèmes algorithmiques pour progresser.' }
  ];
}
