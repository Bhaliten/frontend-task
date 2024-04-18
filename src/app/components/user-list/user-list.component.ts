import {Component} from '@angular/core';
import {UserHandlerService} from "../../services/user-handler.service";
import {User} from "../../models/user";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {NgIf} from "@angular/common";
import {SearchUsersRequest} from "../../models/search-users-request";
import {CardModule} from "primeng/card";

@Component({
    selector: 'app-user-list',
    standalone: true,
    imports: [
        TableModule,
        ButtonModule,
        FormsModule,
        InputTextModule,
        NgIf,
        ReactiveFormsModule,
        CardModule
    ],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})
export class UserListComponent {

    constructor(private userHandlerService: UserHandlerService,) {
    }

    searchUsersForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
    });

    getUsers(): User[] {
        return this.userHandlerService.testData;
    }

    fetchUsers(): void {
        if (!this.searchUsersForm.invalid) {
            let userSearch: SearchUsersRequest = this.searchUsersForm.value as SearchUsersRequest;

            this.userHandlerService.fetchUsersByFirstAndLastName(
                userSearch.firstName,
                userSearch.lastName
            ).subscribe(users => {
                console.log(users)
                this.userHandlerService.testData = users.userList;
            })
        }

    }
}
