import { Component, OnInit } from '@angular/core';
import {MainComponent} from '../main/main.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Homeworld} from '../../homeworld';
import {HttpClient} from '@angular/common/http';
import { Vehicles} from '../../vechicles';
import {Films} from '../../films';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    homeworld: Homeworld;
    auto = [];
    film = [];
    profile_info;
    character_name;
    gender;
    height;
    mass;
    hair_color;
    skin_color;
    eye_color;
    home;
    vehicles;
    films;
    birth_day;
    image;
  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient ) { }

  ngOnInit() {
      this.profile_info = this.route
          .queryParams
          .subscribe(params => {
              this.character_name = params['character-name'];
              this.gender = params['gender'];
              this.height = params['height'];
              this.mass = params['mass'];
              this.hair_color = params['hair_color'];
              this.skin_color = params['skin_color'];
              this.eye_color = params['eye_color'];
              this.home = params['homeworld'];
              this.vehicles = params['vehicles'];
              this.films = params['films'];
              this.birth_day = params['birth_year'];
              this.image = params['image'];
          });
      this.httpClient.get(this.home).subscribe((data: Homeworld) => this.homeworld = data);
      for (const vehicle of this.vehicles) {
          this.httpClient.get(vehicle).subscribe((data: Vehicles) => this.auto.push(data));
      }
      for (const movie of this.films) {
          this.httpClient.get(movie).subscribe((data: Films) => this.film.push(data));
      }
  }

}
