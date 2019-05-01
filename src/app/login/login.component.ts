import {Component, OnInit} from '@angular/core';
import {AuthService, FacebookLoginProvider, LinkedInLoginProvider, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";

declare var FB: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: SocialUser;
    private loggedIn: boolean;
    constructor(private authService: AuthService,  private router: Router) {
    }

    ngOnInit() {
        // (window as any).fbAsyncInit = function () {
        //     FB.init({
        //         appId: '2211839885581438',
        //         cookie: true,
        //         xfbml: true,
        //         version: 'v3.2'
        //     });
        //     FB.AppEvents.logPageView();
        // };
        //
        //
        // (function (d, s, id) {
        //     let js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.router.navigate(['/main']);
    }

    signInWithLinkedIn(): void {
        this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
        this.router.navigate(['/main']);
    }




    // submitLogin() {
    //     console.log('submit login to facebook');
    //     // FB.login();
    //     FB.login((response) => {
    //         console.log('submitLogin', response);
    //         if (response.authResponse) {
    //             alert('Success!');
    //         } else {
    //             console.log('User login failed');
    //         }
    //     });
    //
    // }
}
