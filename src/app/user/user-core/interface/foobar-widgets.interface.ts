import {
  EventEmitter,
  Type,
  InjectionToken,
} from '@angular/core';

export interface PluginComponent {
  data: Object;
  // show: EventEmitter<string>;
}

export interface Plugin {
  name: string;
  component: Type<PluginComponent>;
}

export const widgetsToken = new InjectionToken<Plugin>('widgets');
