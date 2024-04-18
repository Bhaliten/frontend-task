import {TestBed} from '@angular/core/testing';

import {UserHandlerService} from './user-handler.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CreateUserRequest} from "../models/create-user-request";
import {environment} from "../../environments/environment";
import {SearchUsersResponse} from "../models/search-users-response";
import {User} from "../models/user";

describe('UserHandlerService', () => {
  let service: UserHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('UserHandlerService', () => {
  let service: UserHandlerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserHandlerService]
    });
    service = TestBed.inject(UserHandlerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users by first and last name', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const dummyResponse = new SearchUsersResponse(1,
      [new User('1', 'John', 'Doe', 'john@example.com')]);

    service.fetchUsersByFirstAndLastName(firstName, lastName).subscribe(response => {
      expect(response.total).toBe(1);
      expect(response.userList.length).toBe(1);
      expect(response.userList[0].firstName).toBe('John');
    });

    const req = httpTestingController.expectOne(`${environment.serverUrl}/api/elasticsearch/search?lastName=${lastName}&firstName=${firstName}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

  it('should create a user', () => {
    const createUserRequest = new CreateUserRequest(
        'Test',
        'Doe',
        'test@example.com'
      )
    ;
    const dummyUser = {
      id: '2',
      firstName: createUserRequest.firstName,
      lastName: createUserRequest.lastName,
      email: createUserRequest.email
    };

    service.createUser(createUserRequest).subscribe(user => {
      expect(user.id).toBe('2');
      expect(user.firstName).toBe('Test');
    });

    const req = httpTestingController.expectOne(`${environment.serverUrl}/api/elasticsearch/create`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

});
