<template>
  <div
    class="grid grid-rows-2 grid-flow-col w-64 h-16 hover:bg-[#221d46] text-white border transition-colors bg-slate-500 rounded"
  >
    <div class="row-span-3">
      <div class=" grid justify-center items-center w-full h-full"><slot /></div>
    </div>
    <div class="col-span-2 py-1 font-bold text-lg">{{ props.header }}</div>
    <div class="row-span-2 col-span-2 text-xs">{{ props.description }}</div>
  </div>
</template>
<script setup>
const props = defineProps(['header', 'description'])
</script>
