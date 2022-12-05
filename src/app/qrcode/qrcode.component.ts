import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRcodeComponent implements OnInit{
  qrForm: FormGroup;
  dataList: any = [];
  response: any;
  button = "Load Data";
  isLoading = false;
  listAvailable: any;
  isLoaderSpinning = false;
  coourseIteam : any = {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
   
  ){ 
    this.userService.getAllCourses().subscribe((response) => {
      console.log("courses",response);
      if (response != null) {
        this.listAvailable = response;
        this.dataList = response
        console.log(response.data);
      }
    });
  }

  ngOnInit(): void {
    this.qrForm = this.formBuilder.group({
      coourseIteam: ['', Validators.required],
    });
  }
  onSubmit(){
    console.warn('course data', this.qrForm.value);
    // this.userService.login(this.loginForm.value.id, this.loginForm.value.password).subscribe((response)=>{
      
    //   if(response.data == null){
    //     alert("Invalid credentials");
    //     this.router.navigate(['/login']);

    //   }else{
    //     sessionStorage.setItem('token',response.data);
    //     sessionStorage.setItem('facultyId',this.loginForm.value.id);
    //     console.warn('token', response.data);
    //      alert("Successfully Logged in.");
    //     this.router.navigate(['/facultyHome']);
       
    //   }
    
    //  },
  }



}
