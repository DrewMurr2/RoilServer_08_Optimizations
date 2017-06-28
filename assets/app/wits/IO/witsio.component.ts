import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WitsService } from "../wits.service";


@Component({
    selector: 'app-witsio',
    templateUrl: './witsio.component.html'
})
export class WitsIOComponent implements OnInit {

    constructor(private witsService: WitsService) { }
    selectedWitsConfig = this.witsService.selectedWitsConfig


    ngOnInit() {

    }
}