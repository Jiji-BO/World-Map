import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient)
  {

  }

  getCountries(Region)
  {
    let p=[]
    this.http.get<any[]>('https://restcountries.eu/rest/v2/region/'+Region).subscribe
    (
      (Countries)=>
      {
        Countries.forEach(
          countrie =>{p.push(countrie)}
        )
        console.log(p)
      }
    )
    return p;
  }

}
