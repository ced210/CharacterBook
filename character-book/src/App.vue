<template>
  <div id="app">
    <v-app>
      <v-app-bar
        id="nav"
        color="primary"
        dark
        app
        absolute
        collapse-on-scroll
        scroll-target="#scrolling-techniques-2"
      >
        <v-app-bar-nav-icon @click="drawer = true" />
        <v-toolbar-title v-text="'Character Book'"></v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="primary--text text--secondary"
          >
            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/character-creation">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>face</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Character Creation</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/about">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>info</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto mt-5"
        max-height="600"
      >
        <v-container style="height: 1500px;" class="mt-5">
          <router-view />
        </v-container>
      </v-sheet>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: false,
    };
  },
};
</script>
