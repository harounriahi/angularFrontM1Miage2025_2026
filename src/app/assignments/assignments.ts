import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rendu } from "../rendu";
import { Nonsoumis } from "../nonsoumis";
import { MatFormField, MatHint } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetail } from "../assignment-detail/assignment-detail";
import { Assignment } from "../assignements.model";
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-assignments',
  imports: [CommonModule, Rendu, Nonsoumis, MatFormField, MatDatepickerModule, MatHint, MatNativeDateModule,MatListModule, AssignmentDetail],
  templateUrl: './assignments.html',
  styleUrls: ['./assignments.css'] 
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments!";
  assignments: Assignment[] = [ 
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
    {
      nom: "Devoir JAVA à rendre",
      dateDeRendu: new Date('2022-09-10'),
      rendu: true
    }
  ];

  ajoutActive = false;
  nom: string = ''; 
  dateDeRendu: Date | null = null; 

  assignmentSelectionne!: Assignment;

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit(event: any) {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nom;
    newAssignment.rendu = false;
    newAssignment.dateDeRendu = this.dateDeRendu!; 

    this.assignments.push(newAssignment);

 
    this.nom = '';
    this.dateDeRendu = null;
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
    console.log("Devoir sélectionné :", assignment);
  }
  

}

