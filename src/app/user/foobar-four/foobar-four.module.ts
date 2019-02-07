import { NgModule } from '@angular/core';

import { widgetsToken } from 'user-core';
import { FoobarFourComponent } from './foobar-four.component';

@NgModule({
  declarations: [
    FoobarFourComponent,
  ],
  entryComponents: [
    FoobarFourComponent,
  ],
  providers: [
    {
      provide: widgetsToken,
      useValue: {
        component: FoobarFourComponent,
        name: 'plugin-cmp',
      },
    },
  ],
})
export class FoobarFourModule { }
