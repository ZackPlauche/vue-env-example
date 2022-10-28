<template>
  <div>
    <h1>Authed!</h1>
  </div>
</template>

<script setup>
import { useFetchClient } from '@/composables/client.js'

const client = useFetchClient()
client.options.headers.Authorization = 'Token abcd' 
console.log(client, client.options.headers)
</script>