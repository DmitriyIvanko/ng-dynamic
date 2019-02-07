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

import {
  FoobarModel,
  widgetsToken,
} from 'user-core';
import { FOOBAR_LIST } from './foobar-list.data';

@Component({
  selector: 'ngd-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnDestroy, OnInit {

  public data = 'TEST DATA';

  public foobarList = FOOBAR_LIST;

  public selectedFoobarIdList: string[] = [];

  public subscription = new Subscription();

  @ViewChild('vc', { read: ViewContainerRef })
  public vc: ViewContainerRef;

  private activeComponentRefDictionary: Object = {};

  constructor(
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
  ) { }

  public identify(index: number, foobar: FoobarModel): string {
    return foobar.id;
  }

  public isSelected(foobar: FoobarModel): boolean {
    return this.selectedFoobarIdList.some((id) => {
      return id === foobar.id;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.selectedFoobarIdList.forEach((id) => {
      this.deactivatePlugin(id);
    });
  }

  public ngOnInit(): void {
    this.foobarList = FOOBAR_LIST;
  }

  public onSelect(foobar: FoobarModel): void {
    const index = this.selectedFoobarIdList.indexOf(foobar.id);

    if (index === -1) {
      this.selectedFoobarIdList.push(foobar.id);
      this.activatePlugin(foobar);
    } else {
      this.selectedFoobarIdList.splice(index, 1);
      this.deactivatePlugin(foobar.id);
    }
  }

  public onShow(value: string): void {
    alert(value);
  }

  private activatePlugin(foobar: FoobarModel): void {
    this.loader.load(foobar.src).then((factory) => {
      const module = factory.create(this.injector);
      const cfr = module.componentFactoryResolver;

      const widgets = module.injector.get(widgetsToken);
      const cmpFactory = cfr.resolveComponentFactory(widgets.component);
      let componentRef: ComponentRef<any> = this.vc.createComponent(cmpFactory);
      componentRef.instance.data = this.data;
      this.subscription.add(componentRef.instance.show.subscribe((data) => {
        this.onShow(data);
      }));
      this.activeComponentRefDictionary[foobar.id] = componentRef;
    });
  }

  private deactivatePlugin(foobarId: string): void {
    this.activeComponentRefDictionary[foobarId].destroy();
  }
}
