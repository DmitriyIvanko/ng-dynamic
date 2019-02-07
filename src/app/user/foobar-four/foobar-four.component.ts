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
  selector: 'ngd-foobar-four',
  styleUrls: ['./foobar-four.component.scss'],
  templateUrl: './foobar-four.component.html',
})
export class FoobarFourComponent implements PluginComponent {

  @Input()
  public data: string;

  @Output()
  public show = new EventEmitter<string>();

  public onClick(): void {
    this.show.emit('Foobar four:' + this.data);
  }
}
