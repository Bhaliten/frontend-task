import { Component } from '@angular/core';
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-create-form',
  standalone: true,
    imports: [
        ChipsModule,
        FormsModule
    ],
  templateUrl: './user-create-form.component.html',
  styleUrl: './user-create-form.component.scss'
})
export class UserCreateFormComponent {
    value: string | undefined;

}
