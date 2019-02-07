import { FoobarModel } from 'user-core';

export const FOOBAR_LIST: FoobarModel[] = [
  {
    id: '01',
    name: 'Plugin One',
    src: 'src/app/user/foobar-one/foobar-one.module#FoobarOneModule',
  },
  {
    id: '02',
    name: 'Plugin Two',
    src: 'src/app/user/foobar-two/foobar-two.module#FoobarTwoModule',
  },
  {
    id: '03',
    name: 'Plugin Three',
    src: 'src/app/user/foobar-three/foobar-three.module#FoobarThreeModule',
  },
  {
    id: '04',
    name: 'Plugin Four',
    src: 'src/app/user/foobar-four/foobar-four.module#FoobarFourModule',
  },
  {
    id: '05',
    name: 'Plugin Five',
    src: 'src/app/user/foobar-five/foobar-five.module#FoobarFiveModule',
  },
];
