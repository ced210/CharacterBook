<template>
  <v-card>
    <v-card-title>Choose Your Race Form</v-card-title>
    <v-card-text> </v-card-text>
  </v-card>
</template>
<script>
export class Ability {}

export class AbilityScoreIncrease {
  value = 0;

  ability = null;
}

export class Size {}

export class Races {
  name = null;

  description = null;

  lifespan = null;

  adulthood = null;

  size = null;

  speed = null;

  age = null;

  abilityScoreIncreases = [];

  subRaces = [];

  languages = [];
}

export class RacialTrait {}

// const races = [];

export default {
  data() {
    return {};
  },
};
</script>
