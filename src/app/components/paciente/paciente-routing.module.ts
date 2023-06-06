import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteIndexComponent } from './paciente-index/paciente-index.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';


const routes: Routes = [
  {path:'', redirectTo:'paciente-index',pathMatch:'full'},
  {path:'paciente-index', component:PacienteIndexComponent},
  {path:'paciente-create', component:PacienteCreateComponent}
  //{path:'paciente-edit/:id', component:PacienteCreateComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
