import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LandFormComponent } from './components/land-form/land-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LandFormComponent,NavMenuComponent,HomeComponent, ContactUsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule,
    BrowserAnimationsModule,MatInputModule,
    MatButtonModule,ReactiveFormsModule,MatRadioModule,
    MatStepperModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,
    MatDividerModule,MatCheckboxModule,MatIconModule,
    RouterModule.forRoot([
      { path: '',component:HomeComponent  },
      { path: 'land-form',component:LandFormComponent  },
      { path: 'contact-us',component:ContactUsComponent  },
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
