import { Exclude } from 'class-transformer';

export class QuestionsDTO {
  id: number;
  name: string;
  options:[];

  @Exclude()
  answer: string;

  constructor(partial: Partial<QuestionsDTO>) {
    Object.assign(this, partial);
  }
}