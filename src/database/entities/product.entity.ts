import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ExtendedEntity } from "./extended-entity";

@Entity()
export class Product extends ExtendedEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productName: string;

    @Column()
    price: number;

    @Column()
    cost: number;

    @Column()
    quantity: number
}
