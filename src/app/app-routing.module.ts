import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components:
import {ListPersonComponent} from "./components/list-person/list-person.component";
import {CreatePersonComponent} from "./components/create-person/create-person.component";


const routes: Routes = [
  {
    path: 'person', component: ListPersonComponent
  },
  {
    path: 'createPerson', component: CreatePersonComponent
  },
  {
    path: '**', redirectTo: 'person'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
