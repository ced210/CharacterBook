<template>
  <choose-form-template title="Choose Your Race Form">
    <v-row>
      <v-col lg="2">
        <v-list>
          <v-list-item-group v-model="controller.selectedRace" mandatory>
            <v-list-item v-for="(race, i) in controller.races" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="race.name" @mouseover="controller.onHoverRace(race.id)" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col lg="10">
        <v-row v-if="controller.hoverRace" class="text-left">
          <v-col lg="2">
            <v-img
              src="https://www.placecage.com/150/150"
              aspect-ratio="1"
              width="150"
              height="150"
              contain
            />
          </v-col>
          <v-col lg="10">
            <v-row dense>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Description</h3>
                <p v-text="controller.hoverRace.description"></p>
                <!-- <div v-for="(r, i) in Object.keys(controller.hoverRace)" :key="i" class="text-left">
              <h3 class="text-decoration-underline">{{r}}</h3>
              <p>{{controller.hoverRace[r]}}</p>
                </div>-->
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Size</h3>
                <p>{{controller.hoverRace.size}}</p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Age</h3>
                <p>{{controller.hoverRace.age}}</p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Speed</h3>
                <p>{{controller.hoverRace.speed}}</p>
              </v-col>
              <v-col lg="6">
                <h3 class="text-decoration-underline">Languages</h3>
                <p>{{controller.hoverRace.languages}}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </choose-form-template>
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

  age = null;

  size = null;

  speed = null;

  age = null;

  abilityScoreIncreases = [];

  subRaces = [];

  languages = null;
}

export class RacialTrait {}

export class ChooseRaceFormController {
  hoverRace = null;
  selectedRace = 1;
  races = [
    {
      id: 1,
      name: "Dwarf",
      description:
        "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
      age:
        "Dwarves mature at the same rate as humans,but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
      size:
        "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
      speed:
        "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
      languages:
        "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
    },
    {
      id: 2,
      name: "Elf",
      description:
        "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
      age:
        "Although elves reach physical maturity at about the same age as  umans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
      size:
        "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
      languages:
        "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires."
    },
    {
      id: 3,
      name: "Halfling",
      description:
        "Your halfling character has a number of traits in common with all other halflings. ",
      age:
        "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
      size:
        "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
      speed: "Your base walking speed is 25 feet.",
      languages:
        "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling."
    }
  ];

  onHoverRace = raceId => {
    this.hoverRace = this.races.find(r => r.id == raceId);
  };
}

export default {
  data() {
    const controller = new ChooseRaceFormController();
    return { controller };
  }
};
</script>
