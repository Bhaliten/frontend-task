import {Component} from '@angular/core';
import {ChipsModule} from "primeng/chips";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserHandlerService} from "../../services/user-handler.service";
import {User} from "../../models/user";
import {NgIf} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CreateUserRequest} from "../../models/create-user-request";

@Component({
    selector: 'app-user-create-form',
    standalone: true,
    imports: [
        ChipsModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        ButtonModule,
        CardModule
    ],
    templateUrl: './user-create-form.component.html',
    styleUrl: './user-create-form.component.scss'
})
export class UserCreateFormComponent {

    constructor(private userHandlerService: UserHandlerService) {
    }

    createUserForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email]),
    });

    addNewUser() {
        if (this.createUserForm.valid) {
            let createUser = this.createUserForm.value as CreateUserRequest;
            this.userHandlerService.createUser(createUser).subscribe(createdUser =>
                console.log(createdUser)
            );
            this.createUserForm.reset();
        }

    }
}
