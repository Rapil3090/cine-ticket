import { Exclude, Expose } from "class-transformer";

export class UserEntity {

    @Exclude() private _id: number;
    @Exclude() private _name: string;
    @Exclude() private _email: string;
    @Exclude() private _password: string;

    @Expose()
    get id(): number{
        return this.id;
    }

    protected set id(value: number) {
        this._id = value;
    }

    @Expose()
    get name(): string {
        return this.name;
    }

    protected set name(value: string) {
        this._name = value;
    }

    @Expose()
    get email(): string {
        return this.email;
    }

    protected set email(value: string) {
        this._email = value;
    }

    @Expose()
    get password(): string {
        return this.password;
    }

    protected set password(value: string) {
        this._password = value;
    }
    


}