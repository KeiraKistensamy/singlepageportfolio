<template>

  <div class="container">
<!-- landingSection -->
    <section class="row" id="landing">

      <LandingSection />

    </section>

<!-- aboutSection -->
    <section class="row" id="about">

      <AboutSection/>

    </section>

<!-- resumeSection -->
    <section class="row" id="resume">

      <ResumeSection/>

    </section>

<!-- skillsSection -->
    <section class="row" id="skills">

      <SkillsSection/>

    </section>


<!-- projectsSection -->
    <section class="row" id="projects">



    </section>

<!-- testimonialsSection -->
    <section class="row" id="testimonals">



    </section>

<!-- reachmeSection -->
    <section class="row" id="reachme">



    </section>

  </div>
</template>

<script>
  import LandingSection from '@/components/LandingSection.vue'
  import AboutSection from '@/components/AboutSection.vue'
  import ResumeSection from '@/components/ResumeSection.vue'
  import SkillsSection from '@/components/SkillsSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    ResumeSection,
    SkillsSection,
    }
}
</script>

<style>

</style>