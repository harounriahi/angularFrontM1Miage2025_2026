import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  templateUrl: './add-assignment.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule]
})
export class AddAssignment {
  nomAssignment = '';
  dateDeRendu: Date | null = null;

  // On reçoit la liste depuis le parent via Input (ou EventEmitter pour push)
  assignments: any[] = [];

  onAjouterAssignment(event: Event) {
    event.preventDefault();
    if (this.nomAssignment && this.dateDeRendu) {
      this.assignments.push({
        nom: this.nomAssignment,
        dateDeRendu: this.dateDeRendu,
        rendu: false
      });
      this.nomAssignment = '';
      this.dateDeRendu = null;
    }
  }
}
