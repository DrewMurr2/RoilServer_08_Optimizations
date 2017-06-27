import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
@Component({
  selector: 'app-header',
  template: `
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Roil On Site Admin</a>
    </div>
    <ul class="nav navbar-nav">
                    <li routerLinkActive="active"><a [routerLink]="['/wits']">Wits Setting</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Well Information</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a (click)="toggleAuth()"><span class="glyphicon glyphicon-log-in"></span> Log Out </a></li>
    </ul>
  </div>
</nav>
    `
})
export class HeaderComponent {
  constructor(private authService: AuthService) { }
  toggleAuth() {
    this.authService.temporaryVariableLoggedInForTesting = !this.authService.temporaryVariableLoggedInForTesting
  }
}