import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WitsService } from "../wits.service";


@Component({
    selector: 'app-witschannels',
    templateUrl: './witschannels.component.html'
})
export class WitschannelsComponent implements OnInit {

    constructor(private witsService: WitsService) { }
    selectedWits = this.witsService.selectedWits


    ngOnInit() {

    }
}