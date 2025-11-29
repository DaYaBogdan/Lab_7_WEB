<script setup></script>

<template>
  <div class="menu" id="nav">
    <RouterLink :to="{ name: 'Home' }"><h3>Home</h3></RouterLink>
    <RouterLink :to="{ name: 'About' }"><h3>About</h3></RouterLink>
    <RouterLink :to="{ name: 'Album' }"><h3>Album</h3></RouterLink>
    <RouterLink :to="{ name: 'Contacts' }"><h3>Contacts</h3></RouterLink>
    <RouterLink :to="{ name: 'History' }"><h3>History</h3></RouterLink>
  </div>
  <div class="strip" id="mainInfo">
    <RouterView />
  </div>
</template>

<style scoped></style>
