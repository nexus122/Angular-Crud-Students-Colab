import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Student from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(
    private _students: StudentsService,
    private _snackBar: MatSnackBar
  ) {}

  students!: Observable<Student>;

  name = '';
  surname = '';

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this._students.getStudent();
  }

  newChanges(param: any) {
    this.loadStudents();
    this.openSnackBar(param, 'cerrar');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  sendStudent() {
    if (this.name != '' && this.surname != '') {
      const body: Student = { id: 0, name: this.name, surname: this.surname };
      this._students.postStudents(body).subscribe({
        next: () => {
          this.loadStudents();
          this.name = '';
          this.surname = '';
          this.openSnackBar('✔️ Se ha creado un usuario', 'cerrar');
        },
        error: () => {
          this.name = '';
          this.surname = '';
          this.openSnackBar('❌ El usuario no se ha podido crear', 'cerrar');
        },
      });
    }
  }
}
