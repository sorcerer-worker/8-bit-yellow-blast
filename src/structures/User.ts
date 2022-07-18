type UserData = {
    [key: string]: any,
    name: string,
    id: number
};

interface ForceUserPrevent {
    overload: {
        hp: boolean
    }
}

class User {

    data: UserData;
    prevent: ForceUserPrevent = {
        overload: {
            hp: true
        }
    };

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