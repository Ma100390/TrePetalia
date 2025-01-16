import { Component } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { faArrowRight, faPhone, faPeopleArrows, faBalanceScale, faLightbulb, faHeart, faUserGraduate, faHeartbeat, faStethoscope, faBrain, faChalkboardTeacher, faBriefcase } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-phome-page',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './phome-page.component.html',
  styleUrl: './phome-page.component.css'
})
export class PhomePageComponent {
  constructor(private route: ActivatedRoute) { }
  faUserGraduate = faUserGraduate;
  faBrain = faBrain;
  faHeartbeat = faHeartbeat
  faPhone = faPhone;
  faBriefcase = faBriefcase;
  faStethoscope = faStethoscope
  faChalkboardTeacher = faChalkboardTeacher;
  faArrowRight = faArrowRight;
  faPeopleArrows = faPeopleArrows;
  faBalanceScale = faBalanceScale;
  faLightbulb = faLightbulb;
  faHeart = faHeart;
}
