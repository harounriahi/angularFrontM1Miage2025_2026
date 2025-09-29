import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AssignmentList } from './assignment-list/assignment-list';
import { AddAssignment } from './add-assignment/add-assignment';
import { AssignmentDetail } from './assignments/assignment-detail/assignment-detail';
import { ModificationDevoir } from './modification-devoir/modification-devoir';

export const routes: Routes  = [
  {
    path: 'home',
    component: Assignments  
  },
  {
    path: 'details',
    component: AssignmentDetail  // supprimer un devoir
  },
  {
    path: 'modification',
    component: ModificationDevoir  // mdoification d'un devoir
    
  },
  {
    path: 'liste',
    component: AssignmentList  // liste des devoirs
  },
  {
    path: 'add',
    component: AddAssignment  // ajouter un devoir
    
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
