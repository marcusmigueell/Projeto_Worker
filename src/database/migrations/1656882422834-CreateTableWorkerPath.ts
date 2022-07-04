import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableWorkerPath1656882422834 implements MigrationInterface {

    private tableName: string = "workerPath";
    private tableConnection: string = "workerClients";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "folderName", type: "varchar" },
                    { name: "folderPath", type: "varchar" },
                    { name: "workerName", type: "varchar" },
                    { name: "status", type: "int" },
                    { name: "workerClient_id", type: "int" },
                    { name: "create_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    { name: "update_at", type: "timestamp", default: "CURRENT_TIMESTAMP" }
                ],
                foreignKeys: [
                    {
                        name: "fk_workerPath_workerClients",
                        columnNames: ["workerClient_id"],
                        referencedTableName: this.tableConnection,
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
