<template>
    <form @submit.prevent="onFollowUp">
    <div class="flex justify-center ">

<div class="h-auto w-80 md:w-96 
bg-gray-500 mt-20 mb-24 flex flex-col justify-center items-center">

    <div class="flex flex-col justify-center items-center py-14">
        <img class="h-24" src="../../assets/logo/redeem pix.png" alt="logo">

        <p class="font-bold text-3xl overflow-hidden flex py-3 text-gray-200">CAP</p>
    </div>

    <div class="flex flex-col justify-center items-center space-y-7 pb-12">
        <input type="text" name="text" id="followup_name" placeholder="Name" v-model="followup.fName">

        <input type="text" name="address" id="followup_address" placeholder="Address" v-model="followup.address">

        <input type="tel" name="telphone" id="followup_phone" placeholder="Phone No" v-model="followup.telphone">

        <input type="date" name="date" id="followup_date" v-model="followup.date">

        <textarea class="overflow-hidden" name="prayer_request" id="followup_request" cols="30" rows="5"
         placeholder="Prayer Request" v-model="followup.request"></textarea>
        
        <button class="h-10 w-24 bg-black text-white ">Submit</button>
    
    </div>
</div>
</div>
</form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const followup = reactive({
    fName: '',
    address: '',
    telphone: '',
    number: '',
    date: ''

})


const onFollowUp = () => {
    if (!followup) {
        alert('fill in your details')
    }

    if (followup) {
        console.log ('followup click', followup)
    }
    
}


</script>