import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './searchComponent/searchComponent';
import { AddPersonComponent } from './addPersonComponent/addPersonComponent';
import { ListComponent } from './listComponent/listComponent';
import { NgModule } from '@angular/core';
import { PersonService } from './services/PersonService'

const appRoutes: Routes = [
  { path: 'add', component: AddPersonComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), HttpModule
  ],
  declarations: [AddPersonComponent, SearchComponent, ListComponent],
  providers: [PersonService],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }