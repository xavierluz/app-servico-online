import { Component, OnInit } from '@angular/core';
import { trigger, style, state ,transition, animate} from '@angular/animations';
import { NotificationService } from '../../mensagem/notification.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-visibility',[
      state('hidden', style({
        opacity:0,
        bottom:'0px'
      })),
      state('visible', style({
        opacity:1,
        bottom:'30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => visible', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  mensagem:string ='Hello celso';
  snackVisibility:string ='hidden';
  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.do(mensagem=> {
      this.mensagem= mensagem
      this.snackVisibility = 'visible'
    }).switchMap(mensagem=> Observable.timer(3000))
    .subscribe(timer=> this.snackVisibility ='hidden');
  }

}
