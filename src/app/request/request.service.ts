import { Injectable } from '@angular/core';

@Injectable()

export abstract class RequestService {

  abstract getState(): any;
}
