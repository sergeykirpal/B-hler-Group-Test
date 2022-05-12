import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../state';
import { RequestService } from './request.service';


@Injectable()

export class RequestClass implements RequestService {
  constructor(public state: State) {

  }

  getState(): any {
    const rq = new Observable((observer) => {
      const data = [
        {
          key: this.state.navKeys.scale,
          name: 'Scale',
          status: this.state.machineStates.running,
          icon: 'ios_share'
        },
        {
          key: this.state.navKeys.bagAttach,
          name: 'Bag Attach',
          status: this.state.machineStates.alarm,
          icon: 'chrome_reader_mode'
        },
        {
          key: this.state.navKeys.packer,
          name: 'Packer',
          status: this.state.machineStates.running,
          icon: 'call_to_action'
        },
        {
          key: this.state.navKeys.bagCloser,
          name: 'Bag Closer',
          status: this.state.machineStates.warning,
          icon: 'grid_on'
        },
      ];
      setTimeout(() => {
        observer.next(data);
      }, 2000);
    });
    return rq;
  }

}
