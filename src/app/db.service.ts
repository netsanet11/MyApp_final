import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';

@Injectable()
export class DbService {
  constructor(private http:Http) { 
  }

  getData(){
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  }
}
