import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateValueForAdminComponent } from './generate-value-for-admin.component';

describe('GenerateValueForAdminComponent', () => {
  let component: GenerateValueForAdminComponent;
  let fixture: ComponentFixture<GenerateValueForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateValueForAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateValueForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
