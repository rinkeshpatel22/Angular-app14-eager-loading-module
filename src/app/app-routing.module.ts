import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './module1/component1/component1.component';
import { Component2Component } from './module2/component2/component2.component';
import { Component3Component } from './module3/component3/component3.component';

const routes: Routes = [
  { path: 'page1', component: Component1Component },
  { path: 'page2', component: Component2Component },
  { path: 'page3', component: Component3Component },
  { path: '**', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
