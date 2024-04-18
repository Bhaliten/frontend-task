import {User} from "./user";

export class SearchUsersResponse {
    private _total: number;
    private _userList: User[];


    constructor(total: number, userList: User[]) {
        this._total = total;
        this._userList = userList;
    }


    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }

    get userList(): User[] {
        return this._userList;
    }

    set userList(value: User[]) {
        this._userList = value;
    }
}
