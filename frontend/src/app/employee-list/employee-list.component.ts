import { Component } from '@angular/core';
import { Employee } from '../employee'
import { OnInit } from '@angular/core'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees: any

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();

    
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    });
  }

  EmployeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]); 
    console.log(this.employees)
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data =>{
      console.log(data);
      this.getEmployees();
      console.log(this.employees)      
    })

  }

}
