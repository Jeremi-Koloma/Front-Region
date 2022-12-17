import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRegionComponent } from './ajouter-region.component';

describe('AjouterRegionComponent', () => {
  let component: AjouterRegionComponent;
  let fixture: ComponentFixture<AjouterRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
