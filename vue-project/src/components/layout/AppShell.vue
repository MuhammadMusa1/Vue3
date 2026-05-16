<template>
  <q-layout view="lHh Lpr lff" class="app-shell" :class="{ 'theme-light': isLight }">
    <q-header class="topbar">
      <q-toolbar class="topbar__inner">
        <q-btn flat round dense icon="menu" class="lt-md" @click="drawerOpen = !drawerOpen" />
        <router-link to="/" class="brand">
          <span class="brand__mark">CS</span>
          <span>
            <strong>CodeSpark</strong>
            <small>AI Academy</small>
          </span>
        </router-link>
        <q-space />
        <div class="topbar__stats gt-xs">
          <span><q-icon name="local_fire_department" /> {{ progress.learner.streak }} дней</span>
          <span><q-icon name="bolt" /> {{ progress.learner.energy }}%</span>
          <span><q-icon name="stars" /> Level {{ progress.learner.level }}</span>
        </div>
        <q-btn flat round :icon="isLight ? 'dark_mode' : 'light_mode'" @click="isLight = !isLight">
          <q-tooltip>Сменить тему</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above :width="280" class="sidebar">
      <div class="sidebar__profile">
        <div class="avatar-glow">{{ initials }}</div>
        <div>
          <strong>{{ progress.learner.name }}</strong>
          <span>{{ progress.learner.role }}</span>
        </div>
      </div>
      <q-list padding class="nav-list">
        <q-item v-for="item in navItems" :key="item.to" clickable :to="item.to" exact>
          <q-item-section avatar><q-icon :name="item.icon" /></q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
      <div class="sidebar__xp">
        <div class="row items-center justify-between">
          <span>До нового уровня</span>
          <strong>{{ progress.levelProgress }}%</strong>
        </div>
        <q-linear-progress rounded size="12px" :value="progress.levelProgress / 100" color="secondary" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <FloatingAssistant />
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import FloatingAssistant from '@/components/ai/FloatingAssistant.vue';
import { useUserProgressStore } from '@/stores/userProgress';

const drawerOpen = ref(false);
const isLight = ref(false);
const progress = useUserProgressStore();

const initials = computed(() => progress.learner.name.slice(0, 2).toUpperCase());

const navItems = [
  { to: '/', icon: 'space_dashboard', label: 'Dashboard' },
  { to: '/learn', icon: 'route', label: 'Roadmap' },
  { to: '/arena', icon: 'sports_esports', label: 'Practice Arena' },
  { to: '/projects', icon: 'deployed_code', label: 'Projects' },
  { to: '/ml-lab', icon: 'hub', label: 'ML Playground' },
  { to: '/teacher', icon: 'query_stats', label: 'Teacher AI' }
];
</script>
