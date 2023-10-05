import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReservationController } from './reservation.controller';
import { ReservationRepository } from './reservation.repository';
import { UserModule } from '../user/user.module';
import { UserRepository } from '../user/user.repository';
import { MoviesModule } from '../movies/movies.module';
import { MovieRepository } from '../movies/movies.repository';

@Module({
  imports: [PrismaModule, UserModule, MoviesModule],
  controllers: [ReservationController],
  providers: [PrismaModule, ReservationService, ReservationRepository, UserRepository, MovieRepository]
})
export class ReservationModule {}
