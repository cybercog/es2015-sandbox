'use strict';

import Chat from './chat';
import Room from './room';
import User from './user';

let chat = new Chat(),
    room = new Room('random-name'),
    user = new User('Don'),
    user2 = User.generateName();

chat.createRoom(room);

room.join(user);
room.join(user2);

console.log(chat);
