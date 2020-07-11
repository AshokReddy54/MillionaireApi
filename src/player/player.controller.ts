/*
Author:- Ashok Gajjala
File:- player.controller.ts
Purpose:- Responsible for accepting HTTP requests from the client and providing a response
*/

import { Controller, Get, Post, Body } from '@nestjs/common';
import { Player } from './player.entity';
import { PlayerService } from './player.service';
@Controller('players')
export class PlayerController {
    constructor(private playerervice: PlayerService) { }

    @Post('create')
    async create(@Body() question: Player): Promise<any> {
        this.playerervice.create(question);
    }

    @Get()
    async getAllQuestions(): Promise<Player> {
        return this.playerervice.findAll();
    }
}
