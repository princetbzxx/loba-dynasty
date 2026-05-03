<script setup lang="ts">
import { ref, computed } from 'vue'
import type { TimelineItem } from '@/constants/timelineData'
import { timelineData } from '@/constants/timelineData'

// --- Monday-start helper ---
const getWeekdayMondayStart = (date: Date) => {
  const d = date.getDay()
  return (d + 6) % 7
}

// --- Current month ---
const currentMonth = ref(new Date())

// --- Group entries by date ---
const entriesByDate = computed(() => {
  const map = new Map<string, TimelineItem[]>() // map of ISO date string to entries

  for (const item of timelineData) {
    if (!map.has(item.date)) {
      map.set(item.date, [])
    }
    map.get(item.date)!.push(item)
  }

  return map
})

// --- Calendar grid (42 days, Monday start) ---
const calendarDays = computed(() => {
  const days: Array<{
    date: Date
    day: number
    iso: string
    isCurrentMonth: boolean
    entries: TimelineItem[]
  }> = []

  const year = currentMonth.value.getFullYear()
  const month = currentMonth.value.getMonth()
  const startOfMonth = new Date(year, month, 1)

  const weekday = getWeekdayMondayStart(startOfMonth)
  const gridStart = new Date(year, month, 1 - weekday)

  for (let i = 0; i < 42; i++) {
    const current = new Date(
      gridStart.getFullYear(),
      gridStart.getMonth(),
      gridStart.getDate() + i
    )

   const iso = [
  current.getFullYear(),
  String(current.getMonth() + 1).padStart(2, '0'),
  String(current.getDate()).padStart(2, '0')
].join('-')

    days.push({
      date: current,
      day: current.getDate(),
      iso,
      isCurrentMonth: current.getMonth() === month,
      entries: entriesByDate.value.get(iso) || []
    })
  }

  return days
})

// --- Weekday labels ---
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// --- Month label ---
const monthLabel = computed(() => {
  const date = currentMonth.value
  return date.toLocaleString('en-GB', { month: 'long', year: 'numeric' })
})

// --- Selected date ---
const sortedData = computed(() =>
  [...timelineData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
)

const selectedDate = ref(sortedData.value[0]?.date || '')

const selectedItems = computed(() => // get entries for selected date
  entriesByDate.value.get(selectedDate.value) || []
)

const selectDate = (iso: string) => { // when a day is clicked
  selectedDate.value = iso
}

// --- Selected date label ---
const selectedDateLabel = computed(() => {
  const [year, month, day] = selectedDate.value.split('-').map(Number)
  const d = new Date(year, month - 1, day)

  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})


// --- Month navigation ---
const prevMonth = () => {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() - 1,
    1
  )
}

const nextMonth = () => {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() + 1,
    1
  )
}

// --- Highlights (optional) ---
const milestoneItems = computed(() =>
  timelineData.slice(-3)
)

const monthLabelFromDate = (iso: string) => {
  const d = new Date(iso)
  return d.toLocaleString('en-GB', { month: 'short', year: 'numeric' })
}
</script>


<template>
  <div class="log-page min-h-screen" style="background-color: var(--color-primary-light); color: var(--color-gray-dark);">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
        <div>
          <p class="text-sm uppercase tracking-[0.3em] mb-2" style="color: var(--color-text-secondary)">Journey Log</p>
          <h1 class="text-4xl font-bold tracking-tight">Daily progress calendar</h1>
          <p class="mt-3 max-w-2xl text-sm" style="color: var(--color-gray-dark)">Track my progress with date-based notes, jump into highlights and achievements from the last eight months.</p>
        </div>

        <div class="inline-flex items-center gap-2 rounded-full border-none shadow-lg px-3 py-2" style="background-color: var(--color-white); border-color: var(--color-gray-light);">
          <button
            type="button"
            @click="prevMonth"
            class="rounded-full px-3 py-2 text-sm font-semibold transition calendar-button"
            style="color: var(--color-gray-dark);"
          >
            Prev
          </button>
          <span class="mx-2 text-sm font-semibold" style="color: var(--color-black)">{{ monthLabel }}</span>
          <button
            type="button"
            @click="nextMonth"
            class="rounded-full px-3 py-2 text-sm font-semibold transition calendar-button"
            style="color: var(--color-gray-dark);"
          >
            Next
          </button>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.8fr_1fr] shadow-sm p-5">
        <div>
          <div class="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.25em] mb-3" style="color: var(--color-text-secondary)">
            <div v-for="day in weekdays" :key="day">{{ day }}</div>
          </div>

          <div class="calendar-grid grid grid-cols-7 gap-2">
            <button
              v-for="cell in calendarDays"
              :key="cell.iso"
              type="button"
              class="day-card shimmer rounded-3xl border p-3 text-left transition"
              :class="{ 'opacity-50': !cell.isCurrentMonth }"
              :style="{
                backgroundColor: cell.iso === selectedDate ? 'var(--color-white)' : 'transparent',
                borderColor: 'var(--color-gray-light)'
              }"
              @click="selectDate(cell.iso)"
            >
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold" style="color: var(--color-black)">{{ cell.day }}</span>
                <span
                  v-if="cell.entries.length"
                  class="inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em]"
                  style="background-color: var(--color-black); color: var(--color-white);"
                >
                  {{ cell.entries.length }}
                </span>
              </div>
              <div class="mt-3 flex flex-wrap gap-1">
                <span
                  v-for="entry in cell.entries.slice(0, 3)"
                  :key="entry.title"
                  class="h-2.5 w-2.5 rounded-full"
                  style="background-color: var(--color-black);"
                ></span>
              </div>
            </button>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="rounded-4xl border hover:scale-105 transition duration-300 p-6 shadow-sm" style="background-color: var(--color-white); border-color: var(--color-gray-light);">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.35em]" style="color: var(--color-text-secondary)">Selected day</p>
                <h2 class="mt-2 text-xl font-semibold" style="color: var(--color-black)">{{ selectedDateLabel }}</h2>
              </div>
            </div>

            <div class="mt-6 space-y-4">
              <template v-if="selectedItems.length">
                <article
                  v-for="item in selectedItems"
                  :key="item.title"
                  class="rounded-3xl border p-5"
                  style="background-color: var(--color-white); border-color: var(--color-gray-light);"
                >
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <h3 class="text-lg font-semibold" style="color: var(--color-black)">{{ item.title }}</h3>
                    <span class="text-xs uppercase tracking-[0.2em]" style="color: var(--color-gray-dark)">{{ item.tags.join(' · ') }}</span>
                  </div>
                  <p class="mt-3 text-sm leading-6" style="color: var(--color-gray-dark)">{{ item.description }}</p>
                </article>
              </template>
              <p v-else class="text-sm leading-6" style="color: var(--color-gray-dark)">No entries for this day. Click another day on the calendar to review progress or highlights.</p>
            </div>
          </div>

          <div class="rounded-4xl border hover:scale-105 transition duration-300 p-6 shadow-sm" style="background-color: var(--color-bg-card); border-color: var(--color-gray-light); color: var(--color-white);">
            <p class="text-sm uppercase tracking-[0.35em]" style="color: var(--color-text-secondary)">Recent highlights</p>
            <div class="mt-6 space-y-4">
              <article v-for="item in milestoneItems" :key="item.title" class="space-y-2">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-sm font-semibold" style="color: var(--color-white)">{{ item.title }}</p>
                  <span class="text-[0.65rem] uppercase tracking-[0.2em]" style="color: var(--color-text-secondary)">{{ monthLabelFromDate(item.date) }}</span>
                </div>
                <p class="text-sm leading-6" style="color: var(--color-primary-light)">{{ item.description }}</p>
              </article>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped>
.day-card {
  min-height: 110px;
}

.day-card:hover {
  background-color: var(--color-primary-light);
  border-color: var(--color-gray-dark);
}

.calendar-button:hover {
  background-color: var(--color-primary-light);
}

@media (max-width: 1024px) {
  .calendar-grid {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

}

@media (max-width: 768px) {
  .day-card {
    padding: 0.4rem;
    min-height: 70px;
  }

  .calendar-grid {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  /* Reduce the huge tracking on mobile */
  .log-page :deep(.tracking-

\[0\.3em\]

),
  .log-page :deep(.tracking-

\[0\.35em\]

),
  .log-page :deep(.tracking-

\[0\.25em\]

),
  .log-page :deep(.tracking-

\[0\.2em\]

) {
    letter-spacing: 0.05em;
  }
}

</style>
