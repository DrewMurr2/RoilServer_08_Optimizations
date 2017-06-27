import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class WitsService {
    NamesArr: String[] = ["George", "Bob", "Bill", "Tom"];

    selectedWits: any
    selectedWitsEvent = new EventEmitter<any>();
    selectWits(wts) {
        this.selectedWits = wts
        this.selectedWitsEvent.emit(wts)
    }

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



    // private messages: Message[] = [];
    // messageIsEdit = new EventEmitter<Message>();

    // constructor(private http: Http, private errorService: ErrorService) {
    // }

    // addMessage(message: Message) {
    //     const body = JSON.stringify(message);
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.post('http://localhost:3000/message' + token, body, { headers: headers })
    //         .map((response: Response) => {
    //             const result = response.json();
    //             const message = new Message(
    //                 result.obj.content,
    //                 result.obj.user.firstName,
    //                 result.obj._id,
    //                 result.obj.user._id);
    //             this.messages.push(message);
    //             return message;
    //         })
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }

    // getMessages() {
    //     return this.http.get('http://localhost:3000/message')
    //         .map((response: Response) => {
    //             const messages = response.json().obj;
    //             let transformedMessages: Message[] = [];
    //             for (let message of messages) {
    //                 transformedMessages.push(new Message(
    //                     message.content,
    //                     message.user.firstName,
    //                     message._id,
    //                     message.user._id)
    //                 );
    //             }
    //             this.messages = transformedMessages;
    //             return transformedMessages;
    //         })
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }

    // editMessage(message: Message) {
    //     this.messageIsEdit.emit(message);
    // }

    // updateMessage(message: Message) {
    //     const body = JSON.stringify(message);
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, { headers: headers })
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }

    // deleteMessage(message: Message) {
    //     this.messages.splice(this.messages.indexOf(message), 1);
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => {
    //             this.errorService.handleError(error.json());
    //             return Observable.throw(error.json());
    //         });
    // }
}