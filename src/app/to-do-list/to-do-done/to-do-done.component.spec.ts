import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDoneComponent } from './to-do-done.component';

describe('ToDoDoneComponent', () => {
  let component: ToDoDoneComponent;
  let fixture: ComponentFixture<ToDoDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
