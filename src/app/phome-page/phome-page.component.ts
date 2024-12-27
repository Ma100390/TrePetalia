import { Component } from '@angular/core';
import { CnavbarComponent } from '../cnavbar/cnavbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { faArrowRight,faPeopleArrows, faBalanceScale, faLightbulb, faHeart } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-phome-page',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './phome-page.component.html',
  styleUrl: './phome-page.component.css'
})
export class PhomePageComponent {
  faArrowRight = faArrowRight;
  faPeopleArrows = faPeopleArrows;
  faBalanceScale = faBalanceScale;
  faLightbulb = faLightbulb;
  faHeart = faHeart;
}
