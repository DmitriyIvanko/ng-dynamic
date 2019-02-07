import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { PluginComponent } from 'user-core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngd-foobar-two',
  styleUrls: ['./foobar-two.component.scss'],
  templateUrl: './foobar-two.component.html',
})
export class FoobarTwoComponent implements PluginComponent {

  @Input()
  public data: string;

  @Output()
  public show = new EventEmitter<string>();

  public onClick(): void {
    this.show.emit('Foobar two:' + this.data);
  }
}
