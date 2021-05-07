import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapStudentListComponent } from './baitap-student-list.component';

describe('BaitapStudentListComponent', () => {
  let component: BaitapStudentListComponent;
  let fixture: ComponentFixture<BaitapStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitapStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
