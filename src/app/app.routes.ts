import { Routes } from '@angular/router';
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {UserHandlerComponent} from "./components/pages/user-handler/user-handler.component";
import {GenerateValueForAdminComponent} from "./components/generate-value-for-admin/generate-value-for-admin.component";

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'new', component: WelcomeComponent },
  { path: 'search', component: WelcomeComponent },
  { path: 'user-handler', component: UserHandlerComponent },
  { path: 'admin', component: UserHandlerComponent },
  { path: 'admin/:randomId', component: UserHandlerComponent },
  { path: 'generate-value-for-admin', component: GenerateValueForAdminComponent },
];
