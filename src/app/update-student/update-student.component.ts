import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  id:number;
  student:Student = new Student();
  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit():void {
   this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student = data;
    
    });
  }
  updateStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }
  goToStudentList(){
    this.router.navigate(['/students']);
  }
  onSubmit() {
   this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
    this.goToStudentList();
   });
  }
}
