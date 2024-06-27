import {
  createStore
} from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://keirakistensamy.github.io/vueTask/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    experience: null,
    skills: null,
    testimonial: null,
    projects: null,

  },
  getters: {},
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setExperience(state, value) {
      state.experience = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonial = value
    },
    setProjects(state, value) {
      state.projects = value
    },
  },


  actions: {

    async fetchJobtitle(context) {
      try {
        let {jobTitles} = await (await axios.get(portfolioURL)).data
        context.commit("setJobTitle", jobTitles)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchAbout(context) {
      try {
        let {
          about
        } = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchEducation(context) {
      try {
        let {
          education
        } = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", education)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchExperience(context) {
      try {
        let {
          experience
        } = await (await axios.get(portfolioURL)).data
        context.commit("setExperience", experience)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchSkills(context) {
      try {
        let {
          skills
        } = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchTestimonials(context) {
      try {
        let {
          testimonials
        } = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchProject(context) {
      try {
        let {
          project
        } = await (await axios.get(portfolioURL)).data
        context.commit("setproject", project)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },

  },
  modules: {}
})