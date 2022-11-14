import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemBodyTitleComponent } from './accordion-item-body-title.component';

describe('AccordionItemBodyTitleComponent', () => {
  let component: AccordionItemBodyTitleComponent;
  let fixture: ComponentFixture<AccordionItemBodyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemBodyTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemBodyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
