import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commonlib3Component } from './commonlib3.component';

describe('Commonlib3Component', () => {
  let component: Commonlib3Component;
  let fixture: ComponentFixture<Commonlib3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commonlib3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commonlib3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
