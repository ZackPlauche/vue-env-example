<template>
  <div>
    <h1>Home</h1>
    <p>Check your developer console and see the global <i>FetchClient</i> object with a "baseURL" that came from an environment variable in Vite.</p>
    <p>This is a Vite + Vue project, but <b>I'm trying to build this same functionality in Nuxt 3.</b></p>
  </div>
</template>

<script setup>
import { useFetchClient } from '@/composables/client.js'

const client = useFetchClient()
console.log(client, client.options.headers)

</script>