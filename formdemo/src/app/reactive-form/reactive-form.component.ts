import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { stringify } from 'querystring';
import { mobileValidator, paswordValidator, mobileAsyncValidator } from '../validator/Validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // //自定义校验器
  // mobileValidator(mobile: FormControl):any{
  //   let value = (mobile.value || '') + '';
  //   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   let valid = myreg.test(value);
  //   console.log("mobileValidator 是否校验通过： "+valid);
  //   return valid? null : {mobile:true};
  // }
  // paswordValidator(info: FormGroup):any{
  //   let password:FormControl = info.get('password') as FormControl;
  //   let passwordConfirm:FormControl = info.get('passwordConfirm') as FormControl;
  //   let valid:boolean = password.value === passwordConfirm.value;
  //   console.log("paswordValidator 是否校验通过： "+valid);
  //   return valid? null:{password:true};  
  // }
  //end
  private nickName = new FormControl('tom');
  private passwordInfo = new FormGroup({
    password: new FormControl(),
    passwordConfirm: new FormControl()
  });

  private emails = new FormArray([
    new FormControl("a@a.com"),
    new FormControl("b@b.com")
  ]);

  private formModel:FormGroup;

  private fb:FormBuilder = new FormBuilder();
  // 用formBuilder重构
  constructor() {
    
    this.formModel = this.fb.group({
      nickName: ['', [Validators.required]],
      emails: this.fb.array([
        ['']
      ]),
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordInfo: this.fb.group({
        password: ['', Validators.required],
        passwordConfirm: ['']
      }, {validator: paswordValidator})
    });
   }
  //  constructor() {
  //   this.formModel = new FormGroup({
  //     nickName: new FormControl(),
  //     emails: new FormArray([
  //       new FormControl()
  //     ]),
  //     mobile: new FormControl(),
  //     passwordInfo: new FormGroup({
  //       password: new FormControl(),
  //       passwordConfirm: new FormControl()
  //     })
  //   });
  //  }
  createUser(){
    // let nicknameValid:boolean = this.formModel.get('nickName').valid;
    // console.log("nicknameValid 是否校验通过： "+nicknameValid);
    // let nicknameErr:any = this.formModel.get('nickName').errors;
    // console.log("nicknameErr 校验信息： "+ JSON.stringify(nicknameErr));
    // console.log(this.formModel);
    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
  addEmail() {
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }
  ngOnInit() {
  }

}
