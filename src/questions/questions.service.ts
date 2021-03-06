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

    // To save the question
    async  create(question: Questions): Promise<any> {
        return await this.questionsRepository.save(question);
    }

    // To get all questions
    async  findAll(): Promise<any> {
        return await this.questionsRepository.find();
    }

    // To get one question
    async  findOne(id: string): Promise<any> {
        return await this.questionsRepository.findOne(id);
    }
}