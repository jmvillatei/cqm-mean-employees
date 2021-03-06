import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { ViewEmployeeDialogComponent } from 'src/app/components/view-employee-dialog/view-employee-dialog.component';

import * as moment from 'moment';
import { Observable, config } from 'rxjs';
import { map, startWith, flatMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';


declare var M: any;

export interface City {
  flag: string;
  name: string;
  country: string;
}


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesComponent implements OnInit {
  step = 1;
  cont = 0;
  nAge = 0;
  emailCompany = "";
  countryEmployee = "";

  email = new FormControl('', [Validators.required, Validators.email]);

  cityCtrl = new FormControl();
  filteredStates: Observable<City[]>;

  cities: City[] = [
    {
      name: 'Bogota',
      country: 'Colombia',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
    },
    {
      name: 'Kolkata',
      country: 'India',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg'
    },

  ];


  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog
  ) {
    this.filteredStates = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this._filterStates(city) : this.cities.slice())
      );
  }

  private _filterStates(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(city => city.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // function init
  ngOnInit() {
    this.getEmployees();

  }

  // Open dialog View employee
  openModalViewEmployee(employee){
    const conf ={data: employee};
    this.dialog.open(ViewEmployeeDialogComponent, conf,);
  }

  // Get country employee 
  getCountryByCity(city: string) {
    if (city != null) {
      const filterValue = city.toLowerCase();
      const chooseCountry = this.cities.filter(city => city.name.toLowerCase().indexOf(filterValue) === 0);
      if (chooseCountry.length != 0) {
        this.countryEmployee = chooseCountry[0].country;
      }
    } else {
      this.countryEmployee = "";
      M.toast({ html: 'Please write a city', classes: 'red' });
    }
  }


  // Error message input required 
  getErrorMessageAll(select: FormControl) {
    return select.hasError('required') ? 'You must enter a value' :
      '';
  }

  // Error message input email verify
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  // create email company
  createEmailC(name, surname, second) {
    if (name != "" && surname != "" && second != "") {
      const names = name.split(" ");
      name = "";
      for (let n of names) {
        if (n != " ") {
          name = name + n[0].toLowerCase();
        }
      }
      this.emailCompany = name + surname.toLowerCase() + second[0].toLowerCase() + "@consorcioqutubminar.com";
    } else {
      M.toast({ html: 'Fill the above required fields ', classes: 'red' });
    }

  }

  //Calculate age employee
  calculateAge(birthdate) {
    this.nAge = Number(moment().format('YYYY')) - Number(moment(birthdate).format('YYYY'));
    const month = Number(moment().format('MM')) - Number(moment(birthdate).format('MM'));
    const days = Number(moment().format('DD')) - Number(moment(birthdate).format('DD'));
    if (month < 0 || month == 0 && days < 0 || days == 0) {
      this.nAge--;
    }
  }

  // --
  // expansion panel register new employee
  // --
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  // reset form register new employee
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

  //--
  // function CRUD (create, edit, delete, consult)
  //--

  // Get employees
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }

  // Create employee
  addEmployee(form: NgForm) {

    if (form.value._id != "") {
      console.log(form.value);
      this.employeeService.editEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Employee Updated Successfuly', classes: 'green' });

          this.step++;
          this.getEmployees();
        });
    } else {
      delete form.value._id;

      console.log(form.value);
      this.employeeService.createEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Employee Created Successfuly', classes: 'green' });

          this.step++;
          this.getEmployees();
        })
    }
  }

  // Edit-update employee
  editEmployee(employee: Employee) {
    this.employeeService.editEmployees = employee;
    this.step = 0;
  }

  // Delete employee
  deleteEmployee(_id: string) {
    this.employeeService.deleteEmployee(_id)
      .subscribe(res => {
        M.toast({ html: 'Employee Deleted Successfuly', classes: 'green' });
        this.getEmployees();
      });
  }



}
