import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contactForm:FormGroup

  constructor(private _builder:FormBuilder){
    this.contactForm=this._builder.group({
      name:['', Validators.minLength(3), Validators.required],
      age:['', Validators.required, Validators.min(18)]
    })
  }


}
