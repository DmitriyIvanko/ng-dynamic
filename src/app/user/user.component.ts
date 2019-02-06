import {
  Component,
  ComponentFactoryResolver,
  Injector,
  NgModuleFactoryLoader,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { FoobarFiveComponent } from './foobar-five/foobar-five.component';
import { FoobarFourComponent } from './foobar-four/foobar-four.component';
// import { FoobarOneComponent } from './foobar-one/foobar-one.component';
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
    // FoobarOneComponent,
    FoobarTwoComponent,
    FoobarThreeComponent,
  ];

  private componentRefList = [];

  constructor(
    // private cfr: ComponentFactoryResolver,
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

        const widgets = module.injector.get('widgets');
        const cmpFactory = cfr.resolveComponentFactory(widgets.component);
        this.vc.createComponent(cmpFactory);
      });
    // this.componentList.forEach((component) => {
    //   let componentRef = this.vc.createComponent(this.cfr.resolveComponentFactory(component));
    //   componentRef.instance.data = this.data;
    //   this.subscription.add(componentRef.instance.show.subscribe((data) => {
    //     this.onShow(data);
    //   }));
    //   this.componentRefList.push(componentRef);
    // });
  }

  public onShow(value: string): void {
    alert(value);
  }
}
