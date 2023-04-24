import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaChatrComponent } from './area-chatr.component';

describe('AreaChatrComponent', () => {
  let component: AreaChatrComponent;
  let fixture: ComponentFixture<AreaChatrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaChatrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaChatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
