<script setup>
import { useRouter } from 'vue-router';
import { ref , onMounted} from 'vue';
import { useCounterStore } from '../stores/counter';



// const selectedContinent = ref('');
// const country = useCounterStore();

// const continents = ['Africa', 'Asia', 'Europe', 'America', 'Oceania'];


// const filteredCountries = computed(() => {
//   if (!selectedContinent.value) {
//     return country.countries;
//   } else {
//     return country.countries.filter(
//       (country) => country.continent === selectedContinent.value
//     );

</script>


<template>
    <div class="detailPage">
        <div class="button">
            <img src="@/assets/call-made.svg" alt="">
            <button><RouterLink to="/">Back</RouterLink></button>
        </div>
       
    </div>
</template>


<style scoped>
.detailPage{
    padding: 80px 82pc 124px 80px;
}


.button{
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
    width: 136px;
    height: 40px;
    padding: 10px 39px 10px 32px;
    display: flex;
    gap: 10px;

}

button{
    border: none;
    background: #FFF;
}
</style>
