<template>
  <div>
    <p>
      <app-input v-model="value" ref="input" type="number" @change.native="changed">
        <template #left-icon v-if="showIcon">
          <app-icon icon="search" />
        </template>
      </app-input>
    </p>
    <p>value = {{ value }}</p>
    <p><base-button>Base Button</base-button></p>
    <p><primary-button>Primary Button</primary-button></p>
    <p><image-uploader /></p>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput';
import BaseButton from '@/components/BaseButton';
import PrimaryButton from '@/components/PrimaryButton';
import ImageUploader from '@/components/ImageUploader';
import AppIcon from '../components/AppIcon';

export default {
  name: 'SamplePage',

  components: {
    AppIcon,
    ImageUploader,
    PrimaryButton,
    BaseButton,
    AppInput,
  },

  data() {
    return {
      value: '1',
      showIcon: false,
    };
  },

  methods: {
    changed() {
      console.log(this.$refs.input.alert('example'));
    },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
