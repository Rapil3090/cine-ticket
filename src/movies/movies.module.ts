import { Module } from '@nestjs/common';
import {MoviesController } from './movies.controller';
import {MoviesService } from './movies.service';
import { MovieRepository } from './movies.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ MoviesController ],
  providers: [ PrismaModule, MoviesService, MovieRepository ],
})
export class MoviesModule {}
