import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchUsersResponse} from "../models/search-users-response";
import {CreateUserRequest} from "../models/create-user-request";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',

})
export class UserHandlerService {

  cachedUsers: User[] = [
    new User("7d192f26-91c8-4db4-a92b-9f6f269e1a9a", "John", "Doe", "john@example.com"),
    new User("3b661b35-0e61-4925-81e0-628e3ef59368", "Alice", "Smith", "alice@example.com"),
    new User("a071b7e3-1c16-491c-94cc-1e48a792b53a", "Bob", "Johnson", "bob@example.com"),
    new User("9e3b3d6e-d981-4b2d-a671-13e293524647", "Emma", "Davis", "emma@example.com"),
    new User("4f874905-47d2-40d4-8f57-0dab02ee61e1", "Michael", "Wilson", "michael@example.com")
  ];

  constructor(private httpClient: HttpClient) {
  }

  fetchUsersByFirstAndLastName(first: string, last: string): Observable<SearchUsersResponse> {

    if (!environment.production) {
      return this.fetchDummyUsersByFirstAndLastName(first, last);
    }

    const url = environment.serverUrl + "/api/elasticsearch/search";
    const options = {params: new HttpParams().set('lastName', last).set('firstName', first)};
    console.log(options.params)
    return this.httpClient.get<SearchUsersResponse>(url, options);
  }

  fetchDummyUsersByFirstAndLastName(first: string, last: string): Observable<SearchUsersResponse> {

    const filteredUsers = this.cachedUsers.filter(user =>
      user.lastName.toLowerCase().includes(last.toLowerCase()) &&
      user.firstName.toLowerCase().includes(first.toLowerCase())
    );
    return new Observable<SearchUsersResponse>(observer => {
      observer.next(new SearchUsersResponse(filteredUsers.length, filteredUsers))

      observer.complete()
    });
  }

  createUser(user: CreateUserRequest): Observable<User> {

    if (!environment.production) {
      return this.createDummyUser(user);
    }

    const url = environment.serverUrl + "/api/elasticsearch/create";
    return this.httpClient.post<User>(url, user);
  }

  createDummyUser(user: CreateUserRequest): Observable<User> {
    const createdUser = new User('a071b7e3-1c16-491c-94cc-1e48a792b53a', user.firstName, user.lastName, user.email);
    this.cachedUsers.push(createdUser)
    return new Observable<User>(observer => {
      observer.next(createdUser)

      observer.complete()
    });
  }
}
