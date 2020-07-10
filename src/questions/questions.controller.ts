import { Controller, Get, Post, Body, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Questions } from './questions.entity';
import { QuestionsService } from './questions.service';
import { UsersResponse } from './questionsResponse';
@Controller('questions')
export class QuestionsController {
    constructor(private questionservice: QuestionsService) { }

    @Post('create')
    async create(@Body() question: Questions): Promise<any> {
        this.questionservice.create(question);
    }

    // @Get()
    // async getAllQuestions(): Promise<Questions> {
    //     return this.questionservice.findAll();
    // }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async getAllQuestions(): Promise<UsersResponse> {
        let allquestions = await this.questionservice.findAll();
        let allQuestionsResponse =new UsersResponse() 
        allQuestionsResponse.allquestions = allquestions;
        return allQuestionsResponse;
    }

    @Get(':id')
    async getOneQuestions(@Param('id') id: string): Promise<any> {
        return this.questionservice.findOne(id);
    }
}
