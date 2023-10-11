import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class ExtendedEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createdAt: number;

    @BeforeInsert()
    newDate(){
        const now = new Date().getTime()
        this.createdAt = now
    }
}
