import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-example',
  templateUrl: './dynamic-content-example.component.html',
  styleUrls: ['./dynamic-content-example.component.scss']
})
export class DynamicContentExampleComponent implements OnInit {
  @Input() public options: Object;
  constructor() { }

  ngOnInit() {
  }

}
