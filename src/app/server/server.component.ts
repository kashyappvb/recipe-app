
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input('userName1') userName:string;

  @Output() citySubmitted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getCity(city : string)
  {
    this.citySubmitted.emit(city);
  }
}
