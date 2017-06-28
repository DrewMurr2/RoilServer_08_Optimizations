import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class WitsService {


    selectedWits: any
    selectedWitsEvent = new EventEmitter<any>();
    selectWits(wts) {
        this.selectedWits = wts
        this.selectedWitsEvent.emit(wts)
    }

    activeWell: any

    secondWits = {
        "_id": "590d2e5f1f878d326c9ffb85",
        "instant": new Date("2017-05-06T02:01:03.928Z"),
        "Name": "Secondary",
        "Channels": [
            {
                "ID": 105,
                "Name": "Date",
                "type": "number"
            },
            {
                "ID": 106,
                "Name": "Time",
                "type": "number"
            }
        
};

    firstWits = {
        "_id": "590d2e5f1f878d326c9ffb85",
        "instant": new Date("2017-05-06T02:01:03.928Z"),
        "Name": "Default",
        "Channels": [
            {
                "ID": 105,
                "Name": "Date",
                "type": "number"
            },
            {
                "ID": 106,
                "Name": "Time",
                "type": "number"
            },
            {
                "ID": 108,
                "Name": "Bit Depth",
                "type": "number"
            },
            {
                "ID": 110,
                "Name": "Hole Depth",
                "type": "number"
            },
            {
                "ID": 111,
                "Name": "TVD",
                "type": "number"
            },
            {
                "ID": 112,
                "Name": "Block Height",
                "type": "number"
            },
            {
                "ID": 113,
                "Name": "ROP",
                "type": "number"
            },
            {
                "ID": 115,
                "Name": "Hook Load",
                "type": "number"
            },
            {
                "ID": 117,
                "Name": "Date",
                "type": "number"
            },
            {
                "ID": 119,
                "Name": "Rotary Torque",
                "type": "number"
            },
            {
                "ID": 120,
                "Name": "RPM",
                "type": "number"
            },
            {
                "ID": 121,
                "Name": "SPP",
                "type": "number"
            },
            {
                "ID": 122,
                "Name": "Casing Pressure",
                "type": "number"
            },
            {
                "ID": 123,
                "Name": "Pump 1 Strokes/Min",
                "type": "number"
            },
            {
                "ID": 124,
                "Name": "Pump 2 Strokes/Min",
                "type": "number"
            },
            {
                "ID": 125,
                "Name": "Pump 3 Strokes/Min",
                "type": "number"
            },
            {
                "ID": 126,
                "Name": "Total Mud Volume",
                "type": "number"
            },
            {
                "ID": 127,
                "Name": "Total Mud Gain/Loss",
                "type": "number"
            },
            {
                "ID": 128,
                "Name": "Flow",
                "type": "number"
            },
            {
                "ID": 130,
                "Name": "Pump Rate",
                "type": "number"
            },
            {
                "ID": 137,
                "Name": "Total Strokes",
                "type": "number"
            },
            {
                "ID": 139,
                "Name": "Wits Lag Calc",
                "type": "number"
            },
            {
                "ID": 140,
                "Name": "Wits Gas",
                "type": "number"
            },
            {
                "ID": 141,
                "Name": "Mechanical Specific Energy",
                "type": "number"
            },
            {
                "ID": 142,
                "Name": "Total Pump Displacement",
                "type": "number"
            },
            {
                "ID": 143,
                "Name": "Pump 1 Total Strokes",
                "type": "number"
            },
            {
                "ID": 144,
                "Name": "Pump 2 Total Strokes",
                "type": "number"
            },
            {
                "ID": 145,
                "Name": "Pump 3 Total Strokes",
                "type": "number"
            },
            {
                "ID": 169,
                "Name": "Pason Lag Depth",
                "type": "number"
            },
            {
                "ID": 170,
                "Name": "Pason Gas",
                "type": "number"
            },
            {
                "ID": 171,
                "Name": "Differential Pressure",
                "type": "number"
            },
            {
                "ID": 708,
                "Name": "Sensor Depth",
                "type": "number"
            },
            {
                "ID": 713,
                "Name": "Inclination",
                "type": "number"
            },
            {
                "ID": 715,
                "Name": "Azimuth",
                "type": "number"
            },
            {
                "ID": 716,
                "Name": "Magnetic Toolface",
                "type": "number"
            },
            {
                "ID": 717,
                "Name": "Gravity Toolface",
                "type": "number"
            },
            {
                "ID": 722,
                "Name": "Toolface Threshold",
                "type": "number"
            },
            {
                "ID": 823,
                "Name": "Gamma",
                "type": "number"
            },
            {
                "ID": 824,
                "Name": "Gamma 2",
                "type": "number"
            }
        ]
    };

    WitsList: any[] = [this.firstWits, this.secondWits]

    WitsConfigOne = {
        "Name": "First Wits Config",
        "Baud Rate": 9600,
        "Mode": "Receive Only",
        "Send Code": "19699999"
    }


    WitsConfigTwo = {
        "Name": "Second Wits Config",
        "Baud Rate": 9600,
        "Mode": "Send and Receive",
        "Send Code": "19699999"
    }

    WitsConfigList: any[] = [this.WitsConfigOne, this.WitsConfigTwo]

    selectedWitsConfig: any
    selectedWitsConfigEvent = new EventEmitter<any>();
    selectWitsConfig(wts) {
        this.selectedWitsConfig = wts
        this.selectedWitsConfigEvent.emit(wts)
    }
    ok
    activeWellConfig: any


}