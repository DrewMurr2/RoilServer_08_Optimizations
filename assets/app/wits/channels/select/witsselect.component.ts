import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WitsService } from "../../wits.service";
@Component({
    selector: 'app-witsselect',
    templateUrl: './witsselect.component.html',
    styleUrls: ['./witsselect.component.css']
})
export class WitsSelectComponent implements OnInit {


    constructor(private witsService: WitsService) { }


    NamesArr = this.witsService.NamesArr

    WitsList = this.witsService.WitsList

    selectedWits = this.witsService.selectedWits

    selectedThisWits(wts) {
        this.witsService.selectWits(wts)
    }

    isSelected(wts) {
        return wts === this.witsService.selectedWits
    }


    ngOnInit() {

    }
}