var Chat = function Chat() {
    this.rooms = [];
};

Chat.prototype.createRoom = function createRoom(room) {
    this.rooms.push(room);
};

Chat.prototype.destroyRoom = function destroyRoom(room) {
    this.rooms.splice(this.rooms.indexOf(room), 1);
};

var Room = function Room(name) {
    this.name = name || 'noname';
    this.users = [];
};

Room.join = function join(user) {
    this.users.push(user);
};

var User = function User(name) {
    this.name = name;
};

User.generateName = function generateName() {
    return new User('RandomUserName');
};

User.prototype.changeName = function changeName(name) {
    this.name = name;
};

var chat = new Chat();
var room = new Room('random-name');
var user = new User('Don');
var user2 = User.generateName();
chat.createRoom(room);

room.join(user);
room.join(user2);

console.log(chat);