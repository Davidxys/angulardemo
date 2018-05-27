import { Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';
import { DragDropService } from '../drag-drop.service';
// import 'rxjs/add/operator/take';

@Directive({
  selector: '[app-droppable]'
})
export class DropDirective {
@Input() dragEnterClass:string;
@Input() dropTags:string[] = [];

private data$;
  constructor(
    private el: ElementRef, 
    private rd: Renderer2,
    private service:DragDropService) { 
      // this.data$ = this.service.getDragData().take(1);
    }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev:Event){
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement == ev.target) {
      this.data$.
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
  @HostListener('dragover', ['$event'])
  onDragOver(ev:Event){
    if (this.el.nativeElement == ev.target) {
      // this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev:Event){
    if (this.el.nativeElement == ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
  @HostListener('drop', ['$event'])
  onDrop(ev:Event){
    if (this.el.nativeElement == ev.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

}
