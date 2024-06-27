<template>
  <section class="container resume-container" id="resume">
    <div class="box">
      <h1 class="resume">Resume</h1>
      <ul class="timeline" id="nav4">
        <li class="timeline-inverted" v-for="(item, index) in timelineItems" :key="index">
          <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{{ item.title }}</h4>
            </div>
            <div class="timeline-body">
              <p>Duration: {{ item.duration }}</p>
              <p v-if="item.qualification">Qualification: {{ item.qualification }}</p>
              <p v-if="item.duties">Duties: {{ item.duties }}</p>
              <p v-if="item.duty">Duty: {{ item.duty }}</p>
              <Spinnner v-else/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
    
  data() {
    return {
      timelineItems: [
        {
          title: "Life Choices Coding Academy",
          duration: "Apr 2024 - Current",
          qualification: "Software and Web Development Course"
        },
        {
          title: "FuturEd",
          duration: "3 January 2024 - 6 January 2024",
          duties: "I attended a 3 day workshop where I was trained to work in a call centre."
        },
        {
          title: "Volunteered at a primary school",
          duration: "February 2024 - April 2024",
          duty: "I handled planning, finance, registers etc."
        },
        {
          title: "Personal Sweets business",
          duration: "December 2023 - current"
        },
        {
          title: "Pedal Power Association(PPA)",
          duration: "Part-time during 2023",
          duty: "I made sure that all cyclists were registered to cycle and after they finished the race, I handed out a medal to each participant."
        },
        {
          title: "School of Fashion",
          duration: "2023"
        },
        {
          title: "Own party decoration business",
          duration: "2019 - 2022",
          duty: "I planned and decorated birthday parties. I was able to turn an inspiration idea into reality."
        },
        {
          title: "Spine Road High School",
          duration: "2018 - 2022"
        }
      ]
    };
  }
};
</script>

<style scoped>

.resume-container{
    margin-top: 40px;
    border: 5px solid #0f2e7e;
    border-radius: 3rem;
    background-color: #8b8fde;
}

</style>
