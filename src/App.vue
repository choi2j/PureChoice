<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { ref, onMounted } from 'vue'
// @ts-ignore
import { supabase } from './lib/supabaseClient'
</script>