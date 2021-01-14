import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-coordonnee',
  templateUrl: './coordonnee.component.html',
  styleUrls: ['./coordonnee.component.css']
})
export class CoordonneeComponent implements OnInit {

  name;
  country;
  constructor(
  private route: ActivatedRoute,
  private httpService: HttpService,

  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(event => {
      this.name=event.countrie;
     });

    this.country = this.httpService.getCoordonnee(this.name);
     console.log(this.country);
  }

}
