import {
  Component,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DropdownPanel } from '../models/dropdown.model';

@Component({
  selector: 'chromosome-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export default class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
}
