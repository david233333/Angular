import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee; 
  readonly URL_API = 'https://api-rest-node-js-dojo.herokuapp.com/api/employees'
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
   }

 getEmployee(){
   return this.http.get(this.URL_API);
 }
 postEmployee(employee: Employee){
   return this.http.post(this.URL_API, employee);
 }
 putEmployee(employee: Employee){
   return this.http.put(this.URL_API, employee);
 }
 deleteEmployee(_id: string){
   return this.http.delete(this.URL_API + `/{_id}`)
 }
}
