import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  MoviesModule } from './movies/movies.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [ 
    MoviesModule,
    PrismaModule,
    UserModule,
    ReservationModule,
   ],
  controllers: [ AppController ],
  providers: [ AppService ],
  
})
export class AppModule {}
