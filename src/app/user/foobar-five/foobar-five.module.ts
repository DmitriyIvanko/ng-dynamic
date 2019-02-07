import { NgModule } from '@angular/core';

import { widgetsToken } from 'user-core';
import { FoobarFiveComponent } from './foobar-five.component';

@NgModule({
  declarations: [
    FoobarFiveComponent,
  ],
  entryComponents: [
    FoobarFiveComponent,
  ],
  providers: [
    {
      provide: widgetsToken,
      useValue: {
        name: 'plugin-cmp',
        component: FoobarFiveComponent,
      },
    },
  ],
})
export class FoobarFiveModule { }
