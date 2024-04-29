<template>
    <div class="space-y-7 text-xl mt-5">
      <ul v-for="(user, index) in users" :key="index">
        Surname: {{ user.surname_Name }} -
        Firstname: {{ user.first_Name }} -
        Business Name: {{ user.business_Name }} -
        Business Address: {{ user.business_Address }} -
        Business Email: {{ user.business_Email }} -
        Business PhoneNo: {{ user.business_PhoneNo }} -
        Product: {{ user.business_Product }} -
        Home Address: {{ user.home_Address }} 

      </ul>
    </div>
  
    <div class="mt-10 flex flex-col justify-center items-center space-y-4">

        <p class="uppercase font-mono font-bold text-xl md:text-2xl">RCCG(CAP) Product Services</p>

        <p class="md:text-xl font-semibold">Kindly upload your product services to Customer</p>
    </div>

    <div class="mt-10 flex flex-col justify-center items-center">

      <input type="file" ref="fileInput" accept="image/*" multiple @change="handleFileInputChange">
  
      <div class="mt-8 flex flex-row" style="max-width: 200px;" v-if="imagePreviews.length > 0">

        <div v-for="(preview, index) in imagePreviews" :key="index">

          <img :src="preview" alt="Image Preview" 
          class="max-w-10">

        </div>
      </div>
      <button @click="uploadImage" class="m-6 w-20 h-14 bg-black flex flex-col text-white items-center
      uppercase justify-center focus:border-none">Upload</button>
    </div>
    <div>
      <button @click="logOut" class="flex justify-center items-center h-8 w-16" type="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import { collection, doc, getDocs, onSnapshot } from "firebase/firestore"; 
  import { storage } from '../../firebase/firebaseInit.js';
  import { db } from '../../firebase/firebaseInit.js';
  import router from '../../router/index.js'
  import { auth } from '../../firebase/firebaseInit.js';
  import { signOut } from 'firebase/auth';
  

const users = ref([])

const fetchUsers = async () => {
  try {
    const colRef = collection(db, 'User');
    
    const querySnapshot = await getDocs(colRef);
    let fetchedUsers = [];
    querySnapshot.forEach((doc) => {
      fetchedUsers.push({ ...doc.data(), id: doc.id });
    });
    users.value = fetchedUsers;
    
  }
  catch(error) {
    console.error('error fetching users:', error)
  }
}
onMounted(fetchUsers)



const logOut = () => {
 signOut(auth)
 .then(() => {
  console.log(auth.currentUser.displayName + ' ' + 'logged out')
 })
 .then(() => {
  console.log(auth.currentUser.displayName + ' ' + 'logged out')
 })
 router.push({name:'login'})
}



  const fileInput = ref(null); 
  const imagePreviews = ref([]); 
  
  const handleFileInputChange = () => {
    const files = fileInput.value.files; 
    imagePreviews.value = []; 
  
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      const file = files[i];

      reader.readAsDataURL(file);
      reader.onload = () => {
    
        imagePreviews.value.push(reader.result);
      };
    }
  };
  const uploadImage = () => {
    console.log(docSnap.data())
    router.push({name: 'getuserinfo'})
  }
   
  </script>


