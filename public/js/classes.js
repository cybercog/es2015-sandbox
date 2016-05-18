'use strict';

class Chat
{
    constructor() {
        this.rooms = [];
    }

    createRoom(room) {
        this.rooms.push(room);
    }

    destroyRoom(room) {
        this.rooms.splice(this.rooms.indexOf(room), 1);
    }
}

class Room
{
    constructor(name) {
        this.name = name || 'noname';
        this.users = [];
    }

    join(user) {
        this.users.push(user);
    }
}

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

let chat = new Chat(),
    room = new Room('random-name'),
    user = new User('Don'),
    user2 = User.generateName();

chat.createRoom(room);

room.join(user);
room.join(user2);

console.log(chat);

//chat.destroyRoom(room);
//console.log(chat);