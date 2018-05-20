import { Pipe, PipeTransform } from '@angular/core';
//管道装饰器
@Pipe({
  name: 'multiple'//页面上用的名字
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, args?: number): any {
    if(!args) {
      args = 1;
    }
    
    return value * args;
  }

}
