import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRegionsComponent } from './gestion-regions.component';

describe('GestionRegionsComponent', () => {
  let component: GestionRegionsComponent;
  let fixture: ComponentFixture<GestionRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRegionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
