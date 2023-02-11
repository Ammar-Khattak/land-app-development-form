import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
@Component({
  selector: 'app-land-form',
  templateUrl: './land-form.component.html',
  styleUrls: ['./land-form.component.css']
})
export class LandFormComponent implements OnInit {
  minDate=new Date;
  srcResult:any;
  stepperOrientation: Observable<StepperOrientation>;
  constructor(breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
    
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}
