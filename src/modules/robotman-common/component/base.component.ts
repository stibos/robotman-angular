import {EventEmitter, Injectable, Input, Output} from "@angular/core";
import {LogEvent} from "../model/log-event.type";

@Injectable()
export class BaseComponent {

  @Input()
  id!: string

  @Output()
  logger: EventEmitter<LogEvent> = new EventEmitter<LogEvent>();

}
