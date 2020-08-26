<template>
  <v-row no-gutters dense align="center" justify="center">
    <v-col cols="12" sm="6">
      <v-card no-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <slot name="actions" />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>