<template>
    <form @submit.prevent="onSignUp">
        <div class="flex justify-center items-center">
        <div class="h-auto w-96 justify-center items-center bg-gray-500 mt-20 mb-24 space-y-5">

            <div class="flex justify-center items-center text-black pt-12">
                <h1 class="flex text-3xl font-bold overflow-hidden "><font-awesome-icon :icon="[ 'fas', 'user' ]" />Register</h1>
            </div>

             <div class="text-xl justify-center items-center flex flex-col ">
                    <p class="flex">Already have an account, <router-link class="hover" :to="{ name: 'login' }">Login</router-link></p>
                   
                </div>

            <div id="signup" class="flex flex-col justify-center items-center space-y-3 text-black pb">

                <label class="text-xl font-bold" for="name">Username</label>
               <input type="text" name="" id="username" placeholder="Username" v-model="register.username">

                <label class="text-xl font-bold" for="email">Email</label>
               <input type="email" name="" id="email" placeholder="Email" v-model="register.email">

                <label class="text-xl font-bold" for="password">Password</label>
                <input type="password" name="" id="password" placeholder="Password" v-model="register.password">

                <div class="flex pt-5 justify-center items-center pb-10">

                    <button class="h-10 w-24 flex bg-black text-white text-xl 
                    justify-center items-center" id="signup_button" type="submit">Register</button>

                </div>

            </div>
        </div>
    </div>    
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebaseInit.js'
import router from '../../router/index.js'

const register = reactive({
    username: '',
    email: '',
    password: ''
})

const onSignUp = () => {
    createUserWithEmailAndPassword(auth, register.email, register.password)
    .then((cred) => {
        updateProfile(auth.currentUser, {
          displayName:register.username
        })
        .then(() => {
          console.log(auth.currentUser.displayName);
          router.push({name:'userbusiness'})
        })
    })

    .catch((error) => {
        console.error('Error signing up:', error.message);
    });
}

</script>