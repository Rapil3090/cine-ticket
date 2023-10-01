import { Test, TestingModule } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { ReservationRepository } from './reservation.repository';
import { CreateReservationRequest, UpdateReservationRequest } from './dto/reservation.request';
import exp from 'constants';
import { NotFoundException } from '@nestjs/common';

describe('ReservationService', () => {
  let service: ReservationService;
  let repository: ReservationRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationService, {
        provide: ReservationRepository,
        useValue: {
          findAllReservation: jest.fn(),
          findByReservationId: jest.fn(),
          createReservation: jest.fn(),
          deleteReservation: jest.fn(),
          updateReservation: jest.fn(),
        },
      },
    ],
    }).compile();

    service = module.get<ReservationService>(ReservationService);
    repository = module.get<ReservationRepository>(ReservationRepository);
  });

  describe('getReservation', () => {
    it('전체 예약 조회', async () => {
      const mockReservations = [{ id: 1, userId: 1, movieId: 1, reservationDate: new Date() }];
      jest.spyOn(repository, 'findAllReservation').mockResolvedValue(mockReservations);

      const result = await service.getReservation();

      expect(repository.findAllReservation).toHaveBeenCalled();
      expect(result).toEqual(mockReservations);
    });
  });

  describe('getReservationById', () => {
    it('예약 조회', async () => {

      const expectedReservation = {
        id: 1,
        userId: 2,
        movieId: 3,
        reservationDate: new Date(),
      };

      jest.spyOn(repository, 'findByReservationId').mockResolvedValue(expectedReservation);

      const result = await service.getReservationById(1);

      expect(result).toEqual(expectedReservation);
    })
  });

  describe('createReservation', () => {
    it('영화 예매', async () => {

      const request: CreateReservationRequest = {
        userId: 1,
        movieId: 1,
        reservationDate: new Date(),
      };

      const expectedReservation = {
        id: 1,
        userId: 1,
        movieId: 1,
        reservationDate: new Date(),
      };

      jest.spyOn(repository, 'createReservation').mockResolvedValue(expectedReservation);

      const result = await service.createReservation(request);

      expect(result).toEqual(expectedReservation);

      expect(repository.createReservation).toHaveBeenCalledWith(request);
    });
  });

  describe('deleteReservation', () => {
    it('영화 예약취소', async () => {

      const reservationId = 1;

      await service.deleteReservation(reservationId);

      expect(repository.deleteReservation).toHaveBeenCalledWith(reservationId);
    });
  });

  describe('updateReservation', () => {

    it('영화 예약변경', async () => {

      const request: UpdateReservationRequest = {
        id: 1,
        userId: 1,
        movieId: 1,
        reservationDate: new Date(),
      };

      const expectUpdatedReservation = {
        id: 1,
        userId: 1,
        movieId: 2,
        reservationDate: new Date(),
      };

      
      jest.spyOn(repository, 'updateReservation').mockResolvedValue(expectUpdatedReservation);

      await expect(service.updateReservation(request)).resolves.toEqual(expectUpdatedReservation);
    });

  });

});
