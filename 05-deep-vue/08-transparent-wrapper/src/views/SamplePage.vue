<template>
  <div>
    <p><app-input /></p>
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

export default {
  name: 'SamplePage',

  components: {
    ImageUploader,
    PrimaryButton,
    BaseButton,
    AppInput,
  },

  data() {
    return {
      value: 'text',
    };
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>
