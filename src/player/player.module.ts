/*
Author:- Ashok Gajjala
File:- player.module.ts
Purpose:- Defines player building blocks like components, services, pipes etc
*/

import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
  ],
  providers: [PlayerService],
  controllers: [PlayerController]
})
export class PlayerModule { }
