<template>
  <ion-page>
      <ion-content :fullscreen="true">
          <div class="container">
          </div>
      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonImg, IonPage, IonTitle, IonButton } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {
      IonContent,
      IonImg,
      IonPage,
      IonTitle,
      IonButton,
  },
  setup() {
      return {
      };
  },
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}
</style>
