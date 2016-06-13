import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BankDemoAppComponent } from '../app/bank-demo.component';

beforeEachProviders(() => [BankDemoAppComponent]);

describe('App: BankDemo', () => {
  it('should create the app',
      inject([BankDemoAppComponent], (app: BankDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bank-demo works!\'',
      inject([BankDemoAppComponent], (app: BankDemoAppComponent) => {
    expect(app.title).toEqual('bank-demo works!');
  }));
});
