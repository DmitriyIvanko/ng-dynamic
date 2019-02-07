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
  selector: 'ngd-foobar-one',
  styleUrls: ['./foobar-one.component.scss'],
  templateUrl: './foobar-one.component.html',
})
export class FoobarOneComponent implements PluginComponent {

  @Input()
  public data: string;

  @Output()
  public show = new EventEmitter<string>();

  public onClick(): void {
    this.show.emit('Foobar one:' + this.data);
  }
}
