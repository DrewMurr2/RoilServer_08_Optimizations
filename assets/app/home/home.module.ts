import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from "./home.component";

import { HomeService } from "./home.service";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [HomeService]
})
export class HomeModule {

}