import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FoobarFiveComponent } from './foobar-five/foobar-five.component';
import { FoobarFourComponent } from './foobar-four/foobar-four.component';
import { FoobarOneComponent } from './foobar-one/foobar-one.component';
import { FoobarThreeComponent } from './foobar-three/foobar-three.component';
import { FoobarTwoComponent } from './foobar-two/foobar-two.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    FoobarOneComponent,
    FoobarTwoComponent,
    FoobarThreeComponent,
    FoobarFourComponent,
    FoobarFiveComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule { }
