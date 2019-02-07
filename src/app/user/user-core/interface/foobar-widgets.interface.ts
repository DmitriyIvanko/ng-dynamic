import {
  EventEmitter,
  InjectionToken,
  Type,
} from '@angular/core';

export interface PluginComponent {
  data: object;
  show: EventEmitter<string>;
}

export interface Plugin {
  component: Type<PluginComponent>;
  name: string;
}

export const widgetsToken = new InjectionToken<Plugin>('widgets');

export interface FoobarModel {
  id: string;
  name: string;
  src: string;
}
