import { ChangeDetectorRef, Component, Host, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AccordionItemComponent } from '../accordion-item.component';

@Component({
  selector: 'app-accordion-item-header',
  templateUrl: './accordion-item-header.component.html',
  styleUrls: ['./accordion-item-header.component.scss'],
})

export class AccordionItemHeaderComponent implements OnInit, OnDestroy {

  @HostBinding('class.accordion-item-header-collapsed')
  get isCollapsed(): boolean {
    return this.accordionItem.collapsed;
  }

  @HostBinding('class.accordion-item-header-expanded')
  @HostBinding('attr.aria-expanded')
  get expanded(): boolean {
    return !this.accordionItem.collapsed;
  }

  @HostListener('click')
  @HostListener('keydown.space')
  @HostListener('keydown.enter')
  toggle() {
    this.accordionItem.toggle();
  }

  private destroy$ = new Subject<void>();
  constructor(@Host() private accordionItem: AccordionItemComponent, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.accordionItem.accordionItemInvalidate
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => this.cd.markForCheck());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
