import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap7DirectiveComponent } from './baitap7-directive.component';

describe('Baitap7DirectiveComponent', () => {
  let component: Baitap7DirectiveComponent;
  let fixture: ComponentFixture<Baitap7DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap7DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap7DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
