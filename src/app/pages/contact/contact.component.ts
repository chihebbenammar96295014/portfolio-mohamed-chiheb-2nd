import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  sending = false;
  info = {
    email: 'chihebbenammar49@gmail.com',
    phone: '+216 96 295 014',
    location: '4070, Msaken, Sousse',
    linkedin: 'https://www.linkedin.com/in/mohamed-chiheb-eddine-benammar-0aa456284/',
    github: 'https://github.com/chihebbenammar'
  };

  onSubmit() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.contact = { name: '', email: '', subject: '', message: '' };
    }, 1200);
  }
}
