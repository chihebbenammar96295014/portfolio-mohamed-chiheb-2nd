import { Component } from '@angular/core';

interface Language {
  name: string;
  icon: string;
  level: string;
  percent: number;
  flag: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  languages: Language[] = [
    { name: 'Arabe', icon: 'fa-solid fa-globe', level: 'Natif', percent: 100, flag: '🇹🇳' },
    { name: 'Français', icon: 'fa-solid fa-globe', level: 'Courant', percent: 95, flag: '🇫🇷' },
    { name: 'Anglais', icon: 'fa-solid fa-globe', level: 'Courant', percent: 90, flag: '🇬🇧' },
    { name: 'Espagnol', icon: 'fa-solid fa-globe', level: 'Débutant', percent: 20, flag: '🇪🇸' }
  ];
}
