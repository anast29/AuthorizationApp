import {Component, OnInit} from '@angular/core';
import {AuthService, FacebookLoginProvider, LinkedInLoginProvider, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

declare var IN: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    user: SocialUser;
    private loggedIn: boolean;

    constructor(private authService: AuthService,
                private router: Router) {
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
        this.authService.signIn('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=770hb6c0888049&redirect_uri=http://localhost:4200/main&scope=r_basicprofile').then((user) => {
            this.user = user;
            console.log(this.user);
        });
    }
}
