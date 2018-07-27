import { EventEmitter } from "@angular/core";

export class NotificationService{
    notifier = new EventEmitter<string>();

    notify(mensagem:string){
        this.notifier.emit(mensagem);
    }
}