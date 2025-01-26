<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import { state } from '@/socket';
import { RouterLink } from 'vue-router';
</script>

<template>
  <NavbarComponent/>
  <main>
    <RouterLink :to="{name: 'chat', params: {id:chat}}" v-for="chat in state.rooms">
      <h1>{{ chat }}</h1>
      <p v-if="!state.roomsMessages[chat].length">No hay mensajes disponibles</p>
      <p v-else>{{ state.roomsMessages[chat][state.roomsMessages[chat].length-1].alert }}{{ state.roomsMessages[chat][state.roomsMessages[chat].length-1].message }}</p>
    </RouterLink>
  </main>
</template>
