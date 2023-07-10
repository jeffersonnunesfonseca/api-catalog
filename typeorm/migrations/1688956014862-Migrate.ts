import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrate1688956014862 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'email_login',
            type: 'varchar',
            length: '150',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'birthday_at',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'person_type',
            type: 'varchar',
            length: '2',
          },
          {
            name: 'company_name',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'fantasy_name',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'role',
            type: 'varchar',
            default: '"USER"',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
