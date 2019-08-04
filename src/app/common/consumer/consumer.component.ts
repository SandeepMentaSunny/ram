import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../providers/services/http.service';

declare var $: any;

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {
  public consumerData: Array<Object> = [];
  public consumer: Object;
  public config: Object;

  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getConsumerData().subscribe(data => {
      console.log(data);
      this.consumerData = data || [];
    })
  }

  createConsumer(){
    this.config = {
      modalHeader: 'Adding Consumer',
      buttonValue: 'Create'
    }
    $('#myModal').modal('show');
  }

  editConsumer(data){
    data['type'] = 'update';
    this.consumer = data;
    this.config = {
      modalHeader: 'Updating Consumer',
      buttonValue: 'Update'
    }
    $('#myModal').modal('show');
  }
  saveConsumer(event){
    if(Object.keys(event).length === 3){
      console.log(event);
      $('#myModal').modal('hide');  
    }
  }
}
