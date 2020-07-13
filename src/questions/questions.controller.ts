/*
Author:- Ashok Gajjala
File:- questions.controller.ts
Purpose:- Responsible for accepting HTTP requests from the client and providing a response
*/

import { Controller, Get, Post, Body, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Questions } from './questions.entity';
import { QuestionsService } from './questions.service';
import { UsersResponse } from './questionsResponse';
@Controller('questions')
export class QuestionsController {
    constructor(private questionservice: QuestionsService) { }

    // To handle the create question
    @Post('create')
    async create(@Body() question: Questions): Promise<any> {
        this.questionservice.create(question);
    }

    // To handle the get all questions
    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async getAllQuestions(): Promise<UsersResponse> {
        let allquestions = await this.questionservice.findAll();
        let allQuestionsResponse =new UsersResponse() 
        allQuestionsResponse.allquestions = allquestions;
        return allQuestionsResponse;
    }

    // To handle the get one question
    @Get(':id')
    async getOneQuestions(@Param('id') id: string): Promise<any> {
        return this.questionservice.findOne(id);
    }
}
