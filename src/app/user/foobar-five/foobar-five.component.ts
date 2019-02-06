import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngd-foobar-five',
  styleUrls: ['./foobar-five.component.scss'],
  templateUrl: './foobar-five.component.html',
})
export class FoobarFiveComponent {

  @Input()
  public data: string;

  @Output()
  public show = new EventEmitter<string>();

  public onClick(): void {
    this.show.emit('Foobar five:' +  this.data);
  }
}
