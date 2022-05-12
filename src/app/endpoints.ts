export class Endpoints {
  apiURL: string;
  constructor(apiURL) {
    this.apiURL = apiURL;
  }

  get(): any {
    return {
      login: this.apiURL + '/login',
    };
  }
}
