/*
Author:- Ashok Gajjala
File:- questions.dto.ts
Purpose:- Defines how data will be sent over the network
*/

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