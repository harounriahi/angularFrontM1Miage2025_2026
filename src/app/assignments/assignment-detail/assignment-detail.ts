import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgStyle, DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.html',
  styleUrls: ['./assignment-detail.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgClass,
    NgStyle,
    DatePipe  
  ]
})
export class AssignmentDetail {
  @Input() assignment!: Assignment;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  onDelete() {
    this.deleteAssignment.emit(this.assignment);
  }
}
