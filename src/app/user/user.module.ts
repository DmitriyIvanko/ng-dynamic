import { CommonModule } from '@angular/common';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
} from '@angular/core';

import { FoobarFiveComponent } from './foobar-five/foobar-five.component';
import { FoobarFourComponent } from './foobar-four/foobar-four.component';
import { FoobarThreeComponent } from './foobar-three/foobar-three.component';
import { FoobarTwoComponent } from './foobar-two/foobar-two.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    FoobarTwoComponent,
    FoobarThreeComponent,
    FoobarFourComponent,
    FoobarFiveComponent,
    UserComponent,
  ],
  entryComponents: [
    FoobarTwoComponent,
    FoobarThreeComponent,
    FoobarFourComponent,
    FoobarFiveComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ]
})
export class UserModule { }
