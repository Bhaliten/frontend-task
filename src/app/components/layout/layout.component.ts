import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {RandomStringService} from "../../services/random-string.service";
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private randomStringService: RandomStringService) {
  }

  getRandomId(): string {
    return this.randomStringService.generateRandomString();
  }
}
