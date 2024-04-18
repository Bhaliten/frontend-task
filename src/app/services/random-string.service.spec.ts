import { TestBed } from '@angular/core/testing';

import { RandomStringService } from './random-string.service';

describe('RandomStringService', () => {
  let service: RandomStringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomStringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('isValidString', () => {
  let service: RandomStringService;

  beforeAll(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomStringService);
  });

  it('should return true for valid strings', () => {
    expect(service.isValidString('12ab')).toBe(true);
  });

  it('should return false for strings with incorrect format', () => {
    expect(service.isValidString('1234')).toBe(false);
    expect(service.isValidString('12a')).toBe(false);
    expect(service.isValidString('ab12')).toBe(false);
    expect(service.isValidString('')).toBe(false);
  });
});

describe('generateRandomString', () => {
  let service: RandomStringService;

  beforeAll(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomStringService);
  });

  it('should return a string with correct format', () => {
    const randomString = service.generateRandomString();
    expect(service.isValidString(randomString)).toBe(true);
  });

  it('should return different strings on subsequent calls', () => {
    const randomString1 = service.generateRandomString();
    const randomString2 = service.generateRandomString();
    expect(randomString1).not.toEqual(randomString2);
  });
});
