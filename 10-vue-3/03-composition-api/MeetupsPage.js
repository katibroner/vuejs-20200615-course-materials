import { defineComponent } from "/vendor/vue.esm-browser.js";

import { MeetupsList } from "./MeetupsList.js";
import { MeetupsCalendar } from "./MeetupsCalendar.js";
import { PageTabs } from "./PageTabs.js";
import { FormCheck } from "./FormCheck.js";
import { AppEmpty } from "./AppEmpty.js";
import { useMeetupsFilters } from "./useMeetupsFilters";
import { useMeetups } from "./useMeetups";

const template = `
<div class="container">

  <div class="filters-panel">
    <div class="filters-panel__col">
      <form-check :options="dateFilterOptions" v-model:selected="filter.date"></form-check>
    </div>

    <div class="filters-panel__col">
      <div class="form-group form-group_inline">
        <div class="input-group input-group_icon input-group_icon-left">
          <img class="icon" alt="icon" src="/assets/icons/icon-search.svg"/>
          <input
            id="filters-panel__search"
            class="form-control form-control_rounded form-control_sm"
            type="text"
            placeholder="Поиск"
            v-model="filter.search"
          />
        </div>
      </div>
      <div class="form-group form-group_inline">
        <page-tabs v-model:selected="filter.view"></page-tabs>
      </div>
    </div>
  </div>


  <transition v-if="filteredMeetups && filteredMeetups.length" name="fade" mode="out-in">
    <meetups-list v-if="filter.view === '' || filter.view === 'list'" :meetups="filteredMeetups" key="list"></meetups-list>
    <meetups-calendar v-else-if="filter.view === 'calendar'" key="calendar"></meetups-calendar>
  </transition>
  <app-empty v-else>Митапов по заданным условям не найдено...</app-empty>
</div>
`;

export const MeetupsPage = defineComponent({
  template,

  components: {
    MeetupsList,
    MeetupsCalendar,
    PageTabs,
    FormCheck,
    AppEmpty
  },

  setup(props) {
    const composedMeetups = useMeetups(props);
    return {
      ...composedMeetups,
      ...useMeetupsFilters(props, composedMeetups.meetups)
    };
  }
});
