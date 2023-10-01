import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  MoviesModule } from './movies/movies.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ 
    MoviesModule,
    PrismaModule,
    UserModule,
   ],
  controllers: [ AppController ],
  providers: [ AppService ],
  
})
export class AppModule {}
