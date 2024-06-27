<template>
  <section class="container skills-container" id="skills">
    <div class="row">
      <h1 class="skills" id="skills2">SKILLS</h1>
    </div>
    <div class="row justify-content-center">
      <div class="content-wrapper mx-auto mb-2">
        <div class="row skill-icon">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="col-lg-3 col-md-6 d-flex flex-column align-items-center justify-content-center"
          >
            <p class="texter">{{ skill.name }}</p>
            <i :class="skill.icon"></i>
            <p class="mt-3">Proficiency: {{ skill.proficiency }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import Spinner from './Spinner.vue'
import {computed, onMounted, ref } from 'vue'
import {useStore} from 'vuex'
const store = useStore()
    const Skills = 
    computed(() => store.state.Skills)
    const skillsInfo = ref('')
    const cnt = ref(-1)

    function repeat() {
        try {
            if (cnt.value == Skills.value?.length) cnt.value = 0;
            skillsInfo.value =
                Skills.value?.at(cnt.value)?.skillsInfo;
                setTimeout(repeat, 2000)
                cnt.value++
        } catch (e) {
            //
        }
    }
    onMounted(() => {
        store.dispatch('fetchSkills')
        repeat()
    })
</script>

<style>

</style>



<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', icon: 'lab la-html5', proficiency: 'Beginner' },
        { name: 'Bootstrap', icon: 'lab la-bootstrap', proficiency: 'Beginner' },
        { name: 'CSS', icon: 'lab la-css3', proficiency: 'Beginner' },
        { name: 'Figma', icon: 'lab la-figma', proficiency: 'Beginner' },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
