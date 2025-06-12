import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  }
];

export const IDRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    IDRouting
  ]
})
export class IncDecModule { }
