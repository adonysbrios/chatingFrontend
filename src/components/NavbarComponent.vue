<template>

  <nav>
    <p v-if="state.connected">{{ state.username }}</p>
    <h1 v-else>ChatingApp</h1>
    <div class="links">
      <button class="secondary-button" @click="showCreateChat=!showCreateChat" v-if="state.connected">Create chat</button>
      <button v-if="state.connected" @click="showJoinChat=!showJoinChat">Join chat</button>
      <button v-if="!state.connected" @click="showLogin = !showLogin">Log in</button>
    </div>
  </nav>


  <div v-if="showJoinChat">
    <input v-model="room.id" placeholder="Room identifier" />
    <input type="text" v-model="room.password" placeholder="Room password" />
    <button @click="joinChat(room.id, room.password); showJoinChat=!showJoinChat">Join chat</button>
  </div>

  <div v-if="showCreateChat">
    <input v-model="room.id" placeholder="Room identifier" />
    <input type="text" v-model="room.password" placeholder="Room password" />
    <button @click="createChat(room.id, room.password); showCreateChat=!showCreateChat">Create and join</button>
  </div>

  <div v-if="showLogin && !state.connected">
    <input v-model="username" placeholder="Username" />
    <button @click="login(username)">Connect</button>
  </div>
</template>

<script setup>
import { state, login, createChat, joinChat } from '@/socket';
import { ref, reactive } from 'vue';

const username = ref("")
const showLogin = ref(false)
const showCreateChat = ref(false)
const showJoinChat = ref(false)
const room = reactive({
  id: "",
  password: ""
})
</script>