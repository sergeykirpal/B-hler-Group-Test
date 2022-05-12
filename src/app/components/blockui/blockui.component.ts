import { Component } from '@angular/core';
import { State } from 'src/app/state';


@Component({
  selector: 'app-blockui',
  template: `<div class="blockUI {{state.blockui ? 'active' : ''}}"><div class="spinner"></div></div>`,
  styleUrls: ['./blockui.component.less']
})

export class BlockuiComponent {
  constructor(public state: State) { }
}
