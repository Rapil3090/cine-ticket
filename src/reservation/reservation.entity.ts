import { Exclude, Expose } from "class-transformer";

export class ReservationEntity {

    @Exclude() private _id: number;
    @Exclude() private _userId: number;
    @Exclude() private _movieId: number;
    @Exclude() private _reservationDate: Date;

    @Expose()
    get id(): number {
        return this.id;
    }

    protected set id(value: number) {
        this._id = value;
    }

    @Expose()
    get userId(): number {
        return this.userId;
    }

    protected set userId(value: number) {
        this._userId = value;
    }


    @Expose()
    get movieId(): number {
        return this.movieId;
    }

    protected set movieId(value: number) {
        this._movieId = value;
    }

    
    @Expose()
    get reservationDate(): Date {
        return this.reservationDate;
    }

    protected set reservationDate(value: Date) {
        this._reservationDate = value;
    }
}