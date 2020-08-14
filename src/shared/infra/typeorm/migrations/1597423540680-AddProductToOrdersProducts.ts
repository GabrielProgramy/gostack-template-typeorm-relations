import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddProductToOrdersProducts1597423540680
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'ProductToOrdersProducts',
        referencedTableName: 'products',
        referencedColumnNames: ['id'],
        columnNames: ['product_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'orders_products',
      'ProductToOrdersProducts',
    );
  }
}
