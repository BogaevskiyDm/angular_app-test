import { TestBed } from '@angular/core/testing';

import { PhraseDetailsResolver } from './phrase-details.resolver';

describe('PhraseDetailsResolver', () => {
  let resolver: PhraseDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PhraseDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
