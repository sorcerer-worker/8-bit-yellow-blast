import { User } from "../structures/User";

type UserId = number;

function isUniqueUser(id: UserId,user: User): Boolean {
    return id !== user.data.id;
    // In the future likely user will have its type changed to an array<UserData>
}

export { isUniqueUser };