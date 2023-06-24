import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  getTestVale(){
    return'Wellcom in this service'
  }
}
