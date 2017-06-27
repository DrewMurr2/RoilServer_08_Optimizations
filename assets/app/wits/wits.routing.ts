import { Routes, RouterModule } from "@angular/router";
import { WitsIOComponent } from "./IO/witsio.component";
import { WitschannelsComponent } from "./channels/witschannels.component";


const WITS_ROUTES: Routes = [
    { path: '', redirectTo: 'io', pathMatch: 'full' },
    { path: 'io', component: WitsIOComponent },
    { path: 'channels', component: WitschannelsComponent },
];

export const witsRouting = RouterModule.forChild(WITS_ROUTES);