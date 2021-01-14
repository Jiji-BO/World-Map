import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goRegion(Region)
  {
    this.router.navigate(['countries',Region]);
  }
}
