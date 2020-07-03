<template>
  <div>
    <p>
      <app-input v-model="value">
        <template #left-icon v-if="showIcon">
          <app-icon icon="search" />
        </template>
      </app-input>
    </p>
    <p>value = {{ value }}</p>
    <p><base-button>Base Button</base-button></p>
    <p>
      <primary-button @click="showIcon = !showIcon">
        Primary Button
      </primary-button>
    </p>
    <p><image-uploader /></p>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput';
import BaseButton from '@/components/BaseButton';
import PrimaryButton from '@/components/PrimaryButton';
import ImageUploader from '@/components/ImageUploader';
import AppIcon from '@/components/AppIcon';

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
      value: 'text',
      showIcon: false,
    };
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
