import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemBodyDescriptionComponent } from './accordion-item-body-description.component';

describe('AccordionItemBodyDescriptionComponent', () => {
  let component: AccordionItemBodyDescriptionComponent;
  let fixture: ComponentFixture<AccordionItemBodyDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemBodyDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemBodyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
