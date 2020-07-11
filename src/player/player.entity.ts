/*
Author:- Ashok Gajjala
File:- player.entity.ts
Purpose:- Defines player table
*/
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    points: number;
}