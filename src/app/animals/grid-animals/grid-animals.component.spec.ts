import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAnimalsComponent } from './grid-animals.component';

describe('GridAnimalsComponent', () => {
  let component: GridAnimalsComponent;
  let fixture: ComponentFixture<GridAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
