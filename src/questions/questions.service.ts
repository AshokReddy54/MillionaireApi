/*
Author:- Ashok Gajjala
File:- questions.service.ts
Purpose:- Responsible for providing some data, which can be reused across the application
*/

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from './questions.entity';

@Injectable()
export class QuestionsService {
    constructor(
        @InjectRepository(Questions)
        private questionsRepository: Repository<Questions>,
    ) { }

    async  create(question: Questions): Promise<any> {
        return await this.questionsRepository.save(question);
    }

    async  findAll(): Promise<any> {
        return await this.questionsRepository.find();
    }

    async  findOne(id: string): Promise<any> {
        return await this.questionsRepository.findOne(id);
    }
}