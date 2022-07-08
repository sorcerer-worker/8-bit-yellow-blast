type UserData = {
    [key: string]: any,
    name: string,
    id: number
};

class User {

    data: UserData;

    constructor(data: UserData) {
        this.data = data;
    }
    get name(): string{
        return this.data.name;
    }
}

export { User, UserData }