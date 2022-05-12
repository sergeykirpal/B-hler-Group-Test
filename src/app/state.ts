import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { MachineStateModel } from './models/machineState.model';

@Injectable()

export class State {

  buildMode = environment.buildMode; // prod, dev, local
  production = false;
  blockui = false;

  currentTimeFormat = 'DD/MM/YY, HH:mm:ss';
  currentTime: string = null;
  timer: any = null;


  machineStates = {
    running: 'sync',
    alarm: 'error',
    warning: 'warning'
  };
  navKeys = {
    scale: 'scale',
    bagAttach: 'bagAttach',
    packer: 'packer',
    bagCloser: 'bagCloser'
  };

  nav: Array<MachineStateModel> = [];

  constructor(private router: Router) {
    if (this.buildMode === 'prod') {
      this.setProdConfig();
    }
    if (this.buildMode === 'dev') {
      this.setDevConfig();
    }
    this.setCurrentTime();
  }

  setProdConfig(): void {
    console.log = () => { };
    this.production = true;
  }
  setDevConfig(): void {
    this.production = false;
  }

  link(url): void {
    this.router.navigate([url]);
  }

  setCurrentTime(): void {
    let time = moment().unix();
    if (this.timer) {
      clearTimeout(this.timer);
    }
    const globalTick = () => {
      time = time + 1;
      this.currentTime = moment.unix(time).format(this.currentTimeFormat);
      this.timer = setTimeout(globalTick, 1000);
    };
    globalTick();
  }


}

