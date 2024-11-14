import { Component } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faUtensils, faPills, faHandHoldingHeart, faBed, faBroom, faTshirt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pstruttura',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pstruttura.component.html',
  styleUrl: './pstruttura.component.css'
})
export class PstrutturaComponent {
  faArrowRight = faArrowRight;
  faUsers = faUsers;
  faUtensils = faUtensils;
  faPills = faPills;
  faHandHoldingHeart = faHandHoldingHeart;
  faBed = faBed;
  faBroom = faBroom;
  faTshirt = faTshirt;
}
