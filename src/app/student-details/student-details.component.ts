import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  id:number
  student:Student
  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit():void {
    this.id=this.route.snapshot.params['id'];
    this.student=new Student();
    this.studentService.getStudentById(this.id).subscribe(data=>{
      this.student=data;
    });
  }

  
}
