import { Test, TestingModule } from "@nestjs/testing";
import { MovieRepository } from "./movies.repository";
import { MoviesService } from "./movies.service"
import exp from "constants";
import { CreateMovieRequest } from "./dto/create-movie.request";
import { Status } from "./entity/status";
import { UpdateMovieRequest } from "./dto/update-movie.request";

describe('MoviesService', () => {
    let service: MoviesService;
    let repository: MovieRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService, {
                provide: MovieRepository,
                useValue: {
                    findAllMovies: jest.fn(),
                    findById: jest.fn(),
                    createMovies: jest.fn(),
                    deleteMovies: jest.fn(),
                    updateMovies: jest.fn(),
                },
            }],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
        repository = module.get<MovieRepository>(MovieRepository);
    });

    describe('getMovies', () => {
        it('영화 전체조회', async() => {
            const mockMovies = [ {id: 1, title: '영화 제목', description: '영화 설명', status: 'public'}];

            jest.spyOn(repository, 'findAllMovies').mockResolvedValue(mockMovies);

            const result = await service.getMovies();

            expect(repository.findAllMovies).toHaveBeenCalled();
            expect(result).toEqual(mockMovies);
        });
    });

    describe('getMoviesById', () => {
        it('영화 조회', async() => {
            const expectedMovie = {
                id: 1,
                title: '영화 제목',
                description: '영화 설명',
                status: 'public',
            };

            jest.spyOn(repository, 'findById').mockResolvedValue(expectedMovie);

            const result = await service.getMoviesById(expectedMovie.id);

            expect(result).toEqual(expectedMovie);
        });
    });

    describe('crateMovie', () => {
        it('영화 등록', async() => {
            const request: CreateMovieRequest = {
                title: '영화 제목',
                description: '영화 설명',
                status: Status.PUBLIC,
            };

            const expectedMovie = {
                id: 1,
                title: '영화 제목',
                description: '영화 설명',
                status: Status.PUBLIC,
            };

            jest.spyOn(repository, 'createMovies').mockResolvedValue(expectedMovie);

            const result = await service.createMovies(request);
            expect(result).toEqual(expectedMovie);
            expect(repository.createMovies).toHaveBeenCalledWith(request);
        });
    });

    describe('dleleteMovie', () => {
        it('영화 삭제', async() => {

            const movieId = 1;

            jest.spyOn(repository, 'findById').mockResolvedValue({ id: 1, title: '영화 제목', description: '영화 설명', status: 'public'});

            await service.deleteMovies(movieId);

            expect(repository.deleteMovies).toHaveBeenCalledWith(movieId);
        });
    });

    describe('updateMoies', () => {
        it('영화 정보수정', async() => {
            
            const request: UpdateMovieRequest = {
                id: 1,
                title: '영화 제목',
                description: '영화 설명',
                status: 'public',
            };

            const expectedMovie = {
                id: 1,
                title: '수정된 영화 제목',
                description: '수정된 영화 설명',
                status: 'private',
            };

            jest.spyOn(repository, 'findById').mockResolvedValue(expectedMovie);
            jest.spyOn(repository, 'updateMovies').mockResolvedValue(expectedMovie);

            await service.updateMoviesStatus(request);

            expect(repository.findById).toHaveBeenCalledWith({ id: request.id});
            expect(repository.updateMovies).toHaveBeenCalledWith(request);
        });
    })




})