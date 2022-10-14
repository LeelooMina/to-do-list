import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEditComponent } from './to-do-edit.component';

describe('ToDoEditComponent', () => {
  let component: ToDoEditComponent;
  let fixture: ComponentFixture<ToDoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
