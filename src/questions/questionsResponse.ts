import { Exclude, Type, Transform } from 'class-transformer';
import { Questions } from './questions.entity';
import { QuestionsDTO } from './questions.dto';

export class UsersResponse {

    @Type(() => QuestionsDTO)
    // @Transform((values: QuestionsDTO[]) => {
    //     values.forEach(value => value.options)
    //     return values.map(value => value);
    // })
    allquestions: Questions[];
    constructor() { }
}