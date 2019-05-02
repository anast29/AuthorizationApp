import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {
    MatAutocompleteModule,
    MatButton, MatButtonModule, MatCardModule, MatExpansionModule, MatExpansionPanel, MatFormFieldControl,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatTable,
    MatTableDataSource,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    AuthServiceConfig, FacebookLoginProvider, LinkedInLoginProvider,
    SocialLoginModule
} from 'angularx-social-login';


const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: 'profile', component: ProfileComponent}
];
const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('2211839885581438')
    },
    {
        id: LinkedInLoginProvider.PROVIDER_ID,
        provider: new LinkedInLoginProvider('770hb6c0888049'),
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        MainComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatListModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        MatExpansionModule,
        HttpClientModule,
        SocialLoginModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
