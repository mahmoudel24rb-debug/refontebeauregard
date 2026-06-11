import * as migration_20260611_090600_initiale from './20260611_090600_initiale';

export const migrations = [
  {
    up: migration_20260611_090600_initiale.up,
    down: migration_20260611_090600_initiale.down,
    name: '20260611_090600_initiale'
  },
];
