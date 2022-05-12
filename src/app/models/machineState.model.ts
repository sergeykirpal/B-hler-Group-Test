export class MachineStateModel {
  key: string = null;
  name: string = null;
  status: string = null;
  icon: string = null;

  constructor(data) {
    this.key = data.key;
    this.name = data.name;
    this.status = data.status;
    this.icon = data.icon;
  }
}
