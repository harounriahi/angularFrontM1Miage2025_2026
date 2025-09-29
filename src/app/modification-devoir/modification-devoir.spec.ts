import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDevoir } from './modification-devoir';

describe('ModificationDevoir', () => {
  let component: ModificationDevoir;
  let fixture: ComponentFixture<ModificationDevoir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationDevoir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationDevoir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
