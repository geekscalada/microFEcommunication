import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commonlibrxjsv2Component } from './commonlibrxjsv2.component';

describe('Commonlibrxjsv2Component', () => {
  let component: Commonlibrxjsv2Component;
  let fixture: ComponentFixture<Commonlibrxjsv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commonlibrxjsv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commonlibrxjsv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
