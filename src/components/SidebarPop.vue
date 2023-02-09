<template>
    <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Approvals" value="approvals" href="#/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Documents" value="documents" href="#/document"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Login" value="starred" href="#/login"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>