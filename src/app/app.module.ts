import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './user/create-user.component';
import { ListUserComponent } from './user/list-user.component';
import { ToastrNotificationComponent } from './component/toastr-notification/toastr-notification.component';
import { ToastrNotificationService } from '../app/services/toastr-notification.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    ToastrNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ToastrNotificationComponent],
  providers: [ToastrNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
