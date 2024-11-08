import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pcontatti',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pcontatti.component.html',
  styleUrl: './pcontatti.component.css'
})
export class PcontattiComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
