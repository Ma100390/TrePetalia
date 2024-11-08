import { Component } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-pstruttura',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pstruttura.component.html',
  styleUrl: './pstruttura.component.css'
})
export class PstrutturaComponent {
  faArrowRight = faArrowRight;
}
