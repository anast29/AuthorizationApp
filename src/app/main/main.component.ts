import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {People} from '../../people';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {map, startWith} from 'rxjs/internal/operators';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    people: People;
    myControl = new FormControl();
    image = [
        'https://laughingsquid.com/wp-content/uploads/2016/03/Luke_print_promoHR_1024x1024.jpg',
        'http://th03.deviantart.net/fs71/PRE/f/2010/156/e/8/C_3PO_by_Labancz.jpg',
        'http://th02.deviantart.net/fs71/PRE/i/2013/151/b/b/r2_d2_by_cwdigital-d67bhdm.jpg',
        'https://ae01.alicdn.com/kf/HTB10wc8MVXXXXaTXpXXq6xXFXXXf/Details-about-DARTH-VADER-Vinyl-Decal-Auto-Graphics-Stickers-STAR-WARS.jpg',
        'http://static1.squarespace.com/static/539eefaee4b091554a5f8564/5c52b3314fa51a04f5dbe9e5/5c52ba5b352f53c1b8560a9d/1548925540329/Elin+Sandstro%CC%88m+Princess+Leia+small.jpg',
        'https://vignette.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249',
        'https://vignette.wikia.nocookie.net/disney/images/8/84/BeruWhitesunLars.jpg/revision/latest?cb=20121227005055',
        'https://s.yimg.com/ny/api/res/1.2/3nE22yDea4PVfVRfSS4Iwg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/entertainment_weekly_785/f4452ac14823861056f3daf42f83113b',
        'https://vignette.wikia.nocookie.net/ru.starwars/images/2/20/Biggs.jpg/revision/latest?cb=20120903152541',
        'https://i.playground.ru/i/blog/304935/icon.jpg'
    ];
    options = [];
    filteredOptions: Observable<People>;

    constructor(private http: HttpService, private router: Router, private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.http.getPeople().subscribe((data: People) => this.people = data);
        // this.filteredOptions = this.myControl.valueChanges
        //     .pipe(
        //         startWith(''),
        //         map(value => this.http.getPeople().search({name: value}, 1))
        // switchMap(value => )
        //     );
    }

    // private _filter(value: string): People[] {
    //     return this.people.filter(option =>
    //         option.toLowerCase().indexOf(value.toLowerCase()) === 0);
    // }

    createProfile(info, img) {
        this.router.navigate(
            ['/profile'],
            {
                queryParams: {
                    'character-name': info.name,
                    'gender': info.gender,
                    'height': info.height,
                    'mass': info.mass,
                    'hair_color': info.hair_color,
                    'skin_color': info.skin_color,
                    'eye_color': info.eye_color,
                    'birth_year': info.birth_year,
                    'homeworld': info.homeworld,
                    'vehicles': info.vehicles,
                    'films': info.films,
                    'image': img
                }
            });
    }
}


