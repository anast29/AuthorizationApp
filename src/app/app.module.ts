import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatButton, MatButtonModule, MatCardModule, MatIconModule} from "@angular/material";
import {Router, RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'', component: LoginComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
