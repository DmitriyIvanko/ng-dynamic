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
        name: 'plugin-cmp',
        component: FoobarOneComponent,
      },
    },
  ],
})
export class FoobarOneModule { }
