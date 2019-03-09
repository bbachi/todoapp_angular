import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
  Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  order = 1;
  @Input() footerText;
  @Input() numberOfItems: number;

  constructor() {}

  ngOnInit() {
  }
}
