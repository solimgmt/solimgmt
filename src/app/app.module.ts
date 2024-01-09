import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ModelComponent } from './core/talent/model/model.component';
import { ActorComponent } from './core/talent/actor/actor.component';
import { SubHeaderComponent } from './shared/components/sub-header/sub-header.component';
import { ApplyComponent } from './core/apply/apply.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { TopTalentComponent } from './core/talent/top-talent/top-talent.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { SingleActorComponent } from './core/talent/single-actor/single-actor.component';
import { SingleModelComponent } from './core/talent/single-model/single-model.component';
import { BookingComponent } from './shared/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ModelComponent,
    ActorComponent,
    SubHeaderComponent,
    ApplyComponent,
    AboutComponent,
    ContactComponent,
    TopTalentComponent,
    TestimonialsComponent,
    SingleActorComponent,
    SingleModelComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
