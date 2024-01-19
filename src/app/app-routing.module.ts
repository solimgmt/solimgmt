import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ModelComponent } from './core/talent/model/model.component';
import { ActorComponent } from './core/talent/actor/actor.component';
import { ApplyComponent } from './core/apply/apply.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { SingleModelComponent } from './core/talent/single-model/single-model.component';
import { SingleActorComponent } from './core/talent/single-actor/single-actor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'model',
    component: ModelComponent,
  },
  {
    path: 'actor/:id',
    component: SingleActorComponent,
  },
  {
    path: 'model/:id',
    component: SingleModelComponent,
  },
  {
    path: 'actor',
    component: ActorComponent,
  },
  {
    path: 'apply',
    component: ApplyComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
