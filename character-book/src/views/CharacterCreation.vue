<template>
  <v-stepper non-linear>
    <v-stepper-header>
      <v-stepper-step editable step="1">
        Chose Your Race
      </v-stepper-step>
      <v-divider />
      <v-stepper-step editable step="2">
        Choose Your Class
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="3" editable>
        Choose Your Background
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="4" editable>
        Choose Your Alignement
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="5" editable>
        Name Your Character
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-content step="1">
      <choose-race-form
        @save="
          () => {
            console.log('oh hi mark');
          }
        "
      />
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import ChooseRaceForm from "../components/ChooseRaceForm.vue";

export default {
  components: {
    ChooseRaceForm,
  },
  name: "CharacterCreation",
  data() {
    return {};
  },
};
</script>
