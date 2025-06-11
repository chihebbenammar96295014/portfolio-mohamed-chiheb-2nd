import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  info = {
    email: 'chihebbenammar49@gmail.com',
    phone: '+216 96 295 014',
    location: '4070, Msaken, Sousse',
    linkedin: 'https://www.linkedin.com/in/mohamed-chiheb-eddine-benammar-0aa456284/',
    github: 'https://github.com/chihebbenammar'
  };
  sending = false;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.sending = true;
      try {
        const templateParams = {
          to_name: 'Chiheb',
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          reply_to: this.contactForm.value.email,
        };

        await emailjs.send(
          'service_6awpxya',
          'template_rksj86r',
          templateParams,
          'XtVD9-A1KhSnivm5F'
        );

        this.submitted = true;
        this.contactForm.reset();
        alert('Your message has been sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        this.sending = false;
      }
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
