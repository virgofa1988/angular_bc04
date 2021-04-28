import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapbindingdataComponent } from './baitapbindingdata.component';

describe('BaitapbindingdataComponent', () => {
  let component: BaitapbindingdataComponent;
  let fixture: ComponentFixture<BaitapbindingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaitapbindingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapbindingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
