import { io } from "socket.io-client";
import { reactive } from "vue";

export const state = reactive({
  connected: false,
  waitingAuth: true,
  username: "",
  rooms: [],
  roomsMessages: {}
});

const URL = "http://localhost:5000";

export const socket = io(URL, {autoConnect: false});

export const login = (username) => {
  state.username = username;
  socket.connect();
  socket.emit("login", username);
}

export const sendMessage = (room, message) => {
  socket.emit('message', {room: room, message: message})
}

export const createChat = (name, password) => {
  state.roomsMessages[name]= new Array();
  socket.emit("create_room", {name, password});
}

export const joinChat = (name, password) => {
  socket.emit("join", {name:name, password:password});
  state.roomsMessages[name]= new Array();
}

socket.on('joinRoom', (room)=>{
  state.rooms.push(room)
  state.roomsMessages[room]= new Array();
})

socket.on('login_success', () => {
  state.waitingAuth = false;
  state.connected = true;
}); 

socket.on("disconnect", () => {
  state.connected = false;
  state.waitingAuth = false;
});

socket.on('notification', (message)=>{
  window.alert(message)
})

socket.on("room_incoming", (data)=>{
  let room = data[0]
  let toAdd = data[1]
  state.roomsMessages[room].push(toAdd)
  console.log(state.roomsMessages[room])
})