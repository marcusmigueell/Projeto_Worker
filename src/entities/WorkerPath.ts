import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { WorkerClients } from "./WorkerClients";

@Entity("workerPath")
export class WorkerPath {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    folderName: string;

    @Column()
    folderPath: string;

    @Column()
    workerName: string;

    @Column()
    status: number;

    @Column()
    workerClient_id: number;

    @ManyToOne(() => WorkerClients)
    @JoinColumn({ name: "workerClient_id" })
    workerClient: WorkerClients;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @Column()
    start_worker: Date;

    @Column()
    elapsed_time: string;
}