<template>
  <div>
    <h1>Meetup Page</h1>
    <template v-if="meetup">
      <p>ID: {{ meetup.title }}</p>
      <p><router-link to="/meetups/2">Go to 2</router-link></p>
      <p>
        <button @click="go('meetup-description')">
          Go To Description
        </button>
      </p>
      <p><button @click="go('meetup-agenda')">Agenda</button></p>
      <router-view :meetup="meetup" />
    </template>
  </div>
</template>

<script>
async function fetchMeetup(id) {
  return fetch(`/api/meetups/${id}`).then(res => res.json());
}

export default {
  name: 'MeetupPage',

  data() {
    return {
      meetup: null,
    };
  },

  beforeRouteEnter(to, from, next) {
    fetchMeetup(to.params.meetupId).then(meetup => {
      next(vm => vm.setMeetup(meetup));
    });
  },

  beforeRouteUpdate(to, from, next) {
    if (to.params.meetupId === from.params.meetupId) {
      next();
    } else {
      fetchMeetup(to.params.meetupId).then(meetup => {
        this.setMeetup(meetup);
        next();
      });
    }
  },

  methods: {
    setMeetup(meetup) {
      this.meetup = meetup;
    },

    go(target) {
      this.$router.push({ name: target });
    },
  },
};
</script>

<style scoped></style>
