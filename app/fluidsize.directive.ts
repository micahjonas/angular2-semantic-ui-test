import {Directive, ElementRef, HostBinding, HostListener, Renderer, OnChanges} from '@angular/core';

@Directive({
  selector: 'textarea[fluidHeight]',
  host: {
    '(ngModelChange)': 'ajustHeight($event)',
    '(change)': 'changeHeight(arguments)'
  },
})

export class FluidHeightDirective implements OnChanges {

  //private _height = 0;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnChanges(): void{
    console.log('onchanges')
    console.log(this.el.nativeElement.scrollHeight)
    this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + "px");
  }

  changeHeight() {
    console.log('change')
  }

  ajustHeight() {
    console.log('adjust height fluid')
    console.log(this.el.nativeElement.scrollHeight)
    this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + "px");
  }

  /*constructor(private el: ElementRef, private renderer: Renderer) {
    //this._height = this.el.nativeElement.scrollHeight
    //console.log(this._height)
    //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

  ngOnChanges(): void{
    console.log(this.el.nativeElement.scrollHeight)
    this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + "px");
  }

  /*@HostBinding('style.height') height: string;

  ajustHeight() {
    console.log('test')
    this.height = this.el.nativeElement.scrollHeight + 'px';
  }

/*
  @HostListener('input',['$event.target']) onChanges(textArea: HTMLTextAreaElement) {
    this._height = this.el.nativeElement.scrollHeight
    console.log(this._height)
    this.renderer.setElementStyle(this.el.nativeElement, 'height', this._height + "px");
    //this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
  }
/*
  @HostListener('input',['$event.target']) onInput(textArea: HTMLTextAreaElement) {
    this.setHeight();
  }

  setHeight() {
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    this._height = this.el.nativeElement.scrollHeight;
    console.log(this._height);
  }*/

}
