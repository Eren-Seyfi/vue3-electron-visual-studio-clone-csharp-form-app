<template>
  <div class="flex items-center w-screen h-screen ">
    <div class="flex justify-around items-start w-full">
      <FinalProjectFiles v-if="projectFiles" class="bg-red-500 w-4/6" />
      <div class="grid grid-cols-1 gap-2 w-full w-1/6">
        <!-- Sağ taraftaki yeni proje oluşturma butonu -->
        <ProjectButton header="test başlık 1" description="test içerik doldurma 1"
          ><LibraryAdd size="24"
        /></ProjectButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import FinalProjectFiles from '../components/Home/FinalProjectFiles.vue'
import LibraryAdd from '../components/Icons/LibraryAdd.vue'
import ProjectButton from '../components/Home/Button/ProjectButton.vue'
import { ref } from 'vue'

const projectFiles = ref(true)
</script>
