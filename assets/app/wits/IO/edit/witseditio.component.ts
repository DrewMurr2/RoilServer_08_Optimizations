import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WitsService } from "../../wits.service";

@Component({
    selector: 'app-witseditio',
    templateUrl: './witseditio.component.html'
})
export class WitseditComponentio implements OnInit {
    constructor(private witsService: WitsService) {
        this.witsService.selectedWitsConfigEvent.subscribe((wts) => this.selectedWits = wts)
    }

    isInEditMode: boolean = false

    selectedWits = this.witsService.selectedWitsConfig
    isActive() {
        return this.witsService.selectedWitsConfig === this.witsService.activeWellConfig
    }
    duplicate() {
        var witsString = JSON.stringify(this.selectedWits)
        var newWitsInstance = JSON.parse(witsString)
        var witsServ = this.witsService
        newWitsInstance._id = null
        function alreadyExists(n) {
            var tr = false
            witsServ.WitsConfigList.forEach(element => {
                if (element.Name === n) tr = true
            });
            return tr
        }
        function nextAvailable() {
            for (let i = 1; i < 1000; i++) {
                newWitsInstance.Name = i === 1 ? newWitsInstance.Name + "_1" : newWitsInstance.Name.substr(0, newWitsInstance.Name.length - 1) + i
                if (!alreadyExists(newWitsInstance.Name)) return witsServ.WitsConfigList.push(newWitsInstance)
                if (i == 1000) alert('There is something wrong with your naming convention.')
            }
        }

        return nextAvailable()

    }

    activate() {
        this.witsService.activeWellConfig = this.witsService.selectedWitsConfig
    }

    ngOnInit() {

    }
}