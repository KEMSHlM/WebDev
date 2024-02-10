import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateItem1707539868079 implements MigrationInterface {
  name = 'CreateItem1707539868079';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" RENAME COLUMN "updateAt" TO "updatedAt"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" RENAME COLUMN "updatedAt" TO "updateAt"`,
    );
  }
}
