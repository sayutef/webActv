import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef <DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {alimentos: string []}
  ){}
  onNoClick(): void{
    this.dialogRef.close();
  }
}
