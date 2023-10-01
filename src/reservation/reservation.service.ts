import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservationRepository } from './reservation.repository';
import { CreateReservationRequest, UpdateReservationRequest } from './dto/reservation.request';

@Injectable()
export class ReservationService {
    constructor(
        private readonly reservationRepository: ReservationRepository,
    ) {}

    async getReservation() {
        return await this.reservationRepository.findAllReservation();
    }

    async getReservationById(id: number) {
        return await this.reservationRepository.findByReservationId({id});
    }

    async createReservation(request: CreateReservationRequest) {
        return await this.reservationRepository.createReservation(request);
    }

    async deleteReservation(id: number): Promise<void> {
        return await this.reservationRepository.deleteReservation(id);
    }

    async updateReservation(request: UpdateReservationRequest) {
        const reservation = await this.getReservationById(request.id);

        if (!reservation) {
            throw new NotFoundException("예매내역이 없습니다");
        }

        return await this.reservationRepository.updateReservation(request);
    }
}
