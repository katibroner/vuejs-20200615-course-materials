<template>
  <div>{{ meetup.description }}</div>
</template>

<script>
export default {
  name: 'MeetupDescriptionPage',

  props: {
    meetup: Object,
  },
};
</script>

<style scoped></style>
