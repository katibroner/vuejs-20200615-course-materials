<template>
  <div class="wrapper page container">
    <meetup-form v-if="meetups[this.meetupId]" :meetup-id="this.meetupId" />
    <hr>
    <pre><code>{{ meetup }}</code></pre>
  </div>
</template>

<script>
import MeetupForm from './components/MeetupForm';
import { mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    MeetupForm,
  },

  mounted() {
    this.$store.commit('forms/SET_MEETUP', {
      meetupId: 1,
      meetup: {
        id: null,
        title: '',
        description: '',
        imageId: null,
        date: new Date(),
        place: '',
        agenda: [],
      },
    });
  },

  data() {
    return {
      meetupId: 1,
    };
  },

  computed: {
    ...mapState({
      meetups: state => state.forms.meetups,
    }),

    meetup() {
      return this.meetups[this.meetupId];
    },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
