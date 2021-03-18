import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyjoiningdateComponent } from './sortbyjoiningdate.component';

describe('SortbyjoiningdateComponent', () => {
  let component: SortbyjoiningdateComponent;
  let fixture: ComponentFixture<SortbyjoiningdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyjoiningdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbyjoiningdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
