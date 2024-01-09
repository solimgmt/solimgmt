import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleModelComponent } from './single-model.component';

describe('SingleModelComponent', () => {
  let component: SingleModelComponent;
  let fixture: ComponentFixture<SingleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
