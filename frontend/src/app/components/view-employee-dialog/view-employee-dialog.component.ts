import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-view-employee-dialog',
  templateUrl: './view-employee-dialog.component.html',
  styleUrls: ['./view-employee-dialog.component.css']
})
export class ViewEmployeeDialogComponent implements OnInit {
  birthdate = "";
  constructor(
    private matDialogRef: MatDialogRef<ViewEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit() {
    console.log(moment(this.data.birthdate).format('DD/MM/YYYY'));
    this.birthdate = moment(this.data.birthdate).format('DD/MM/YYYY')
  }

  public close(){
    this.matDialogRef.close();
  }



}
