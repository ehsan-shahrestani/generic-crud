import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditNewComponent } from './employee-edit-new.component';

describe('EmployeeEditNewComponent', () => {
  let component: EmployeeEditNewComponent;
  let fixture: ComponentFixture<EmployeeEditNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEditNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
