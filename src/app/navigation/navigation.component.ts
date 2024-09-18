import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RouterModule, MatCardModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
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

  isFormulario = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isFormulario = this.router.url.includes('/formulario');
      }
    });
  }
  
}
