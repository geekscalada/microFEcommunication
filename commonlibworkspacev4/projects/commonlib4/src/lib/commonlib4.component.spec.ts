import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commonlib4Component } from './commonlib4.component';

describe('Commonlib4Component', () => {
  let component: Commonlib4Component;
  let fixture: ComponentFixture<Commonlib4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commonlib4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commonlib4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
