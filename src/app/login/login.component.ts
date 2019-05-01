import {Component, OnInit} from '@angular/core';
import {AuthService, FacebookLoginProvider, LinkedInLoginProvider, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

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
        this.authService.authState.subscribe((user) => {
            this.user = user;
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

}
