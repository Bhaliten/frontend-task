import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {routes} from "../../../app.routes";
import {RandomStringService} from "../../../services/random-string.service";

@Component({
  selector: 'app-user-handler',
  standalone: true,
  imports: [],
  templateUrl: './user-handler.component.html',
  styleUrl: './user-handler.component.scss'
})
export class UserHandlerComponent {

  constructor(private route: ActivatedRoute,
              private randomStringService: RandomStringService,
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const randomIdFromRoute = routeParams.get('randomId');

    if (randomIdFromRoute != null && this.randomStringService.isValidString(randomIdFromRoute)) {

    } else {
      alert("invalid")
    }
  }
}
