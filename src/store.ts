import * as states from '@states';

type StatesKeys = keyof typeof states;
type Store = Record<StatesKeys, ReturnType<(typeof states)[StatesKeys]>>;

let store: Store | {} = {};
