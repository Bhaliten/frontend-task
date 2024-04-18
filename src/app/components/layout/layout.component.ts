import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {RandomStringService} from "../../services/random-string.service";
import {MenubarModule} from "primeng/menubar";
import {ChipsModule} from "primeng/chips";
import {MenuItem, MenuItemCommandEvent} from "primeng/api";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        MenubarModule,
        ChipsModule
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

    items: MenuItem[] | undefined;

    constructor(private randomStringService: RandomStringService,
                private router: Router) {

    }

    getRandomId(): string {
        return this.randomStringService.generateRandomString();
    }

    ngOnInit(): void {

        this.items = [
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                routerLink: '/generate-value-for-admin',
            }
            // {
            //     label: 'Users',
            //     icon: 'pi pi-fw pi-user',
            //     items: [
            //         {
            //             label: 'New',
            //             icon: 'pi pi-fw pi-user-plus',
            //             routerLink: '/new'
            //         },
            //         {
            //             label: 'Search',
            //             icon: 'pi pi-fw pi-users',
            //             routerLink: '/search'
            //         }
            //     ]
            // }
        ];
    }
}
