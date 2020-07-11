import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from './questions/questions.entity'
import { PlayerModule } from './player/player.module';
import { Player } from './player/player.entity';
import {DbConfig} from './dbConfig'
@Module({
  imports: [QuestionsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: DbConfig.HOST,
    port: DbConfig.PORT,
    username: DbConfig.USERNAME,
    password: DbConfig.PASSWORD,
    database: DbConfig.DATABASE,
    entities: [Questions, Player],
    synchronize: true,
  }), PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
