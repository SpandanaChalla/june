import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcmpComponent } from './studentcmp.component';

describe('StudentcmpComponent', () => {
  let component: StudentcmpComponent;
  let fixture: ComponentFixture<StudentcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
