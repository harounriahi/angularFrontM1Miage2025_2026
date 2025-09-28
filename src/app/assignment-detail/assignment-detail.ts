import { Component, Input } from '@angular/core';
import { Assignment } from '../assignements.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './assignment-detail.html',
  styleUrls: ['./assignment-detail.css']
})
export class AssignmentDetail {
  @Input() assignmentTransmis!: Assignment;
}
