import { NgModule } from '@angular/core';

import { widgetsToken } from 'user-core';
import { FoobarThreeComponent } from './foobar-three.component';

@NgModule({
  declarations: [
    FoobarThreeComponent,
  ],
  entryComponents: [
    FoobarThreeComponent,
  ],
  providers: [
    {
      provide: widgetsToken,
      useValue: {
        name: 'plugin-cmp',
        component: FoobarThreeComponent,
      },
    },
  ],
})
export class FoobarThreeModule { }
