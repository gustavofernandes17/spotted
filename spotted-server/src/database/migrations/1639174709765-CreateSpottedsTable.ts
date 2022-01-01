import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpottedsTable1639174709765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'spotteds', 
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true, 
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'uuid'
          }, 
          {
            name: 'content', 
            type: 'text',
            isNullable: false, 
          },
          {
            name: 'date_created',
            type: 'timestamp',
            isNullable: false, 
          },
          {
            name: 'image_url', 
            type: 'text',
            isNullable: false
          }
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('spotteds');
    }

}
