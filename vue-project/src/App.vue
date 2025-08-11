<template>
  <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Приложение для учителя
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>