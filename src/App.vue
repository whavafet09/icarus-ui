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

            <div>john@google.com</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
            <v-list-item
            v-for="[icon, text, url] in links"
            :key="icon"
            link
            :to="url"
            >
            <template v-slot:prepend>
                <v-icon>{{ icon }}</v-icon>
            </template>

            <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item>
        </v-list>
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
  export default {
    data() { 
        return {
            drawer: null,
            links: [
                ['mdi-home', 'Home', '/home'],
                ['mdi-inbox-arrow-down', 'Pre Land Survey', '/prelandsurvey'],
            ],
         }
    },
  }
</script>