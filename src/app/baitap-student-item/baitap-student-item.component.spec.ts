import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapStudentItemComponent } from './baitap-student-item.component';

describe('BaitapStudentItemComponent', () => {
  let component: BaitapStudentItemComponent;
  let fixture: ComponentFixture<BaitapStudentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitapStudentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapStudentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
