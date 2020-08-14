import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddOrderToOrdersProducts1597423650884
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'OrderToOrdersProducts',
        referencedTableName: 'orders',
        referencedColumnNames: ['id'],
        columnNames: ['order_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'orders_products',
      'OrderToOrdersProducts',
    );
  }
}
