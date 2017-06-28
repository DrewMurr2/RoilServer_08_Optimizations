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
    isActive() {
        return this.witsService.selectedWits === this.witsService.activeWell
    }
    duplicate() {
        var witsString = JSON.stringify(this.selectedWits)
        var newWitsInstance = JSON.parse(witsString)
        var witsServ = this.witsService
        newWitsInstance._id = null
        function alreadyExists(n) {
            var tr = false
            witsServ.WitsList.forEach(element => {
                if (element.Name === n) tr = true
            });
            return tr
        }
        function nextAvailable() {
            for (let i = 1; i < 1000; i++) {
                newWitsInstance.Name = i === 1 ? newWitsInstance.Name + "_1" : newWitsInstance.Name.substr(0, newWitsInstance.Name.length - 1) + i
                if (!alreadyExists(newWitsInstance.Name)) return witsServ.WitsList.push(newWitsInstance)
                if (i == 1000) alert('There is something wrong with your naming convention.')
            }
        }

        return nextAvailable()

    }

    activate() {
        this.witsService.activeWell = this.witsService.selectedWits
    }

    ngOnInit() {

    }
}