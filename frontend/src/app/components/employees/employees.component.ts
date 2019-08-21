import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';


declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  step = 1;
  constructor(
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }

  addEmployee(form: NgForm) {

    if (form.value._id != "") {
      this.employeeService.editEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);          
          M.toast({ html: 'Employee Updated Successfuly', classes: 'green' });
          this.getEmployees();
        });
    } else {
      delete form.value._id;
      this.employeeService.createEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Employee Created Successfuly', classes: 'green' });
          this.getEmployees();
        })
    }
    this.step++;
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
    this.step = 0;
  }

  deleteEmployee(_id: string) {
    this.employeeService.deleteEmployee(_id)
      .subscribe(res => {
        M.toast({ html: 'Employee Deleted Successfuly', classes: 'green' });
        this.getEmployees();
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
