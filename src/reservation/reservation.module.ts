import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ReservationController } from './reservation.controller';
import { ReservationRepository } from './reservation.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ReservationController],
  providers: [PrismaModule, ReservationService, ReservationRepository]
})
export class ReservationModule {}
