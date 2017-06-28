import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WitsComponent } from "./wits.component";
import { WitseditComponent } from "./channels/edit/witsedit.component";
import { WitsSelectComponent } from "./channels/select/witsselect.component";
import { WitsIOComponent } from "./IO/witsio.component";
import { WitsSelectComponentio } from "./IO/select/witsselectio.component";
import { WitseditComponentio } from "./IO/edit/witseditio.component";
import { WitschannelsComponent } from "./channels/witschannels.component";
import { WitsService } from "./wits.service";
import { witsRouting } from "./wits.routing";

@NgModule({
    declarations: [
        WitsComponent,
        WitsIOComponent,
        WitschannelsComponent,
        WitseditComponent,
        WitsSelectComponent,
        WitsSelectComponentio,
        WitseditComponentio
    ],
    imports: [
        CommonModule,
        FormsModule,
        witsRouting
    ],
    providers: [WitsService]
})
export class WitsModule {

}