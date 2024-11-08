import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cfooter',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cfooter.component.html',
  styleUrl: './cfooter.component.css'
})
export class CfooterComponent {
  faSquareFacebook = faSquareFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
}