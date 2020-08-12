import { computed, onMounted, ref } from "/vendor/vue.esm-browser.js";
import meetupsData from "../../data/meetups-data";

export function useMeetups(props) {
  const rawMeetups = ref([]);

  const meetups = computed(() =>
    rawMeetups.value.map(meetup => ({
      ...meetup,
      cover: meetup.imageId
        ? `https://course-vue.javascript.ru/api/images/${meetup.imageId}`
        : undefined,
      date: new Date(meetup.date),
      localeDate: new Date(meetup.date).toLocaleString(navigator.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
      })
    }))
  );

  const fetchMeetups = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(meetupsData);
      }, 100);
    });

  onMounted(async () => {
    rawMeetups.value = await fetchMeetups();
  });

  return {
    rawMeetups,
    meetups,
    fetchMeetups
  };
}
