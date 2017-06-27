import { Component } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private authService: AuthService) { }
    isLoggedIn() {
        return this.authService.temporaryVariableLoggedInForTesting
    }
}