<template>
  <v-stepper
    v-model="step"
    non-linear
    :vertical="$vuetify.breakpoint.smAndDown"
  >
    <v-stepper-header v-if="!$vuetify.breakpoint.smAndDown">
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
    <div v-else>
      <v-stepper-step editable step="1">
        Chose Your Race
      </v-stepper-step>
      <v-stepper-content step="1">
        <choose-race-form
          @save="
            () => {
              console.log('oh hi mark');
            }
          "
        />
      </v-stepper-content>
      <v-stepper-step editable step="2">
        Choose Your Class
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-card>
          <v-card-title>Choose Your Class</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-step editable step="3">
        Choose Your Background
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Choose Your Background</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-step step="4" editable>
        Choose Your Alignement
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card>
          <v-card-title>Choose Your Alignement</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-step step="5" editable>
        Name Your Character
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-card>
          <v-card-title>Name Your Character</v-card-title>
        </v-card>
      </v-stepper-content>
    </div>
    <v-stepper-items v-if="!$vuetify.breakpoint.smAndDown">
      <v-stepper-content step="1">
        <choose-race-form
          @save="
            () => {
              console.log('oh hi mark');
            }
          "
        />
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card>
          <v-card-title>Choose Your Class</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card>
          <v-card-title>Choose Your Background</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card>
          <v-card-title>Choose Your Alignement</v-card-title>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card>
          <v-card-title>Name Your Character</v-card-title>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
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
    return {
      step: 1,
    };
  },
};
</script>
