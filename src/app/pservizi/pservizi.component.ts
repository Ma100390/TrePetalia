import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faHouseUser, faCar, faWheelchair, faHospital, faFileAlt, faBrain, faUserMd, faHandsHelping, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pservizi',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pservizi.component.html',
  styleUrl: './pservizi.component.css'
})
export class PserviziComponent {
  faHome = faHome;
  faHouseUser = faHouseUser;
  faCar = faCar;
  faWheelchair = faWheelchair;
  faHospital = faHospital;
  faFileAlt = faFileAlt;
  faBrain = faBrain;
  faUserMd = faUserMd;
  faHandsHelping = faHandsHelping;
  faUserNurse = faUserNurse;
  faArrowRight = faArrowRight;
}
