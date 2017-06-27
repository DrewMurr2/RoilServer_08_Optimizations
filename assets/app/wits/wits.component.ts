import { Component } from "@angular/core";
import { WitsService } from "./wits.service";

@Component({
    selector: 'app-wits',
    templateUrl: './wits.component.html',
    providers: [WitsService]
})
export class WitsComponent {
    constructor(private witsService: WitsService) { }
}