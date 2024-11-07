import { Component } from '@angular/core';
import { CnavbarComponent } from '../cnavbar/cnavbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-phome-page',
  standalone: true,
  imports: [PhomePageComponent,CnavbarComponent,RouterOutlet],
  templateUrl: './phome-page.component.html',
  styleUrl: './phome-page.component.css'
})
export class PhomePageComponent {

}
