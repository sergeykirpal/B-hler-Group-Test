import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { State } from 'src/app/state';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})

export class OverviewComponent {

  constructor(private titleService: Title, public state: State) {
    this.titleService.setTitle('Bühler Group | Home');
  }

}
