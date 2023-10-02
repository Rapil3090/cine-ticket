import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { CreateUsersRequest, UpdateUsersRequest } from './dto/user.request';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {
        provide: UserRepository,
        useValue: {
          findAllUser: jest.fn(),
          findById: jest.fn(),
          createUsers: jest.fn(),
          deleteUsers: jest.fn(),
          updateUsers: jest.fn(),
        },
      }],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  
  describe('getUsers', () => {
    it('전체 회원 조회', async () => {
      const mockUsers = [{id: 1, name: 'tester', email: 'tester@gmail.com', password: '1234'}];
      jest.spyOn(repository, 'findAllUser').mockResolvedValue(mockUsers);

      const result = await service.getUsers();

      expect(repository.findAllUser).toHaveBeenCalled();
      expect(result).toEqual(mockUsers);
    });
  });

  describe('getUsersById', () => {
    it('회원 조회', async () => {
      const expectedUser = {
        id: 1,
        name: 'tester',
        email: 'tester@gmai.com',
        password: '1234'
      };

      jest.spyOn(repository, 'findById').mockResolvedValue(expectedUser);
      const result = await service.getUsersById(1);

      expect(result).toEqual(expectedUser);
    });
  });

  describe('createUser', () => {
    it('회원 가입', async () => {
      const request: CreateUsersRequest = {
        name: 'tester',
        email: 'tester@gmail.com',
        password: '1234',
      };

      const expectedUser = {
        id: 1,
        name: 'tester',
        email: 'tester@gmail.com',
        password: '1234',
      };

      jest.spyOn(repository, 'createUsers').mockResolvedValue(expectedUser);

      const result = await service.createUsers(request);

      expect(result).toEqual(expectedUser);
      expect(repository.createUsers).toHaveBeenCalledWith(request);
    });
  });

  describe('deleteUsers', () => {
    it('회원 탈퇴', async () => {

      const userId = 1;

      jest.spyOn(repository, 'findById').mockResolvedValue({id: userId, name: 'test', email: 'test@gmail.com', password: '1234'});

      await service.deleteUsers(userId);

      expect(repository.deleteUsers).toHaveBeenCalledWith(userId);
    });

    it('익셉션 ', async() => {

      const userId = 2;

      jest.spyOn(repository, 'findById').mockResolvedValue(null);
      
      await expect(service.deleteUsers(userId)).rejects.toThrowError(NotFoundException,);
      expect(repository.deleteUsers).not.toHaveBeenCalled();
    });
  });

  describe('updateUsers', () => {
    it('회원 정보수정', async() => {

      const request: UpdateUsersRequest = {
        id: 1,
        name: 'tester1',
        email: 'test@naver.com',
        password: '4321'
      };

      const expectedUser = {
        id: 1,
        name: 'tester2',
        email: 'test@gmail.com',
        password: '1234'
      };
      jest.spyOn(repository, 'findById').mockResolvedValue(expectedUser);
      jest.spyOn(repository, 'updateUsers').mockResolvedValue(expectedUser);

      await service.updateUsers(request);

      expect(repository.findById).toHaveBeenCalledWith({ id: request.id });
      expect(repository.updateUsers).toHaveBeenCalledWith(request);
    });

    it('찾을 수 없는 회원 정보를 수정시', async() => {
      const expectedUser = {
        id: 2,
        name: 'tester2',
        email: 'test@gmail.com',
        password: '1234'
      };

      jest.spyOn(repository, 'findById').mockResolvedValue(null);

      await expect(service.updateUsers(expectedUser)).rejects.toThrowError(NotFoundException,);
      expect(repository.updateUsers).not.toHaveBeenCalled();

    });
  });

});
