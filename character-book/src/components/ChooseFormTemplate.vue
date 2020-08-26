<template>
  <v-row no-gutters dense align="center" justify="center">
    <v-col cols="12" sm="6">
      <v-card no-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="backAction" v-text="'back'" />
          <v-btn color="primary" @click="continueAction" v-text="'continue'" />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    backAction: {
      type: Function,
      default: () => {}
    },
    continueAction: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {};
  }
};
</script>