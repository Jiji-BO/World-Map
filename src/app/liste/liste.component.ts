import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  region;
  pays;
  constructor(
  private route: ActivatedRoute,
  private httpService: HttpService,
  ) { }

  ngOnInit(): void
  {
    this.route.params.subscribe(event => {
      this.region=event.region;
     });

     this.pays = this.httpService.getCountries(this.region);
     console.log(this.pays);
  }

}
