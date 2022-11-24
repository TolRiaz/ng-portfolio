import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {

  openCloseItems = new Subject<boolean>;

  /**
   *  Allow multiple items to be expanded at the same time.
   * @type {boolean}
   */
  @Input('multi')
  get multi(): boolean {
    return this.multiValue;
  }
  set multi(val: boolean) {
    this.multiValue = val;
  }

  private multiValue = false;

  /**
  * Opens all enabled accordion items.
  */
  openAll() {
    if (this.multi) {
      this.openCloseItems.next(false);
    }
  }
  
  /**
   * Closes all enabled accordion items.
   */
  closeAll() {
    this.openCloseItems.next(true);
  }

}
