import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPostingComponent } from './auto-posting.component';

describe('AutoPostingComponent', () => {
  let component: AutoPostingComponent;
  let fixture: ComponentFixture<AutoPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
