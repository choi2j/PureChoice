<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container" v-if="check == 0">
                <div class="content">
                    <img src="/logo.svg" alt="" />
                    <ion-input placeholder="이름 ex) 홍길동" type="text" v-model="name" @ion-change="valiName" :clear-input="true" id="name"></ion-input>
                    <ion-input expand="block" placeholder="전화번호 ex) 010-1234-5678" type="tel" v-model="phone" @ion-change="valiPhone" :clear-input="true" id="phone"></ion-input>
                </div>
                <div class="button">
                    <p v-if="err">⚠ ️입력해주세요</p>
                    <ion-button expand="block" @click="checkAndNext">로그인</ion-button>
                </div>
            </div>
            <div class="container" v-else-if="check == 1">
                <div class="contentC">
                    <img src="/yellowcheck.svg" alt="" />
                    <p class="desc">{{ name }}님 환영합니다.<br/>회원가입이 완료되었습니다.</p>
                    <ion-button expand="block">
                        <a href="/home">계속</a>
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonImg, IonPage, IonTitle, IonButton, IonInput, IonItem } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Home",
    components: {
        IonContent,
        IonImg,
        IonPage,
        IonTitle,
        IonButton,
        IonInput,
        IonItem,
    },
    setup() {
        let check = ref(0);
        let name = "";
        let phone = "";
        let err = ref(1);
        function checkName(name: any) {
            return name.match(/^[가-힣]{2,4}$/);
        }
        function checkPhone(phone: any) {
            return phone.match(/^\d{3}-\d{3,4}-\d{4}$/);
        }
        function valiName(ev: any) {
            const value = ev.target.value;
            console.log(checkName(value))
        }
        function valiPhone(ev: any) {
            const value = ev.target.value;
            console.log(checkPhone(value))
        }
        function checkAndNext() {
            if (!err.value) {
                check.value += 1;
            }
        }
        return {
            name,
            phone,
            valiName,
            valiPhone,
            err,
            checkAndNext,
            check,
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
    height: 100%;
    width: 100%;
    gap: 0.8rem;
}

.content img {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 3rem;
    margin-bottom: 1.4rem;
}

ion-input {
    --background: var(--pure-gray-200);
    --color: var(--pure-white);
    --placeholder-color: var(--pure-gray-bbb);
    --padding-bottom: 0.6rem;
    --padding-top: 0.6rem;
    --padding-start: 1rem;
    --padding-end: 1rem;
    --border-radius: 10px;
    --highlight-color-focused: none;
}

ion-item {
    --padding-bottom: 0;
    --padding-start: 0;
    --padding-end: 0;
    --inner-padding-end: 0;
    --inner-padding-bottom: 1rem;
    --border-color: #ffffff00;
    --background: none;
}

ion-item:not(.item-label):not(.item-has-modern-input) .sc-ion-input-md-h {
    --padding-start: 1rem;
}

.button p {
    font-family: "Pretendard";
    color: var(--pure-yellow);
    text-align: center;
    padding: 0.5rem;
}

.contentC {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 100%;
}

.contentC img {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    height: fit-content;
    width: fit-content;
    margin-top: auto;
}

.contentC .desc {
    font-weight: 700;
    font-size: 1.125rem;
    height: 40%;
    display: flex;
    justify-content: center;
}

.input-label-placement-start.sc-ion-input-md-h .input-wrapper.sc-ion-input-md {

}
</style>
