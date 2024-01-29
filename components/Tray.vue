<template>
  <div>
    <div
      class="tx-bg-white w-fit bg-gray-300 p-3 grid grid-cols-1 gap-y-2 max-h-96 overflow-y-auto overflow-x-hidden rounded-lg py-5 shadow-lg"
    >
      <div v-for="notification in notifications" :key="notification.id">
        <Notification
          :title="notification.subject"
          :message="notification.message"
          :type="notification.type"
          :time="notification.time"
          :subject="notification.subject"
          :claim-number="notification.claimNumber"
          :is-read="notification.isRead"
          @mark-as-read="notification.isRead = !notification.isRead"
        />
      </div>
    </div>
    <!-- <div style="width: 100px; height: 100px; background-color: black; border: 2px solid black;">

    </div> -->
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps(({
  notifications: {
    type: Array as PropType<Notification[]>,
    default: () => [],
  }
}))
</script>
