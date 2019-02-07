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
        component: FoobarThreeComponent,
        name: 'plugin-cmp',
      },
    },
  ],
})
export class FoobarThreeModule { }
