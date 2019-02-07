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
        component: FoobarTwoComponent,
        name: 'plugin-cmp',
      },
    },
  ],
})
export class FoobarTwoModule { }
