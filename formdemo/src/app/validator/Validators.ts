import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

  //自定义校验器
  export function mobileValidator(mobile: FormControl):any{
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    console.log("mobileValidator 是否校验通过： "+valid);
    return valid? null : {mobile:true};
  }
  export function mobileAsyncValidator(mobile: FormControl):any{
    let value = (mobile.value || '') + '';
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myreg.test(value);
    console.log("mobileValidator 是否校验通过： "+valid);
    // return Observable.of(valid?null : {mobile:true}).delay(500);
  }
  export function paswordValidator(info: FormGroup):any{
    let password:FormControl = info.get('password') as FormControl;
    let passwordConfirm:FormControl = info.get('passwordConfirm') as FormControl;
    let valid:boolean = password.value === passwordConfirm.value;
    console.log("paswordValidator 是否校验通过： "+valid);
    return valid? null:{password:{description: "密码和确认密码不匹配！！！"}};  
  }