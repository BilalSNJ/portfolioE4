import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalWatchComponent } from './legal-watch.component';

describe('LegalWatchComponent', () => {
  let component: LegalWatchComponent;
  let fixture: ComponentFixture<LegalWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
