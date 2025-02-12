import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faPhone, faPeopleArrows, faBalanceScale, faLightbulb, faHeart, faUserGraduate, faHeartbeat, faStethoscope, faBrain, faChalkboardTeacher, faBriefcase } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pchisiamo',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './pchisiamo.component.html',
  styleUrl: './pchisiamo.component.css'
})
export class PchisiamoComponent {
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
