import { ActionManager } from "../managers/ActionManager";

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

    public data: UserData;
    public actions: ActionManager;
    public prevent: ForceUserPrevent = { // <-- TODO: It could use additional prevention options
        overload: {
            hp: true
        }
    };

    /**
     * Builds a new `User` using `UserData`.
     * @param {UserData} data  Object based data about the `User`
     */
    constructor(data: UserData) {
        this.data = data;
        this.actions = new ActionManager([]); // <-- Planning to pass this information through this.data
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