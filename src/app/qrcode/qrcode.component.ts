import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/model/Course';
import { UserService } from 'src/services/userService';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRcodeComponent implements OnInit{
  qrForm: FormGroup;
  dataList: Array<any> = [];
  response: any;
  button = "Load Data";
  isLoading = false;
  listAvailable: any;
  isLoaderSpinning = false;
  thumbnail: any;
 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,private sanitizer: DomSanitizer
   
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
      courseIteam: ['', Validators.required],
    });
  }
  onSubmit(){
    console.warn('course data', this.qrForm.value);
     console.warn('data list', this.dataList);
    let obj = this.dataList.filter((d) => {
        return this.qrForm.value.courseIteam as number == d.id
    })[0];
   
   
    this.qrForm.value
    let rqPayload = {
      courseId:obj.id,
      otherData : "teregarding coourse",
      active : true,
      createdOn : "2022-10-19",
      courseName:obj.name
    }
    console.log("payload",rqPayload);
    this.userService.generateQrCode(rqPayload).subscribe((baseImage : any)=>{
      let objectURL = 'data:image/jpeg;base64,' + baseImage.image;
      this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    
     },

      error=>console.log(error)
      );}

  }



