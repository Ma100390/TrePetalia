import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown,faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cnavbar',
  standalone: true,
  imports: [RouterModule,CommonModule,FontAwesomeModule],
  templateUrl: './cnavbar.component.html',
  styleUrl: './cnavbar.component.css'
})
export class CnavbarComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  isMenuOpen = false;
  faCaretDown = faCaretDown;
  faCaretRight = faCaretRight;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
