import { Routes } from '@angular/router';
import {StandaloneComponentComponent} from "./components/standalone-component/standalone-component.component";
import {WelcomeComponent} from "./components/pages/welcome/welcome.component";
import {UserHandlerComponent} from "./components/pages/user-handler/user-handler.component";

export const routes: Routes = [
  { path: 'first-component', component: StandaloneComponentComponent , title: "Title"},
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'user-handler', component: UserHandlerComponent },
  { path: 'admin', component: UserHandlerComponent },
  { path: 'admin/:randomId', component: UserHandlerComponent },
];
