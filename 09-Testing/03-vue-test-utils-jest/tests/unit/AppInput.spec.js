const { shallowMount } = require('@vue/test-utils');
// or import { shallowMount } from '@vue/test-utils';
import AppInput from '@/components/AppInput';

describe('AppInput', () => {
  it('should be defined', () => {
    expect(AppInput).toBeDefined();
  });

  describe('AppInput without initial props', () => {
    let wrapper;
    let inputGroup;
    let formControl;

    beforeEach(() => {
      wrapper = shallowMount(AppInput);
      inputGroup = wrapper.find('.input-group');
      formControl = inputGroup.find('.form-control');
    });

    afterEach(async () => {
      await wrapper.destroy();
    });

    it('should render input.input-group inside form-control', async () => {
      expect(inputGroup.exists()).toBe(true);
      expect(formControl.exists()).toBe(true);
    });

    it('should have form-control_sm on input only with small props', async () => {
      expect(formControl.classes('form-control_sm')).toBe(false);
      await wrapper.setProps({ small: true });
      // await wrapper.vm.$nextTick();
      expect(formControl.classes('form-control_sm')).toBe(true);
    });

    it('should render current value', async () => {
      const value = 'SameValue';
      await wrapper.setProps({ value });
      expect(formControl.element.value).toBe(value);
    });

    it('should match snapshot', async () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should apply input element attrs', () => {
    const attrs = {
      placeholder: 'placeholder',
      id: 'id',
      maxlength: '100',
    };
    const wrapper = shallowMount(AppInput, { attrs });
    expect(wrapper.find('.form-control').attributes()).toMatchObject(attrs);
  });

  it.each(['password', 'num', 'range', 'date', 'time', 'email', 'tel'])(
    'should render current input type (%s)',
    type => {
      const wrapper = shallowMount(AppInput, {
        attrs: { type },
      });
      expect(wrapper.find('.form-control').attributes('type')).toBe(type);
    },
  );

  it('should handle native input event and emit input with inputed value', async () => {
    const value = 'SomeText';
    const handler = jest.fn();
    const wrapper = shallowMount(AppInput, {
      listeners: {
        input: $event => handler($event),
      },
    });
    // wrapper.find('.form-control').element.value = value;
    // await wrapper.find('.form-control').trigger('input');
    await wrapper.find('.form-control').setValue(value);
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(value);
    // or
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input).toHaveLength(1);
    expect(wrapper.emitted().input[0]).toEqual([value]);
  });

  it('should render left icon and adds .input-group_icon and .input-group_icon-left', async () => {
    const wrapper = shallowMount(AppInput, {
      slots: {
        'left-icon': '<img class="icon icon-search" />',
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.input-group').classes()).toEqual([
      'input-group',
      'input-group_icon',
      'input-group_icon-left',
    ]);
    expect(
      wrapper.find('.input-group img:first-child').classes('icon-search'),
    ).toBe(true);
  });
});
