import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components we want to set up routing for
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//set up our paths
const routes: Routes = [
    {
        //home path doesn't need anything inside path value
        path: '',
        component: HomeComponent
    },
    {
        path: 'about/:id',
        component: AboutComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
