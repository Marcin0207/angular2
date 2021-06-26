import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTabComponentComponent } from './app-tab-component.component';

describe('AppTabComponentComponent', () => {
  let component: AppTabComponentComponent;
  let fixture: ComponentFixture<AppTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTabComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
