import {Component, OnInit} from '@angular/core';
import {AuthService} from 'angularx-social-login';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user_name = '';
    user_photo = 'http://clipart-library.com/image_gallery/184187.png';
    private loggedIn: boolean;

    constructor(private authService: AuthService) {
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
