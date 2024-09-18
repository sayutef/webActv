import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RouterModule, MatCardModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imagenHamburguesa = '/hamburguesas.jpg.webp';
  imagenHamburguesa2 = '/hamburguesas2.jpg';
  imagenHamburguesa3 = '/hamburguesas3.jpeg';
  hamOne = '/hamOne.avif';
  hamTwo = '/hamTwo.png';
  hamThree = '/hamThree.png';
  hamFour = '/hamFour.jpg';
  hamFive = '/hamFive.jpg';
  lechuga = '/lechuga.png';
  cebolla = '/cebolla.png';
  meat = '/carne.png';
  title = 'proyect';
 
 
  
}
