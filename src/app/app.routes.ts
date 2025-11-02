import { Routes } from '@angular/router';
import { Voting } from './voting/voting/voting';
import { Adding } from './adding/adding';

export const routes: Routes = [
    { path: '', component: Voting },
    { path: 'adding', component: Adding },
];
