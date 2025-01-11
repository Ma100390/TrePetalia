import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pcontatti',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './pcontatti.component.html',
  styleUrl: './pcontatti.component.css'
})
export class PcontattiComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;

  sedi = [
    {
      nome: 'Sede Centrale',
      indirizzo: 'Via Roma, 1, Milano',
      telefono: '+39 02 1234567',
      email: 'info@sede-centrale.it',
    },
    {
      nome: 'Filiale Nord',
      indirizzo: 'Via Torino, 15, Torino',
      telefono: '+39 011 7654321',
      email: 'nord@sede-filiale.it',
    },
    {
      nome: 'Filiale Sud',
      indirizzo: 'Via Napoli, 20, Napoli',
      telefono: '+39 081 9876543',
      email: 'sud@sede-filiale.it',
    },
    {
      nome: 'Filiale Est',
      indirizzo: 'Via Venezia, 10, Venezia',
      telefono: '+39 041 5678901',
      email: 'est@sede-filiale.it',
    },
  ];
}

