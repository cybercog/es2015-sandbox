'use strict';

class User
{
    constructor(name) {
        this.name = name;
    }

    static generateName() {
        return new User('RandomUserName');
    }

    changeName(name) {
        this.name = name;
    }
}

export default User;
