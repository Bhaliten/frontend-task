import {Component} from '@angular/core';
import {UserHandlerService} from "../../services/user-handler.service";
import {User} from "../../models/user";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  constructor(private userHandlerService: UserHandlerService,) {
  }

  getUsers(): User[] {
    return this.userHandlerService.testData;
  }

  fetchUsers() {
    // this.userHandlerService.fetchUsersByFirstAndLastName('first', 'last').subscribe(users => {
    //   this.userHandlerService.testData = users;
    // })
  }
}
