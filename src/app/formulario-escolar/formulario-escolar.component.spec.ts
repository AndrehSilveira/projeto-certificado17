import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEscolarComponent } from './formulario-escolar.component';

describe('FormularioEscolarComponent', () => {
  let component: FormularioEscolarComponent;
  let fixture: ComponentFixture<FormularioEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEscolarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
