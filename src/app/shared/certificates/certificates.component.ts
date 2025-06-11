import { Component } from '@angular/core';

interface Certificate {
  name: string;
  platform: string;
  date: string;
  url: string;
  skills: string[];
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      name: 'AWS Academy Cloud Foundations',
      platform: 'AWS Academy',
      date: 'Nov. 2024',
      url: '#', // Remplacer par le vrai lien si dispo
      skills: ['Cloud computing basics', 'AWS core services']
    },
    {
      name: 'CCNA 1',
      platform: 'Cisco',
      date: 'Mar. 2024',
      url: '#',
      skills: ['LAN/WAN skills', 'TCP/IP', 'OSPF protocol knowledge']
    },
    {
      name: 'CCNA 2',
      platform: 'Cisco',
      date: 'May 2024',
      url: '#',
      skills: ['Advanced networking', 'IP addressing', 'Subnetting']
    },
    {
      name: 'Java Programming Certificate',
      platform: 'Udemy',
      date: 'Feb. 2024',
      url: '#',
      skills: ['Object-oriented programming', 'Java basics']
    }
  ];
}
