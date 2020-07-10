import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(Player)
        private playerRepository: Repository<Player>,
    ) { }

    async  create(player: Player): Promise<any> {
        return await this.playerRepository.save(player);
    }

    async  findAll(): Promise<any> {
        return await this.playerRepository.find();
    }

}