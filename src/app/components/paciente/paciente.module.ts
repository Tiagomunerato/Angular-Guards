import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteIndexComponent } from './paciente-index/paciente-index.component';
import { PacienteCreateComponent } from './paciente-create/paciente-create.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PacienteIndexComponent,
    PacienteCreateComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    FormsModule
  ]
})
export class PacienteModule { }
