import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserHandlerComponent} from './user-handler.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('UserHandlerComponent', () => {
  let component: UserHandlerComponent;
  let fixture: ComponentFixture<UserHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHandlerComponent, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
