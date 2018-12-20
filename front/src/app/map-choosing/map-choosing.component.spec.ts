import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChoosingComponent } from './map-choosing.component';

describe('MapChoosingComponent', () => {
  let component: MapChoosingComponent;
  let fixture: ComponentFixture<MapChoosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapChoosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChoosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
