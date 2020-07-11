/*
Author:- Ashok Gajjala
File:- questionsResponse.ts
Purpose:- Responsible for serialize / deserialize object
*/

import { Type } from 'class-transformer';
import { Questions } from './questions.entity';
import { QuestionsDTO } from './questions.dto';

export class UsersResponse {

    @Type(() => QuestionsDTO)
    allquestions: Questions[];
    constructor() { }
}