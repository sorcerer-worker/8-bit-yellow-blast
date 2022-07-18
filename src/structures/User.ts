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
    get currentHealth(): number {
        return this.data.health.currentHealth
    }
    set currentHealth(amount: number) {
        this.data.health.currentHealth = amount
        if (this.prevent.overload.hp) {
            if (this.currentHealth > this.data.health.maxHealth) {
                this.currentHealth = this.data.health.maxHealth;
            }
            if (this.currentHealth < 0) {
                this.currentHealth = 0
            }
        }
    }
}

export { User, UserData }