import {Component} from '@angular/core';
import {ChipsModule} from "primeng/chips";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserHandlerService} from "../../services/user-handler.service";
import {User} from "../../models/user";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-user-create-form',
    standalone: true,
    imports: [
        ChipsModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf
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
        email: new FormControl(''),
    });

    addNewUser() {
        // const user = new User(
        //     "",
        //     this.createUserForm.getRawValue().firstName,
        //     this.createUserForm.getRawValue().lastName,
        //     this.createUserForm.getRawValue().email
        // );
        if (this.createUserForm.valid){
            let user: User = this.createUserForm.value as User;
            this.userHandlerService.testData.push(user);
        }

    }
}
