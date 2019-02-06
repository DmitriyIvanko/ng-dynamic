import { NgModule } from '@angular/core';

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
      provide: 'widgets',
      useValue: {
        name: 'plugin-cmp',
        component: FoobarOneComponent,
      },
    },
  ],
})
export class FoobarOneModule { }
