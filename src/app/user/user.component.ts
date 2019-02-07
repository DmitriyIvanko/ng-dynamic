import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  NgModuleFactoryLoader,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { widgetsToken } from 'user-core';
import { FoobarFiveComponent } from './foobar-five/foobar-five.component';
import { FoobarFourComponent } from './foobar-four/foobar-four.component';
import { FoobarThreeComponent } from './foobar-three/foobar-three.component';
import { FoobarTwoComponent } from './foobar-two/foobar-two.component';

@Component({
  selector: 'ngd-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnDestroy, OnInit {

  public data = 'TEST DATA';

  public subscription = new Subscription();

  @ViewChild('vc', { read: ViewContainerRef })
  public vc: ViewContainerRef;

  private componentList = [
    FoobarTwoComponent,
    FoobarThreeComponent,
  ];

  private componentRefList = [];

  constructor(
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
  ) { }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.componentRefList.forEach((componentRef) => {
      componentRef.destroy();
    });
  }

  public ngOnInit(): void {
    this.loader.load('src/app/user/foobar-one/foobar-one.module#FoobarOneModule')
      .then((factory) => {
        const module = factory.create(this.injector);
        const cfr = module.componentFactoryResolver;

        const widgets = module.injector.get(widgetsToken);
        const cmpFactory = cfr.resolveComponentFactory(widgets.component);
        let componentRef: ComponentRef<any> = this.vc.createComponent(cmpFactory);
        componentRef.instance.data = this.data;
        this.subscription.add(componentRef.instance.show.subscribe((data) => {
          this.onShow(data);
        }));
        this.componentRefList.push(componentRef);
      });
  }

  public onShow(value: string): void {
    alert(value);
  }
}
