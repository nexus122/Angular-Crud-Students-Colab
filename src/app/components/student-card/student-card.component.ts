import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Student from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent implements OnInit {
  @Input() student: any;
  @Output() changes: EventEmitter<any> = new EventEmitter<any>();
  id!: number;
  name!: string;
  surname!: string;
  edit = false;
  constructor(private _students: StudentsService) {}

  ngOnInit(): void {
    this.id = this.student.id;
    this.name = this.student.name;
    this.surname = this.student.surname;
  }

  deleteClick(id: number) {
    this._students.deleteStudent(id).subscribe((res) => {
      this.changes.emit(`Se ha borrado al usuario: ${this.id}`);
    });
  }

  updateClick() {
    this.edit = !this.edit;
  }

  updateSendData() {
    if (this.name != '' && this.surname != '') {
      const body: Student = {
        id: this.id,
        name: this.name,
        surname: this.surname,
      };
      this._students.updateStudent(body).subscribe((res) => {
        this.changes.emit(`Se ha actualizado al usuario: ${this.id}`);
        this.edit = false;
      });
    }
  }
}
