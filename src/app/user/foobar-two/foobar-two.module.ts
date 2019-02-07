import { NgModule } from '@angular/core';

import { widgetsToken } from 'user-core';
import { FoobarTwoComponent } from './foobar-two.component';

@NgModule({
  declarations: [
    FoobarTwoComponent,
  ],
  entryComponents: [
    FoobarTwoComponent,
  ],
  providers: [
    {
      provide: widgetsToken,
      useValue: {
        name: 'plugin-cmp',
        component: FoobarTwoComponent,
      },
    },
  ],
})
export class FoobarTwoModule { }
