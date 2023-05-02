<template>
<v-app id="inspire">
    <template v-if="!$route.path.includes('login')">
    <v-navigation-drawer v-model="drawer">
            <v-sheet
            color="grey-lighten-4"
            class="pa-4"
        >
            <v-avatar
            class="mb-4"
            color="grey-darken-1"
            size="64"
            ></v-avatar>

            <div>{{ $store.getters.loadUserEmail }}</div>
            <div>{{ $store.getters.loadUserRole }}</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.url"
            >
            <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
        <v-btn @click="logout">logout</v-btn>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Icarus</v-toolbar-title>

      <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
    </template>
    <v-main>
            <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import { AdminSideMenu } from './navigation/admin-menu'
import { UserSideMenu } from './navigation/user-menu'
  export default {
    data() { 
        return {
            drawer: null,
            items:[],
            // links: [
            // ['mdi-home', 'Home', '/home'],
            //     ['mdi-inbox-arrow-down', 'Pre Land Survey', '/prelandsurvey'],
            //     ['mdi-folder', 'Projects', '/projects']
            // ],
         }
    },
    mounted(){
     this.menuItems()
    },
    methods:{
      menuItems() {
      const user = this.$store.getters.loadUserRole

      if (user) {
        if (user === 'Admin') {
          return this.items = AdminSideMenu         
          console.log(this.items)
        }

        if (user === 'User') {

            return this.items = UserSideMenu
            console.log(this.items)
        }

      }
    },
    logout(){
        localStorage.removeItem("user-token");
        localStorage.removeItem("user-email");
        localStorage.removeItem("user-role");
        this.$store.commit('logout')
        this.$router.push("/login")
      }
    }
  }
</script>