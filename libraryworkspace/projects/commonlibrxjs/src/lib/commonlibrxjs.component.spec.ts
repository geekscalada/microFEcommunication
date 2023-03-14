import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonlibrxjsComponent } from './commonlibrxjs.component';

describe('CommonlibrxjsComponent', () => {
  let component: CommonlibrxjsComponent;
  let fixture: ComponentFixture<CommonlibrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonlibrxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonlibrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
