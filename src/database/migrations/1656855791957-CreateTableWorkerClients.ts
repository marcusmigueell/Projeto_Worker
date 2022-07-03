import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableWorkerClients1656855791957 implements MigrationInterface {

    private tableName: string = "workerClients";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    {name: "name", type: "varchar", isUnique: true },
                    {name: "status", type: "int" },
                    {name: "create_at", type: "timestamp", default: "CURRENT_TIMESTAMP"},
                    {name: "update_at", type: "timestamp", default: "CURRENT_TIMESTAMP"}
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
