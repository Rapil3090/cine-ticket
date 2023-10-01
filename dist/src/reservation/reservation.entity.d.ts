export declare class ReservationEntity {
    private _id;
    private _userId;
    private _movieId;
    private _reservationDate;
    get id(): number;
    protected set id(value: number);
    get userId(): number;
    protected set userId(value: number);
    get movieId(): number;
    protected set movieId(value: number);
    get reservationDate(): Date;
    protected set reservationDate(value: Date);
}
