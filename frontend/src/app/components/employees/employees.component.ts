import { Component, OnInit } from '@angular/core';

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

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployees()
    .subscribe(res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }

  addEmployee(form: NgForm){
    this.employeeService.createEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Employee Created Successfuly', classes: 'rounded'});
        this.getEmployees();
      })
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
