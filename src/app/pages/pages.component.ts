import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  counter:number= 0;
  incCounter(){
    this.counter++
  }
  decCounter(){
    this.counter--
  }

name:string = 'Ahmed'

constructor(public testDemo:TestService ){}
ngOnInit(): void{
  this.testDemo.getTestVale()
}

}
