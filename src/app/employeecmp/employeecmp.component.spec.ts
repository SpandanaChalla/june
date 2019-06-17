import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecmpComponent } from './employeecmp.component';

describe('EmployeecmpComponent', () => {
  let component: EmployeecmpComponent;
  let fixture: ComponentFixture<EmployeecmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeecmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeecmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
