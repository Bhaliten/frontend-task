import { Routes } from '@angular/router';
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {UserHandlerComponent} from "./components/pages/user-handler/user-handler.component";

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'user-handler', component: UserHandlerComponent },
  { path: 'admin', component: UserHandlerComponent },
  { path: 'admin/:randomId', component: UserHandlerComponent },
];
