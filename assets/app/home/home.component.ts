import { Component, Input } from "@angular/core";

import { Home } from "./home.model";
import { HomeService } from "./home.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class HomeComponent {
    @Input() home: Home;

    constructor(private homeService: HomeService) { }

    onEdit() {
        this.homeService.editMessage(this.home);
    }

    onDelete() {
        this.homeService.deleteMessage(this.home)
            .subscribe(
            result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.home.userId;
    }
}