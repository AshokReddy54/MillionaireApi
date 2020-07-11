/*
Author:- Ashok Gajjala
File:- questions.module.ts
Purpose:- Defines questions building blocks like components, services, pipes etc
*/

import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from './questions.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Questions]),
  ],
  providers: [QuestionsService],
  controllers: [QuestionsController]
})
export class QuestionsModule { }
