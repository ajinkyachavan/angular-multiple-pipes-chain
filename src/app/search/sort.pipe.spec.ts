/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SortPipe } from './sort.pipe';

describe('Pipe: Sort', () => {
  it('create an instance', () => {
    let pipe = new SortPipe();
    let pipeOutput = pipe.transform(['bcd', 'abc']);
    expect(pipeOutput).toEqual(['abc', 'bcd']);
  });
});
