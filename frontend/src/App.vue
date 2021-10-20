<template>
    <div id="app">
        <header class="navbar navbar-expand-lg navbar-dark bg-primary">
          <router-link to="/">
            <h1 class="navbar-brand">Wannahack.in</h1>
          </router-link>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


