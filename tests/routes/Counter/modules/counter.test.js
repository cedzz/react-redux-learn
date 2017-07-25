import { counter } from 'routes/Counter/modules/counter';
import Expect from 'expect';


describe('(Reducer) counter', () => {

  it('Should increment the counter', () => {
    Expect(
      counter(0, { type : 'INCREMENT' })
    ).toEqual(1);

    Expect(
      counter(1, { type : 'INCREMENT' })
    ).toEqual(2);
  });

  it('Should decrement the counter', () => {
    Expect(
      counter(2, { type : 'DECREMENT' })
    ).toEqual(1);

    Expect(
      counter(1, { type : 'DECREMENT' })
    ).toEqual(0);
  });

  it('should initialize for no action', () => {
    Expect(
      counter(undefined, {})
    ).toEqual(0);
  });

});
