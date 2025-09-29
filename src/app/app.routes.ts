import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AssignmentList } from './assignment-list/assignment-list';
import { AddAssignment } from './add-assignment/add-assignment';
import { AssignmentDetail } from './assignments/assignment-detail/assignment-detail';
import { ModificationDevoir } from './modification-devoir/modification-devoir';

export const routes: Routes = [
  {
    path: 'home',
    component: Assignments  // formulaire + liste
  },
  {
    path: 'details',
    component: AssignmentDetail  
  },
  {
    path: 'modification',
    component: ModificationDevoir  // juste le formulaire
    
  },
  {
    path: 'liste',
    component: AssignmentList  // juste la liste
  },
  {
    path: 'add',
    component: AddAssignment  // juste le formulaire
    
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
