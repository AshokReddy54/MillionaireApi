import { Controller, Get, Post, Body, Param, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
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
