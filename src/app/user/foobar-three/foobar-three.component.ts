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
  selector: 'ngd-foobar-three',
  styleUrls: ['./foobar-three.component.scss'],
  templateUrl: './foobar-three.component.html',
})
export class FoobarThreeComponent implements PluginComponent {

  @Input()
  public data: string;

  @Output()
  public show = new EventEmitter<string>();

  public onClick(): void {
    this.show.emit('Foobar three:' + this.data);
  }
}
