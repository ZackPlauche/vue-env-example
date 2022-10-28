<template>
  <div>
    <nav style="display: flex; gap: 10px;">
      <router-link v-for="route in $router.getRoutes()" :to="{ name: route.name }">{{ route.name }}</router-link>
    </nav>
    <RouterView />
  </div>
</template>