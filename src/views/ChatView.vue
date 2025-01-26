<template>
  <div class="chat">
    <div class="header">
      <button class='goBack'>Go back</button>
      <h1>{{ route.params.id }}</h1>
    </div>
    <div class="messages">
      <div v-for="message in state.roomsMessages[route.params.id]">
        <p class="alert" v-if="message.alert">{{ message.alert }}</p>
        <div class="message" v-else-if="message.user!=state.username">
          <img src="/user.png" alt="">
          <div class="message-info">
            <p class="message-user">{{ message.user }}</p>
            <p class="message-message">{{ message.message }}</p>
          </div>
        </div>
        <div class="message" v-else>
          <div class="message-info">
            <p class="message-user">{{ message.user }} (You)</p>
            <p class="message-message">{{ message.message }}</p>
          </div>
          <img src="/user.png" alt="">
        </div>
      </div>
    </div>
    <div class="form">
      <textarea v-model="message" placeholder="Type something..."></textarea><button @click="sendMessage(route.params.id, message); message=''">Send</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { state } from '@/socket';
import {ref} from 'vue'
import { useRoute } from 'vue-router';
import { sendMessage } from '@/socket';
const route = useRoute()
const message = ref("")
</script>
