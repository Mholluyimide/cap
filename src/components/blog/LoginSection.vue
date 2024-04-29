<template>
     <form @submit.prevent="onLogin">
        <div
        class="flex justify-center items-center">

        <div class="h-auto w-96 justify-center items-center bg-gray-500 mt-20 mb-24 space-y-5">


            <div class="flex justify-center items-center text-black pt-12">
                <h1 class="flex text-3xl font-bold overflow-hidden ">
                    <font-awesome-icon :icon="['fas', 'user']" />Login</h1>
            </div>

            <div class="text-xl justify-center items-center flex flex-col text-gray-800">
                    <p class="flex">I don't have an account, <router-link class="text-gray-800" :to="{name: 'signup'} ">Register</router-link></p>
                   
                </div>
            <div class="flex flex-col justify-center items-center space-y-3 text-black pb">

                <label class="text-xl font-bold" for="email">Email</label>
               <input type="email" name="" id="Input_email" placeholder="Email" v-model="login.email">

                <label class="text-xl font-bold" for="password">Password</label>
                <input type="password" name="" id="Input_password" placeholder="Password" v-model="login.password">

                <div class="flex pt-5 justify-center items-center pb-10 flex-col space-y-3">
                    <button class="h-10 w-24 flex bg-black text-white text-xl 
                    justify-center items-center" id="Login_User">Login</button>
                    <a href="" class="flex font-bold hover:text-gray-800">Forget Password ?</a>

                </div>

                
            </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseInit';
import router from '../../router';

const login = reactive({
    email: '',
    password: ''
})

const onLogin = () => {
   signInWithEmailAndPassword(auth, login.email, login.password)
   .then(() => {
    updateProfile (auth.currentUser, {
          displayName:login.email
        })
   })
   .then((login)=> {
    console.log(auth.currentUser.displayName);
    router.push({name:'uploadproduct'})
   })

   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}

</script>