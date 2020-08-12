import { meetupApi } from '@/api/meetup-api';
import { imageService } from '@/services/image-service';

export const meetupService = {
  _processMeetup(meetup) {
    return {
      ...meetup,
      date: new Date(meetup.date),
      cover: imageService.getImageURL(meetup.imageId),
      localeDate: new Date(meetup.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  },

  findAll() {
    // + Error handling
    return meetupApi.getMeetups().then(result => {
      const meetups = result.map(this._processMeetup);
      meetups.sort((a, b) => new Date(b.date) - new Date(a.date));
      return meetups;
    });
  },

  findById(id) {
    return meetupApi.getMeetup(id).then(result => {
      return this._processMeetup(result);
    });
  },

  build() {
    return {
      id: nanoid(),
      title: '',
      description: '',
      imageId: null,
      date: new Date(),
      place: '',
      agenda: [],
    };
  },

  buildAgendaItem() {
    return {
      id: nanoid(),
      startsAt: '00:00',
      endsAt: '00:00',
      type: 'other',
      title: null,
      description: null,
      speaker: null,
      language: null,
    };
  },

  getAgendaItemLanguages() {
    return [
      { value: null, text: 'Не указано' },
      { value: 'RU', text: 'RU' },
      { value: 'EN', text: 'EN' },
    ];
  },

  getAgendaItemTypes() {
    return [
        {
          value: 'registration',
          text: 'Регистрация',
        },
        {
          value: 'opening',
          text: 'Открытие',
        },
        {
          value: 'break',
          text: 'Перерыв',
        },
        {
          value: 'coffee',
          text: 'Coffee Break',
        },
        {
          value: 'closing',
          text: 'Закрытие',
        },
        {
          value: 'afterparty',
          text: 'Afterparty',
        },
        {
          value: 'talk',
          text: 'Доклад',
        },
        {
          value: 'other',
          text: 'Другое',
        },
      ].map(t =>
        ({
          ...t,
          icon: this.getAgendaIconMap()[t.value],
        }),
    );
  },

  getAgendaIconMap() {
    return {
      registration: 'key',
      opening: 'cal-sm',
      talk: 'tv',
      break: 'clock',
      coffee: 'coffee',
      closing: 'key',
      afterparty: 'cal-sm',
      other: 'cal-sm',
    };
  },
};
