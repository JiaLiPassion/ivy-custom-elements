import {
  ɵrenderComponent as renderComponent,
  ɵdetectChanges as detectChanges
} from '@angular/core';
import { AppFormComponent } from './app-form.component';

export class AppFormElement extends HTMLElement {
  private comp: AppFormComponent;
  initialLabel: string;

  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
  }

  get label() {
    return this.comp && this.comp.label;
  }

  set label(newLabel: string) {
    if (!this.comp) {
      return;
    }

    this.comp.label = newLabel;
    detectChanges(this.comp);
  }

  connectedCallback() {
    this.comp = renderComponent(AppFormComponent, { host: this });
    if (this.initialLabel) {
      this.label = this.initialLabel;
    }
    this.comp.submitted.subscribe(eventInfo =>
      this.dispatchEvent(new CustomEvent('submitted', { detail: eventInfo }))
    );
  }

  disconnectedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'label') {
      if (!this.comp) {
        this.initialLabel = newValue;
      } else {
        this.label = newValue;
      }
    }
  }
}
