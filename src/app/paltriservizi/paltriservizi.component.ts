import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-paltriservizi',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './paltriservizi.component.html',
  styleUrl: './paltriservizi.component.css'
})
export class PaltriserviziComponent implements OnInit {
  servizio: string = '';
  contenuto: string = '';
  faArrowRight = faArrowRight;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Ottieni il parametro dalla rotta
    this.route.paramMap.subscribe(params => {
      this.servizio = params.get('servizio')!;

      // Modifica dinamicamente il contenuto in base al parametro 'servizio'
      this.updateContent();
    });
  }

  // Funzione che aggiorna il contenuto in base al servizio selezionato
  updateContent() {
    switch (this.servizio) {
      case 'Infermieri':
        this.contenuto = 'I nostri <strong>infermieri altamente qualificati</strong> sono disponibili per offrire supporto a domicilio o nelle strutture sanitarie. Con un approccio personalizzato e attento, ci occupiamo di ogni aspetto della salute del paziente, garantendo <strong>comfort, sicurezza</strong> e un\'assistenza di qualità. I nostri infermieri sono formati per gestire anche le situazioni più complesse, offrendo supporto in medicina preventiva, cura delle ferite, gestione delle terapie e molto altro';
        break;
      case 'Fisioterapisti':
        this.contenuto = 'Il nostro team di <strong>fisioterapisti esperti</strong> è a disposizione per trattamenti individuali mirati al recupero fisico, al miglioramento della mobilità e al sollievo dal dolore. Offriamo terapie fisiche avanzate, riabilitazione post-operatoria, trattamenti per problemi muscolari e articolari, e programmi di prevenzione per migliorare il <strong>benessere generale</strong>.';
        break;
      case 'Psicologo':
        this.contenuto = 'Il nostro servizio di supporto psicologico è dedicato a chi ha bisogno di affrontare difficoltà emotive, stress, ansia o depressione. Offriamo sessioni terapeutiche personalizzate a domicilio, per garantire un ambiente confortevole e sicuro dove poter esprimere liberamente i propri <strong>sentimenti</strong>.';
        break;
      case 'Psicoterapeuta':
        this.contenuto = 'La psicoterapia è uno strumento potente per superare traumi, blocchi emotivi e difficoltà psicologiche. Offriamo un percorso di psicoterapia individuale o di coppia, con approcci diversi come la terapia cognitivo-comportamentale, la psicoterapia analitica e altre tecniche personalizzate, per aiutarti a esplorare il tuo mondo interiore e a trovare soluzioni efficaci per il tuo <strong>benessere mentale</strong>.';
        break;
      case 'Disbrigo-pratiche':
        this.contenuto = 'Gestire le pratiche burocratiche può essere complesso e stressante. Per questo motivo, offriamo un servizio completo di <strong>disbrigo pratiche</strong> per anziani, disabili e famiglie, assistendo con la gestione di documenti, richieste di agevolazioni, pratiche sanitarie e molto altro. Ci occupiamo di tutte le fasi del processo, per garantire che ogni passo venga compiuto correttamente e tempestivamente.';
        break;
      default:
        this.contenuto = 'Ci scusiamo, ma il servizio richiesto non è al momento disponibile. Ti invitiamo a contattarci per maggiori informazioni sui nostri servizi o per ricevere supporto personalizzato. Siamo sempre pronti ad aiutarti.';
        break;
    }
  }
}


