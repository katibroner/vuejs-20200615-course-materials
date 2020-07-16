<template>
  <div class="form-section form-section_inner">
    <button type="button" class="remove-button" @click="removeHandle">
      <app-icon icon="trash" />
    </button>

    <div class="form-group">
      <select title="Тип">
        <option value="other">Другое</option>
      </select>
    </div>

    <div class="form__row">
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Начало</label>
          <input
            class="form-control"
            v-model="startsAt"
            type="time"
            placeholder="00:00"
          />
        </div>
      </div>
      <div class="form__col">
        <div class="form-group">
          <label class="form-label">Окончание</label>
          <input
            class="form-control"
            v-model="endsAt"
            type="time"
            placeholder="00:00"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Заголовок</label>
      <input class="form-control" v-model="title" />
    </div>
    <div class="form-group">
      <label class="form-label">Описание</label>
      <textarea
        class="form-control"
        v-model="description"
      ></textarea>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';
import { mapMutations } from 'vuex';

const mapField = (field) => {
  return {
    get() {
      return this.agendaItem[field];
    },
    set(value) {
      this.setMeetupAgendaItemField({
        meetupId: this.meetupId,
        index: this.index,
        field,
        value,
      });
    },
  };
};

export default {
  name: 'MeetupAgendaItemForm',

  props: {
    meetupId: {
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  components: {
    AppIcon,
  },

  computed: {
    agendaItem() {
      return this.$store.state.forms.meetups[this.meetupId].agenda[this.index];
    },

    startsAt: mapField('startsAt'),
    endsAt: mapField('endsAt'),
    title: mapField('title'),
    description: mapField('description'),
  },

  methods: {
    ...mapMutations({
      setMeetupAgendaItemField: 'forms/SET_MEETUP_AGENDA_ITEM_FIELD',
      removeAgendaItem: 'forms/REMOVE_AGENDA_ITEM',
    }),
    removeHandle() {
      this.removeAgendaItem({ meetupId: this.meetupId, index: this.index });
    },
  },
};
</script>

<style scoped></style>
