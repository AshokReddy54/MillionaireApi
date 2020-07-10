import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questions {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    options: string;

    @Column()
    answer: string;

}