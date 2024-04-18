import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RandomStringService} from "../../../services/random-string.service";
import {UserListComponent} from "../../user-list/user-list.component";
import {UserCreateFormComponent} from "../../user-create-form/user-create-form.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

@Component({
    selector: 'app-user-handler',
    standalone: true,
    imports: [
        UserListComponent,
        UserCreateFormComponent,
        ButtonModule,
        DialogModule
    ],
    templateUrl: './user-handler.component.html',
    styleUrl: './user-handler.component.scss'
})
export class UserHandlerComponent {
    visible: boolean = false;

    constructor(private route: ActivatedRoute,
                private randomStringService: RandomStringService,
                private router: Router
    ) {
    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const randomIdFromRoute = routeParams.get('randomId');

        if (!(randomIdFromRoute != null && this.randomStringService.isValidString(randomIdFromRoute))) {
            alert("invalid")
            this.router.navigate(['welcome']);
        }
    }

    showDialog() {
        this.visible = true;
    }
}
