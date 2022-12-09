import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation, Input, HostBinding, OnChanges, OnDestroy, SimpleChanges, Host, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AccordionComponent } from '../accordion.component';

const accordionItemBodyTrigger = trigger('accordionItemBody', [
  state(
    'collapsed',
    style({
      visibility: 'hidden',
      height: 0,
      opacity: 0.1,
    }),
  ),
  state(
    'expanded',
    style({
      visibility: 'visible',
      opacity: 1,
    }),
  ),
  transition('collapsed => expanded', animate('500ms ease-in')),
  transition('expanded => collapsed', animate('500ms ease-out')),
]);

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [accordionItemBodyTrigger],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AccordionItemComponent implements OnInit, OnChanges, OnDestroy {

  private collapsedValue = true;
  private destroy$ = new Subject<void>();

  /**
   * Item is collapse (`true` by default)
   * @type {boolean}
   */
  @Input('collapsed')
  @HostBinding('class.collapsed')

  get collapsed() : boolean {
    return this.collapsedValue;
  }

  set collapsed(val: boolean) {
    this.collapsedValue = val;
    this.collapsedChange.emit(this.collapsedValue);
    this.invalidate()
  }

  /**
   * Item is expanded (`false` by default)
   * @type {boolean}
   */
   @Input('expanded')
   @HostBinding('class.expanded')
   get expanded(): boolean {
     return !this.collapsed;
   }
   set expanded(val: boolean) {
     this.collapsedValue = !val;
   }

  /**
   * Item is bodyClass (`collapsed` by default)
   * @type {string}
   */
  @Input('bodyClass')

  get bodyClass() : string {
    if (this.collapsedValue) {
      return 'collapsed'
    } else {
      return 'expanded'
    }
  }

   @Output() collapsedChange = new EventEmitter<boolean>();

   accordionItemInvalidate = new Subject<boolean>();

  constructor( @Host() private accordion: AccordionComponent, private cd: ChangeDetectorRef) { }

  // on/close toggle
  toggle () {
    const willSet = !this.collapsed;

    if (this.accordion.multi) {
      this.accordion.openCloseItems.next(true);
    }
    this.collapsed = willSet;
  }

  // open this item
  open() {
    this.collapsed = false;
  }
  // close this item
  close() {
    this.collapsed = true;
  }

  ngOnInit(): void {
    this.accordion.openCloseItems
      .pipe(takeUntil(this.destroy$))
      .subscribe(collapsed => {
        this.collapsed = collapsed;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.accordionItemInvalidate.next(true);
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
    this.accordionItemInvalidate.complete()
  }

  private invalidate() {
    this.accordionItemInvalidate.next(true)
    this.cd.markForCheck();
  }
}
