<template>
  <div>
    {{ meetup.agenda.length }}
  </div>
</template>

<script>
export default {
  name: 'MeetupAgenda',

  props: {
    meetup: Object,
  },
};
</script>

<style scoped></style>
