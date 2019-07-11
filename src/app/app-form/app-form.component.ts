import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';

@Component({
  template: `
    <label>{{ label }}</label> <input #input /><button (click)="submit()">Submit</button><br />
  `,
  styleUrls: ['./app-form.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppFormComponent implements OnInit {
  @Input() label: string;
  @Output() submitted = new EventEmitter();

  @ViewChild('input', { static: true }) input: ElementRef;

  constructor() {}

  ngOnInit() {}

  submit() {
    this.submitted.emit(this.input.nativeElement.value);
  }
}
