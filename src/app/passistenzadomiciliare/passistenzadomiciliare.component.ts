import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { faHome, faHeart, faUserCheck ,faHandsHelping, faUsers,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-passistenzadomiciliare',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule,CommonModule],
  templateUrl: './passistenzadomiciliare.component.html',
  styleUrl: './passistenzadomiciliare.component.css'
})
export class PassistenzadomiciliareComponent {
  faHome = faHome;
  faHeart = faHeart;
  faUserCheck = faUserCheck;
  fahandshelping =  faHandsHelping;
  fausers = faUsers;
  faArrowRight = faArrowRight;
   questions = [
    {
      question: 'Chi può usufruire del servizio di assistenza domiciliare per anziani e disabili?',
      answer: 'Il servizio di assistenza domiciliare è disponibile per anziani, disabili, persone con difficoltà motorie o cognitive, e per chiunque necessiti di supporto nelle attività quotidiane per mantenere l’indipendenza a casa propria.',
      showAnswer: false
    },
    {
      question: 'Come posso richiedere il servizio di assistenza domiciliare?',
      answer: 'Puoi richiedere il servizio contattandoci telefonicamente. Dopo una valutazione delle necessità, organizzeremo il piano di assistenza personalizzato.',
      showAnswer: false
    },
    {
      question: 'Offrite anche supporto per la gestione delle medicazioni e trattamenti sanitari?',
      answer: 'Sì, i nostri operatori qualificati forniscono supporto per la gestione delle medicazioni, trattamento delle ferite e somministrazione dei farmaci, sotto la supervisione di un medico se necessario.',
      showAnswer: false
    },
    {
      question: 'Il servizio di assistenza domiciliare può essere finanziato?',
      answer: 'Sì, utilizzando i buoni servizio della regione Puglia. Buoni Servizio si uniscono nell’ambito delle politiche di welfare regionale per promuovere l’inclusione sociale e migliorare la qualità della vita degli utenti e dei loro caregiver.',
      showAnswer: false
    },
    {
      question: 'Qual è il costo del servizio di assistenza domiciliare?',
      answer: 'Il costo del servizio dipende dalle necessità specifiche dell’assistito, come la durata delle visite e il tipo di supporto richiesto. Ti invitiamo a contattarci per un preventivo personalizzato basato sulle tue esigenze.',
      showAnswer: false
    },
    {
      question: 'Il servizio di assistenza domiciliare è disponibile anche nei weekend e durante le festività?',
      answer: 'Sì, il nostro servizio è disponibile anche nei weekend e durante le festività per garantire assistenza continua a chi ne ha bisogno.',
      showAnswer: false
    },
    {
      question: 'Quali zone della provincia di Lecce copre il servizio di assistenza domiciliare?',
      answer: 'Il nostro servizio è disponibile in tutta la provincia di Lecce e la provincia di Brindisi, comprese le zone rurali e i centri abitati minori. Ci impegniamo a raggiungere anche le aree più remote per garantire supporto a tutti.',
      showAnswer: true
    }
  ];

  // Funzione per toggle la visibilità della risposta
  toggleAnswer(index: number) {
    this.questions[index].showAnswer = !this.questions[index].showAnswer;
  }
}
