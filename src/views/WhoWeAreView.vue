<template>
 
    <div>
      <!-- <HistorySection :aboutSection="aboutSection">  </HistorySection>

       <MissionSection :aboutSection="aboutSection"> </MissionSection>
        -->
       <!-- <BeliefSection :aboutSection="aboutSection"> </BeliefSection>
 -->

    </div>
  
</template>

<script setup>
import HistorySection from "../components/About/HistorySection.vue";
import BeliefSection from "../components/About/BeliefSection.vue";

import { ref } from "vue";

const aboutSection = ref("history");

const switchAboutSection = (text) => {
  aboutSection.value = text;
};
</script>
