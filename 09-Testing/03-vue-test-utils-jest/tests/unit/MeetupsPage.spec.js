const { shallowMount } = require('@vue/test-utils');
import MeetupsPage from '@/components/MeetupsPage';
import MeetupsList from '@/components/MeetupsList';
import { fetchMeetups } from '@/data';
import meetups from './__mocks__/meetups.json';

jest.mock('@/data');

describe('MeetupsPage', () => {
  it('should be defined', () => {
    expect(MeetupsPage).toBeDefined();
  });

  it('should render list', async () => {
    fetchMeetups.mockResolvedValue(meetups);
    const wrapper = shallowMount(MeetupsPage, {
      stubs: ['meetups-list'],
    });
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    expect(fetchMeetups).toHaveBeenCalled();
    expect(wrapper.findComponent(MeetupsList).props('meetups')).toHaveLength(
      meetups.length,
    );
  });
});
