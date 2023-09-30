import { Expose, Exclude } from "class-transformer";

export class MovieEntity {

    @Exclude() private _id: number;
    @Exclude() private _title: string;
    @Exclude() private _description: string;

    @Expose()
    get id(): number {
        return this.id;
    }

    protected set id(value: number) {
        this._id = value;
    }

    @Expose()
    get title(): string {
        return this.title;
    }

    protected set title(value: string) {
        this._title = value;
    }

    @Expose()
    get description(): string {
        return this.description;
    }

    protected set description(value: string) {
        this._description = value;
    }




}