<template>
   <Hello name="Ariel" @sendEvent="show" />
   <Book/>
</template>

<script setup>
import Hello from './components/Hello.vue'
import Book from './components/Book.vue'

function show(msg) {
  alert(msg)
}


</script>

<style >
body {
  background-color: #a9b8b4;
  margin: 20px;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
