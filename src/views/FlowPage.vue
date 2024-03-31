<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container" v-if="flowNum < 3">
                <div class="content" v-if="flowNum == 0">
                    <img src="/magnifyer.svg" alt="" />
                    <p class="desc">그동안 영양성분을 직접 찾아보면서<br />제품을 고르느라 힘드셨다고요?</p>
                </div>
                <div class="content" v-else-if="flowNum == 1">
                    <img src="/fileplus.svg" alt="" />
                    <p class="desc">여러분이 피해야하는 음식 정보를<br />쉽고 간편하게 입력해요!</p>
                </div>
                <div class="content" v-else-if="flowNum == 2">
                    <img src="/bluecheck.svg" alt="" />
                    <p class="desc">한눈에! 편하고 간편하게<br />퓨어초이스가 대신 알려줄게요!</p>
                </div>
                <ion-button expand="block" @click="next()">다음</ion-button>
            </div>
            <div class="container" v-else-if="flowNum == 3">
                <div class="content">
                    <img src="/logo.svg" alt="" />
                    <p class="desc">퓨어초이스에서 시작해봐요!</p>
                </div>
                <ion-button expand="block" @click="next()">
                    <a href="/login">로그인</a>
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonImg, IonPage, IonTitle, IonButton, IonRouterOutlet } from "@ionic/vue";
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
        let flowNum = ref(0);
        function next() {
            flowNum.value++;
        }
        return {
            flowNum,
            next,
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
    height: 100%;
    width: 100%;
}

.content img {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    height: fit-content;
    width: fit-content;
    margin-top: auto;
}

.content .desc {
    font-weight: 700;
    font-size: 1.125rem;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
