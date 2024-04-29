<template>
    <div class="bg-gray-200">
        <div class="flex flex-col"> 

            <div class="flex flex-col justify-center items-center mt-10 space-y-4">

            <img class="w-16 h-16 md:w-24 md:h-24 flex" src="../../assets/logo/redeem pix.png" alt="redeem_logo">

            <p class="flex font-bold text-2xl"> 
                RCCG(CAP)
            </p>

             <p class="flex font-serif">
            Kindly fill in your business detail below...
        </p> 

        </div>

        <div @submit.prevent="onSubmit" id="user_Detail" class="flex flex-col justify-center items-center mb-10 mt-10 ">
            <form>

            <div class="flex flex-col mt-4">
                <label class="text-gray-700 font-semibold mb-1" for="Surnamename">Surname Name:</label>
                <input class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" type="text" name="surnameName" id="surname_Name" v-model="userDetail.surname_Name">

            </div>

            <div class="flex flex-col mt-4">

                <label class="text-gray-700 font-semibold mb-1" for="firstname">First Name:</label>
                <input class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" type="text" name="firstName" id="first_Name" v-model="userDetail.first_Name">
                
            </div>

            <div class="flex flex-col mt-4">

                <label class="text-gray-700 font-semibold mb-1" for="businessname">Business Name:</label>
                <input class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" type="text" name="businessName" id="business_Name" v-model="userDetail.business_Name">

            </div>

            
            <div class="flex flex-col mt-4">
                <label class="text-gray-700 font-semibold mb-1" for="businessemail">Business Email:</label>
                <input class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" type="email" name="businessEmail"
                 id="business_Email" v-model="userDetail.business_Email">

</div>
        
        <div class="flex flex-col mt-4">

                <label class="text-gray-700 font-semibold mb-1" for="businessaddress">Office Address:</label>
                <textarea class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline overflow-hidden" name="businessAddress"
                 id="business_Address" cols="20" rows="3" v-model="userDetail.business_Address"></textarea>

            </div>


            <div class="flex flex-col mt-4">

                <label class="text-gray-700 font-semibold mb-1" for="businessphoneno">Business Phone No:</label>

                <input class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline" type="tel" name="businessPhoneNo"
                 id="business_PhoneNo" v-model="userDetail.business_PhoneNo">

            </div>

            <div class="flex flex-col mt-4">
                <label class="text-gray-700 font-semibold mb-1" for="homeaddress">Product:</label>

                <textarea class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline overflow-hidden" name="businessProduct"
                 id="business_Product" cols="20" rows="3" v-model="userDetail.business_Product"></textarea>

            </div>

            <div class="flex flex-col mt-4">
                <label class="text-gray-700 font-semibold mb-1" for="homeaddress">Home Address:</label>

                <textarea class="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline overflow-hidden" name="homeAddress"
                 id="home_Address" cols="20" rows="3" v-model="userDetail.home_Address"></textarea>

            </div>

            <div class="flex flex-col mt-4 ">
                <button class="shadow bg-gray-600 hover:bg-gray-400 focus:shadow-outline focus:outline-none
                 text-white font-bold py-2 px-4 rounded" id="user_submit_btn" type="submit">
        Submit
      </button>
            </div>
        </form>
           </div>
        </div>

        <button class="h-8 w-8 flex justify-center items-center shadow bg-gray-600 hover:bg-gray-400 focus:shadow-outline focus:outline-none
                 text-white font-bold py-2 px-4 rounded" id="user_submit_btn" type="submit">
        Logout
      </button>
    </div>
</template>

<script setup>
import { reactive, ref  } from 'vue';
import { collection, doc, addDoc} from 'firebase/firestore';
import { storage } from '../../firebase/firebaseInit.js';
import { db } from '../../firebase/firebaseInit.js';
import router from '../../router/index.js';


const userDetail = reactive({
    surname_Name: ' ',
    first_Name: ' ',
    business_Name: ' ',
    business_Email: ' ',
    business_Address: ' ',
    business_PhoneNo: ' ',
    business_Product: [' '],
    home_Address: ' ' 
})

const userInfo = userDetail

const colRef =collection(db, 'User')

const onSubmit = () => {
    addDoc(colRef, { 
    surname_Name: userDetail.surname_Name,
    first_Name: userDetail.first_Name,
    business_Name: userDetail.business_Name,
    business_Email: userDetail.business_Email,
    business_Address: userDetail.business_Address,
    business_PhoneNo: userDetail.business_PhoneNo,
    business_Product: userDetail.business_Product,
    home_Address: userDetail.home_Address

    })
     // .then(() => {
         // userDetail.reset()
         //  })

    router.push({name:'login'})
}
</script>