import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RandomStringService} from "../../services/random-string.service";

@Component({
    selector: 'app-generate-value-for-admin',
    standalone: true,
    imports: [],
    templateUrl: './generate-value-for-admin.component.html',
    styleUrl: './generate-value-for-admin.component.scss'
})
export class GenerateValueForAdminComponent implements OnInit {


    constructor(private router: Router,
                private randomStringService: RandomStringService,) {
    }

    ngOnInit(): void {
        this.router.navigate(['/admin/' + this.randomStringService.generateRandomString()])
    }

}
