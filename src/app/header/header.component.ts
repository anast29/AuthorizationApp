import {Component, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {AuthService, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user_name = '';
    user_photo = 'http://clipart-library.com/image_gallery/184187.png';
    private loggedIn: boolean;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user_name = user.name;
            this.user_photo = user.photoUrl;
            this.loggedIn = (user != null);
        });
    }
    // signOut(): void {
    //     this.authService.signOut();
    //     this.router.navigate(['/']);
    // }

}
