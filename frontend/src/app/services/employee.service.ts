import { Injectable } from '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  editEmployees: Employee;
  employees: Employee[];
  location: Location;

  //---- LOCATION -----//
  //location.host -> localhost:4200
  //location.hostname -> localhost
  //location.href -> http://localhost:4200/ # location.origin -> http://localhost:4200
  //location.pathname -> / # location.port -> 4200 # location.protocol -> http:

  readonly URL_API = location.protocol+"//"+location.hostname+":"+location.port+"/api/employees";

  constructor(private http: HttpClient,
    private router: Router) { 
    this.selectedEmployee = new Employee();
    this.editEmployees = new Employee();
  }

  getEmployees(){
    console.log(location.protocol);
    return this.http.get(this.URL_API);
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  editEmployee(employee: Employee){
    return this.http.put(this.URL_API + "/" + employee._id, employee);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + "/" + _id);
  }
}
