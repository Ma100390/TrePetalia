import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStethoscope, faCarSide, faHome, faUsers ,faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-paccompagnamento',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule,CommonModule],
  templateUrl: './paccompagnamento.component.html',
  styleUrl: './paccompagnamento.component.css'
})
export class PaccompagnamentoComponent {
  faStethoscope = faStethoscope;
  faCarSide = faCarSide;
  faHome = faHome;
  faUsers = faUsers;
  faArrowRight = faArrowRight;
  questions = [
    {
      question: 'Chi può usufruire del servizio di accompagnamento assistito per anziani e disabili?',
      answer: 'Per chi non può spostarsi autonomamente, offriamo un accompagnamento verso ambulatori e ospedali. I nostri operatori qualificati assistono l’assistito dall\'andata al ritorno a casa.',
      showAnswer: false
    },
    {
      question: 'Quali mezzi di trasporto utilizzate per il servizio di accompagnamento assistito?',
      answer: 'Per il ritorno a casa in seguito alle dimissioni, offriamo un servizio di accompagnamento con mezzi attrezzati per sedia a rotelle, garantendo sicurezza e comodità nel rientro.',
      showAnswer: false
    },
    {
      question: 'Qual è il costo del trasporto assistito dopo le dimissioni ospedaliere a Lecce e provincia?',
      answer: 'Il costo del servizio dipende dalle necessità specifiche dell\'utente. Ti invitiamo a contattarci per un preventivo personalizzato in base alla situazione.',
      showAnswer: false
    },
    {
      question: 'Offrite un servizio di accompagnamento per eventi sociali e cerimonie?',
      answer: 'Il servizio di accompagnamento è disponibile anche per partecipare a eventi sociali e cerimonie, offrendo supporto completo per mantenere vive le occasioni di socialità in massima sicurezza.',
      showAnswer: false
    },
    {
      question: 'Quali zone della provincia di Lecce copre il servizio di trasporto assistito?',
      answer: 'Offriamo i nostri servizi in tutta la provincia di Lecce, con particolare attenzione alle zone rurali e ai centri abitati minori.',
      showAnswer: true
    }
  ];

  // Funzione per toggle la visibilità della risposta
  toggleAnswer(index: number) {
    this.questions[index].showAnswer = !this.questions[index].showAnswer;
  }
}

