<template>
    <div id="app">
      <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
              <div class="container-fluid burger-container">

                <router-link to="/">
                <a class="navbar-brand" href="#">Wannahack.In</a>
                </router-link>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="navbarColor01" style="">
                  <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                      <router-link to="/">
                      <a class="nav-link" href="#">Последние посты
                      </a>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/about">
                      <a class="nav-link" href="#">Обо мне</a>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/contacts">
                      <a class="nav-link" href="#">Контакты</a>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
      </header>
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>



<style>

</style>

