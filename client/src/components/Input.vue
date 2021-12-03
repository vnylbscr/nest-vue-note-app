<template>
  <div class="input-container">
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      v-model="value"
      class="input"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomInput',
  props: {
    name: String,
    placeholder: String,
  },
  setup(props) {
    const onChange = (event) => {
      console.log(event);
      //   props.onChangeText(event.target.value);
    };

    return {
      onChange,
    };
  },
});
</script>
<style lang="scss">
.input-container {
  width: 100%;
  height: 200px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* &:hover: {
    border: 1px solid rgb(101, 117, 190);
  } */
  .input {
    width: 40%;
    height: 50px;
    padding: 10px;
    font-size: 16px;
  }
}
</style>
