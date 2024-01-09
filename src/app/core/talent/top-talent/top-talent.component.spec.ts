import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTalentComponent } from './top-talent.component';

describe('TopTalentComponent', () => {
  let component: TopTalentComponent;
  let fixture: ComponentFixture<TopTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
