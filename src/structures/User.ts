/**
 * Represents the `UserData` type used by `User``.
 */
export type UserData = {
    [key: string]: any,
    name: string,
    id: number
};

export interface ForceUserPrevent {
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
export class User {

    data: UserData;
    prevent: ForceUserPrevent = {
        overload: {
            hp: true
        }
    };

    /**
     * Builds a new `User` using `UserData`.
     * @param {data} UserData  Object based data about the `User`
     */
    constructor(data: UserData) {
        this.data = data;
    }
    /**
     * Returns the `User`'s name property.
     */
    public get name(): string{
        return this.data.name;
    }
    /**
     * Returns the `User`'s currentHealth.
     */
    public get currentHealth(): number {
        return this.data.health.currentHealth
    }
    public set currentHealth(amount: number) {
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