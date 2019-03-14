import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `<p>Hello {{name}}</p>`
})

export class UserItemComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}

}
