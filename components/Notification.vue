<template>
  <div
    :class="['bg-gray-50 w-96 h-fit rounded-md px-4 pt-4 pb-4 relative flex flex-col justify-between gap-y-6 group relative border-l-4',
            !isRead ? 'border-blue-600' : 'border-gray-400']"
  >
    <!-- <div
      v-if="!isRead"
      class="w-2 h-2 bg-blue-600 rounded-full
      absolute top-2 right-2"
    /> -->
    <div>
      <div class="text-xs flex justify-between items-center">
        <p class="font-bold text-sm text-gray-800"> {{ subject }} </p>
        
        <div class="flex gap-x-2 items-center">

          <p class="text-orange-300 font-medium cursor-pointer group-hover:block hidden" @click="$emit('markAsRead')">
            {{ isRead ? 'Mark as unread' : 'Mark as read' }}
          </p>
          <!-- <div
            v-if="!isRead"
            class="w-2 h-2 bg-blue-600 rounded-full group-hover:hidden block"
          /> -->
        </div>

      </div>
      <p class="text-gray-700 text-base">
        {{ message }}
      </p>
    </div>

    <div class="flex justify-between">

      <div class="h-fit flex items-center">
        <p class="text-xs text-sky-700 font-bold"> {{ claimNumber }} </p>
      </div>

      <div class="h-fit flex items-center">
        <p class="text-sm text-gray-500"> {{ timeToDisplay }} | {{ type }} </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  claimNumber: {
    type: String,
    default: "",
  },
  isRead: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['markAsRead']);


const timeToDisplay = computed(() => {
  const d = new Date(props.time);
  return d.toDateString();
})

</script>