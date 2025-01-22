import { Routes } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

export const routes: Routes = [
    {path: 'bar', component: ProgressBarComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
