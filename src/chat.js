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

export default Chat;
