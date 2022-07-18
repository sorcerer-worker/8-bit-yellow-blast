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
    get currentHealth() {
        return this.data.health.currentHealth
    }
    set currentHealth(amount: number) {
        this.data.health.currentHealth = amount
    }
}

export { User, UserData }