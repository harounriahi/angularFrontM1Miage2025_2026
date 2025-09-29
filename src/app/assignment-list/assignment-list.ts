import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-list',
  standalone: true,
  templateUrl: './assignment-list.html',
  imports: [CommonModule, MatCardModule, MatDividerModule],
})
export class AssignmentList {
  assignments = [
    { nom: 'Devoir Angular de Buffa', dateDeRendu: new Date('2025-09-10'), rendu: true },
    { nom: 'Devoir Java de Mallet', dateDeRendu: new Date('2025-09-15'), rendu: false },
    { nom: 'Devoir Réseaux de Durand', dateDeRendu: new Date('2026-01-20'), rendu: false }
  ];
}


