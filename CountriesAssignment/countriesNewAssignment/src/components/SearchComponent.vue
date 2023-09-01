<script setup>
import { ref , onMounted, computed} from 'vue';
import { useCounterStore } from '../stores/counter';
import { useRouter} from 'vue-router';


// Use the onMounted hook to fetch data after the component is mounted
const country =useCounterStore()
const router=useRouter()
const input=ref('')
country.getCountries(input.value)
const selectedContinent = ref('')
const individualCountry = ref('');

const continents = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

onMounted(() => {
  country.getCountries(input.value);
});


const goToDetail = (countryinfo) => {
    router.push({ name: 'Detail', params: { name: countryinfo } });
};


const filteredByContinent = computed(() => {
  if (!selectedContinent.value) {
    return country.countries; // Display all countries when no continent is selected
  } else {
    return country.countries.filter((countryinfo) => countryinfo.region === selectedContinent.value);
  }
});

const filteredBySearch = computed(() => {
  const searchTerm = individualCountry.value.toLowerCase();
  if (searchTerm === '') {
    return filteredByContinent.value; // Use continent-filtered list when no search query
  }
  return filteredByContinent.value.filter((countryinfo) =>
    countryinfo.name.common.toLowerCase().includes(searchTerm)
  );
});




// onMount is used host/send information to the web page
</script>


<template>
    <div class="search">
        <div class="searchInput">
            <img src="@/assets/search.svg" alt="" class="searchImage">
            <input type="text" placeholder="Search for a country..." v-model="individualCountry">
           <select v-model="selectedContinent">
           <option value="">Filter by continent</option>
          <option v-for="continent in continents" :key="continent">{{ continent }}</option>
           </select>
           <div class="myCountriesss">
           <div class="mycountriesss"
            @click="goToDetail(countryinfo.name.common)" v-for="countryinfo in filteredBySearch" :key="countryinfo.name.common">
            <img :src="countryinfo.flags.png" :alt="countryinfo.name.common" />
            <div class="textunder"> 
                <h3>{{ countryinfo.name.common }}</h3>
                <div class="myPees">
                    <p>Population:{{countryinfo.population  }}</p>
                    <p>Region:{{ countryinfo.region }}</p>
                    <p>Capital:{{countryinfo.capital  }}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
         <!-- <select v-model="inputText">
        <option value="">Filter By Region</option>
        <option v-for="continent in countryStore.continents" :key="continent.idContinent" :value="continent">
            {{ continent.continent }}
        </option>
        </select> -->

        <!-- <div>
            <select name="" id=""></select>
        </div> -->
</template>


<style scoped>

.search{
    max-width: 343px;
    width:100%;
    height:100%;
    max-height: 48px;
    padding: 24px 16px 40px 16px;
    margin: 0 auto;

}
.searchInput{
    border-radius: 5px;
    background-color:#FFF 1px solid;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    color: #FFF;
    margin: 0 auto;
    display: flex;
    gap: 26px;
    padding: 16px 0px 16px 32px;
}

.searchImage{
    max-width: 16px;
    width:100%;
    max-height: 16px;
    height: 100%;
    margin: auto 0;
}

input{
    border: none;
}

input::placeholder{
    color: #C4C4C4;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.myCountriesss{
    border-radius: 5px;
    background:red;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    max-width: 264px;
    height: 100%;
    width:100%;
    max-height: 336px;
    display: flex;
    flex-direction: column;
    gap:40px 
}

.textunder h3{
color: #111517;
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: 26px; /* 144.444% */
}

.myCountriesss img{
   max-width: 267px;
   width:100%;
    max-height: 160px;
    height:100%;
    border-radius:5px
}


.textunder{
    color: #111517;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
    padding: 24px 91px 46px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
   
    }
    .myPees{
     display: flex;
     flex-direction: column;
     gap:8px;
    }

@media(min-width:750px){
    .search{
      padding: 48px 80px 48px 80px;

      /* display: flex;
       flex-direction: column;
       justify-content: space-between; */
     }

     .searchInput{
        max-width: 480px;
        width: 100%;
        max-height: 56px;
        height: 100%;
        padding: 18px 270px 18px 32px;
     }

    input::placeholder{
    color: #C4C4C4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

.myCountriesss{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:60px;
    max-height: fit-content; 
} 


}

</style>