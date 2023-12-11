import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresosUsuarioComponent } from './egresos-usuario.component';

describe('EgresosUsuarioComponent', () => {
  let component: EgresosUsuarioComponent;
  let fixture: ComponentFixture<EgresosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgresosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgresosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
