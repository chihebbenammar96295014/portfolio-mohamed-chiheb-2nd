import { Component } from '@angular/core';

interface ClientLogo {
  name: string;
  url: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = 'Mohamed Chiheb Eddine Benammar';
  title = '2nd Year Computer Engineering Student– Software Engineering ';
  heroMsg = 'I am Mohamed Chiheb, a Passionate Full Stack Developer.';
  profileImg = 'assets/photo-profile.jpeg'; // To be placed in assets/img/
  cvUrl = 'assets/cv -mohamed-chiheb.pdf'; // Link to the CV PDF
  clients: ClientLogo[] = [
    { name: 'Microsoft', url: '#', img: 'assets/img/client-microsoft.png' },
    { name: 'Google', url: '#', img: 'assets/img/client-google.png' },
    { name: 'Spotify', url: '#', img: 'assets/img/client-spotify.png' },
    { name: 'Tesla', url: '#', img: 'assets/img/client-tesla.png' },
    { name: 'Yassir', url: '#', img: 'assets/img/client-yassir.png' },
    { name: 'TikTok', url: '#', img: 'assets/img/client-tiktok.png' }
  ];
}
