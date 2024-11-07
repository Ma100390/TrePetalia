import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CnavbarComponent } from "./cnavbar/cnavbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CnavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
