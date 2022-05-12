import { Component } from '@angular/core';
import { MachineStateModel } from 'src/app/models/machineState.model';
import { RequestClass } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { State } from 'src/app/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [
    { provide: RequestService, useClass: RequestClass },
  ]
})

export class HeaderComponent {
  constructor(public state: State, private request: RequestService) {
    this.getData();
  }

  getData(): void {
    this.state.blockui = true;
    this.request.getState().subscribe(result => {
      result.forEach(element => {
        this.state.nav.push(new MachineStateModel(element));
      });
      this.state.blockui = false;
    });
  }
}
