import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WitsService } from "../../wits.service";
@Component({
    selector: 'app-witsselectio',
    templateUrl: './witsselectio.component.html',
    styleUrls: ['./witsselectio.component.css']
})
export class WitsSelectComponentio implements OnInit {


    constructor(private witsService: WitsService) { }


    WitsList = this.witsService.WitsConfigList

    selectedWitsConfig = this.witsService.selectedWitsConfig

    selectedThisWitsConfig(wts) {
        this.witsService.selectWitsConfig(wts)
    }

    isSelected(wts) {
        return wts === this.witsService.selectedWitsConfig
    }

    isActiveWell(wts) {
        return wts === this.witsService.activeWellConfig
    }

    ngOnInit() {

    }
}