
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent }  from './searchComponent/searchComponent';
import { AddPersonComponent }  from './addPersonComponent/addPersonComponent';
import { NgModule }             from '@angular/core';

const appRoutes: Routes = [
  { path: 'add', component: AddPersonComponent },
  { path: 'list', component: SearchComponent },
   { path: '**', component: AddPersonComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AddPersonComponent, SearchComponent ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }