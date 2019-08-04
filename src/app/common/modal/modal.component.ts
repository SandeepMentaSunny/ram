import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppRegExpressionsConfig } from './../../../providers/litterals/appregularexpressions';
import { AppLitteralsConfig } from './../../../providers/litterals/app.litterals';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public consumerForm: FormGroup;
  public AppLitteralsConfig: any = AppLitteralsConfig;
  
  @Input() public consumerData: any;
  @Input() public config: any;
  @Output() public saveConsumerData = new EventEmitter();

  constructor(public builder: FormBuilder) {
    this.consumerForm = builder.group({
      "name": [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.nameValidator)])],
      "email": [null, Validators.compose([Validators.required, Validators.pattern(AppRegExpressionsConfig.email)])],
      "password": [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  saveConsumer(){
    if(this.consumerForm.valid){
      this.saveConsumerData.emit(this.consumerForm.value);
    }else{
      this.consumerForm.invalid;
    }
  }
}