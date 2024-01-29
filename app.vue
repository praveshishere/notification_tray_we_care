<template>
  <div class="h-screen bg-gray-100 ">
      <button
        type="button"
        class="bg-black px-3 py-2 text-white rounded-md m-4"
        @click="show = !show"
      >
        Show {{ show}}
      </button>
    <div class="flex justify-center items-center">

      <Tray
        v-if="show"
        :notifications="notifications"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import type { Notification } from "@/types/global"

const show = ref(false);

const itemsArray = [
  {
    message: "Scheduled maintenance on 5th Feb",
    subject: "System Maintenance",
    time: 1706179896935,
    claimNumber: "4000005678",
    type: "System",
  },
  {
    message: "Emergency update on 10th Jan",
    subject: "Critical Update",
    time: 1706179897935,
    claimNumber: "4000009876",
    type: "Software",
  },
  {
    message: "Unplanned outage on 15th Jan",
    subject: "Service Disruption",
    time: 1706179898935,
    claimNumber: "4000002345",
    type: "Service",
  },
  {
    message: "Expected downtime from 8th Feb to 12th Feb",
    subject: "System Downtime",
    time: 1706179899935,
    claimNumber: "4000008765",
    type: "System",
  },
  {
    message: "Security patch deployment on 20th Jan",
    subject: "Security Update",
    time: 1706179900935,
    claimNumber: "4000005432",
    type: "Software",
  },
  {
    message: "Network upgrade on 25th Jan",
    subject: "Network Enhancement",
    time: 1706179901935,
    claimNumber: "4000007890",
    type: "Network",
  },
  {
    message: "Service interruption on 30th Jan",
    subject: "Service Interruption",
    time: 1706179902935,
    claimNumber: "4000006543",
    type: "Service",
  },
  {
    message: "System performance optimization on 3rd Feb",
    subject: "Performance Optimization",
    time: 1706179903935,
    claimNumber: "4000003210",
    type: "System",
  },
  {
    message: "Database maintenance on 7th Feb",
    subject: "Database Maintenance",
    time: 1706179904935,
    claimNumber: "4000000987",
    type: "Database",
  },
  {
    message: "Software bug fixes on 1st Feb",
    subject: "Bug Fixes",
    time: 1706179905935,
    claimNumber: "4000007654",
    type: "Software",
  },
];

const notifications = ref<Notification[]>([

]);

let start = 1706179902935;


notifications.value = itemsArray.map((item, idx) => {
  start -= 80000000;
  return {
    ...item,
    id: `${idx}`,
    time: start,
    isRead: false,
  }
})

</script>
