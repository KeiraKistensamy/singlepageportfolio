<template>
<div class="container about-container">
    <h1>About</h1>
    <div class="row">
        <div class="col">
                <img src="https://keirakistensamy.github.io/allimages/images/KeiraLogo.jpg" alt="keira" class="img-fluid w-75" loading="lazy">
        </div>
    
        <div class="col d-flex flex-column justify-content-center align-items-center">
            <p v-if="true">{{about[0]}}</p>
            <p v-if="true">{{about[1]}}</p>
            <p v-if="true">{{about[2]}}</p>
        <Spinner v-else/>
        </div>
    </div>
</div>
</template>

<script setup>

import Spinner from './Spinner.vue'
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
    const about = 
    computed(() => store.state.about)

   
    onMounted(() => {
        store.dispatch('fetchAbout')
    })

</script>

<style>

.about-container{
    margin-top: 40px;
    border: 5px solid #0f2e7e;
    border-radius: 3rem;
    background-color: #8b8fde;
}

</style>