// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { get } from '@loopback/rest';

export class TestController {

  constructor() { }

  @get('/test')
  test(): string {
    return 'Test Logesta Nuevo codigo!!!';
  }
}
