import { Component } from '@angular/core';
import { Hero } from './hero'

const HEROS:Hero[] =[
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
 ];

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>
 				<ul>
 				<li  *ngFor="let hero1 of heroes">
 				 <span class="badge">{{hero1.id}}</span>{{hero1.name}}
 				</li>
 				</ul>
`
})


export class AppComponent { 
 title:string="Tour of heroes";
 hero:string="Windstorm";

heroes=HEROS;

 }
