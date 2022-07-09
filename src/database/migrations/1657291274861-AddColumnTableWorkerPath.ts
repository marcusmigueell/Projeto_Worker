import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnTableWorkerPath1657291274861 implements MigrationInterface {

    private tableName: string = "workerPath";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "${this.tableName}" ADD COLUMN start_worker TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "${this.tableName}" ADD COLUMN elapsed_time VARCHAR(10)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "${this.tableName}" DROP COLUMN start_worker`);
        await queryRunner.query(`ALTER TABLE "${this.tableName}" DROP COLUMN elapsed_time`);
    }

}
