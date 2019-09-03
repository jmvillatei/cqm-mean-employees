import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MaterialComponentModule} from './material.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ViewEmployeeDialogComponent } from './components/view-employee-dialog/view-employee-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    ViewEmployeeDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponentModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [ViewEmployeeDialogComponent]
})
export class AppModule { }
