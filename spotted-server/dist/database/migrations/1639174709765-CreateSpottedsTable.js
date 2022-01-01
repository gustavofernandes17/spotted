"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpottedsTable1639174709765 = void 0;
const typeorm_1 = require("typeorm");
class CreateSpottedsTable1639174709765 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('spotteds');
    }
}
exports.CreateSpottedsTable1639174709765 = CreateSpottedsTable1639174709765;
