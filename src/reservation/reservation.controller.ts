import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationRequest, GetReservationRequest, UpdateReservationRequest } from './dto/reservation.request';

@Controller('reservation')
export class ReservationController {
    constructor (private reservationservice: ReservationService) {}
    
    @Post()
    @UsePipes(ValidationPipe)
    async createReservation(@Body() request: CreateReservationRequest) {
        return this.reservationservice.createReservation(request);
    }
    
    @Get()
    async getAllReservation() {
        return this.reservationservice.getReservation();
    }

    @Get(":id")
    async getReservationById(@Param("id") id: string) {
        const reservationId = parseInt(id, 10);
        const request: GetReservationRequest = { id: reservationId };
        return await this.reservationservice.getReservationById(reservationId);
    }

    @Delete(":id")
    async deleteReservationById(@Param("id") id: string): Promise<void> {
        const reservationId = parseInt(id, 10);
        await this.reservationservice.deleteReservation(reservationId);
    }

    @Patch("/update")
    async updateReservation(@Body() request: UpdateReservationRequest) {
        return this.reservationservice.updateReservation(request);
    }



}
