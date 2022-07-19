type UserData = {
    [key: string]: any,
    name: string,
    id: number
};


/**
 * .
 */
interface ForceUserPrevent {
    /**
     * Prevents forms of overload.
     */
    overload: {
        /**
         * Represents Health.
         */
        hp: boolean
    }
}

/**
 * Represents a `User` using the `BattleManager`.
 */
class User {

    data: UserData;
    prevent: ForceUserPrevent = {
        overload: {
            hp: true
        }
    };

    /**
     * Builds a new `User` using `UserData`.
     */
    constructor(data: UserData) {
        this.data = data;
    }
    /**
     * Returns the `User`'s name property.
     */
    get name(): string{
        return this.data.name;
    }
    /**
     * Returns the `User`'s currentHealth.
     */
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