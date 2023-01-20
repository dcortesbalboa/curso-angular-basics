import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrregarPersonajeComponent } from './agrregar-personaje.component';

describe('AgrregarPersonajeComponent', () => {
  let component: AgrregarPersonajeComponent;
  let fixture: ComponentFixture<AgrregarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrregarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrregarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
