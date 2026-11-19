#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/bd4b2cab6d5cfef2596b03ea0e0439a22e71a2f0e5f5f254d2c0a484d195f8c5/contract';
import endContract from '../../snapshots/bd4b2cab6d5cfef2596b03ea0e0439a22e71a2f0e5f5f254d2c0a484d195f8c5/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Movie',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
