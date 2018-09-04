import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';


const routes: Routes = [
                        {path: 'patients',component: PatientListComponent},
                        {path: "patients/:patientid",component: PatientDetailsComponent},
                        {path: '',  redirectTo: '/patients', pathMatch: 'full'}];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
