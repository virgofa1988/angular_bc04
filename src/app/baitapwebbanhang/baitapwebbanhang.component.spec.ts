import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapwebbanhangComponent } from './baitapwebbanhang.component';

describe('BaitapwebbanhangComponent', () => {
  let component: BaitapwebbanhangComponent;
  let fixture: ComponentFixture<BaitapwebbanhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitapwebbanhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapwebbanhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
