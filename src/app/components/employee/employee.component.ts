import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
  }

  addEmployee(form?: NgForm){
    this.employeeService.postEmployee(form.value)
      .subscribe( res => {
          console.log(res);
      })
  }

}
