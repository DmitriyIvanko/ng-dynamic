import { Component } from '@angular/core';

@Component({
  selector: 'ngd-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class UserComponent {

  public data = 'TEST DATA';

  public onShow(value: string): void {
    alert(value);
  }
}
