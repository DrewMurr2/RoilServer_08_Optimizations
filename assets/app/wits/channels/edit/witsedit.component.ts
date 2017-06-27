import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WitsService } from "../../wits.service";

@Component({
    selector: 'app-witsedit',
    templateUrl: './witsedit.component.html'
})
export class WitseditComponent implements OnInit {
    constructor(private witsService: WitsService) {
        this.witsService.selectedWitsEvent.subscribe((wts) => this.selectedWits = wts)
    }

    isInEditMode: boolean = false

    selectedWits = this.witsService.selectedWits

    ngOnInit() {
        console.log(' this.witsService:', this.witsService)

    }
}