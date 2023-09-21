import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelMenuModule } from 'primeng/panelmenu';

import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    LoginComponent,
    SidebarComponent,
    SpinnerComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-bottom-right',
      preventDuplicates:true
    }),
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    PanelMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
