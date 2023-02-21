import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://swapi.dev/api/planets';  

  constructor(private _httpClient: HttpClient) { } 

}
