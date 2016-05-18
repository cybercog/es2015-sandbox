'use strict';

class Room
{
    constructor(name) {
        this.name = name || 'noname';
        this.users = [];
    }

    static join(user) {
        this.users.push(user);
    }
}

export default Room;
