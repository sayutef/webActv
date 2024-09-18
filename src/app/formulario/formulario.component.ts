import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Students } from '../models/student';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MenuComponent,
    RouterOutlet,
    DialogComponent
  ]
})
export class FormularioComponent implements OnInit {
  studentArray: Students[] = [
    {
      id: 1,
      name: 'Yuca',
      alimentos: ['Hamburguesa','Coca Cola','papas']
    },
    {
      id: 2,
      name: 'Oswaldo',
      alimentos: ['POO2','Algoritmos2', 'Ingles', 'Estructura de Datos']
    },
    {
      id: 3,
      name: 'Ochoa',
      alimentos: ['POO2', 'Ingles','Algoritmos2', 'WEB']
    },
    {
      id: 4,
      name: 'Hernán',
      alimentos: ['POO2', 'Ingles', 'WEB', 'Algoritmos2', 'Concurrente']
    }
  ];

  newStudent = {
    id: '',
    name: '',
    alimentos: ''
  };

  count: number = 4;

  increment() {
    this.count++;
  }

  ngOnInit(): void {
    console.log(this.studentArray);
  }

  showName(name: string) {
    alert(name);
  }

  deleteStudent(id: number) {
    this.studentArray = this.studentArray.filter(student => student.id !== id);
  }

  addStudent() {
    
    if ( this.newStudent.name && this.newStudent.alimentos) {
      this.studentArray.push({
        id: this.count,
        name: this.newStudent.name,
        alimentos: this.newStudent.alimentos.split(',').map(a => a.trim())
      });
      this.newStudent = { id: '', name: '', alimentos: '' }; 
      this.increment
    } else {
      alert('Por favor complete todos los campos.');
    }
  }

  private breakpointObserver = inject(BreakpointObserver);
  

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  
  constructor(public dialog: MatDialog){}
  showAli(alimentos: string[]): void{
    this.dialog.open(DialogComponent,{
      width: '750px',
      data: {alimentos : alimentos}
    })
  }
}
