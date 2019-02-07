import { NgModule } from '@angular/core';

import { widgetsToken } from 'user-core';
import { FoobarOneComponent } from './foobar-one.component';

@NgModule({
  declarations: [
    FoobarOneComponent,
  ],
  entryComponents: [
    FoobarOneComponent,
  ],
  providers: [
    {
      provide: widgetsToken,
      useValue: {
        component: FoobarOneComponent,
        name: 'plugin-cmp',
      },
    },
  ],
})
export class FoobarOneModule { }
