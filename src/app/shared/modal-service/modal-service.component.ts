import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrls: ['./modal-service.component.css']
})
export class ModalServiceComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
  }

}
@Component({
  selector: 'your-dialog',
  template: 'passed in {{ data.name }}',
})
export class YourDialog {
  constructor() { }
}