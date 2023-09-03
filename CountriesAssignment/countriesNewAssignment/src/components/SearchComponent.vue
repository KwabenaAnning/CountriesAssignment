<script setup>
import { ref , onMounted, computed} from 'vue';
import { useCounterStore } from '../stores/counter';
import { useRouter} from 'vue-router';

// const toggleLoader = () => {
//   loading.value = !loading.value;
// };git
// Use the onMounted hook to fetch data after the component is mounted
const country =useCounterStore()
const router=useRouter()
const input=ref('')
country.getCountries(input.value)
const selectedContinent = ref('')
const individualCountry = ref('');

const continents = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

// onMounted(async () => {
//   loading.value = true;

//   await country.getCountries(input.value); // Assuming getCountries is an asynchronous function
//   loading.value = false; // Set loading to false after data is loaded
// });
// loading.value = false;

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
            <div class="filterSearch">
                <div class="searchSpace">
                    <img src="@/assets/search.svg" alt="" class="searchImage">
                    <input type="text" placeholder="Search for a country..." v-model="individualCountry">
                </div>
                <div>
                    <select v-model="selectedContinent">
                        <option value="">Filter by continent</option>
                        <option v-for="continent in continents" :key="continent">{{ continent }}</option>
                    </select>
                </div>
            </div>
            <div class="myCountriesss">
                <div class="mycountriesss"
                   @click="goToDetail(countryinfo.name.common)" v-for="countryinfo in filteredBySearch" :key="countryinfo.name.common">
                   <img :src="countryinfo.flags.png" :alt="countryinfo.name.common"/>
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
    <!-- <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div></div> -->
</template>


<style scoped>

.search{
    padding: 24px 16px 40px 16px;
    display:flex;
    flex-direction: column;
    align-items: center;
 

}
 .searchInput{
    display: flex;
    flex-direction: column;
    gap:32px
}

.filterSearch{
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
}


select{
  border: none;
  padding: 14px 19px 14px 24px;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  display: flex;
}

.searchSpace{
    border-radius: 5px;
    background-color:#FFF 1px solid;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    color: #FFF;
    margin: 0 auto;
    display: flex;
    gap: 26px;
    padding: 16px 0px 16px 32px;
    max-width: 343px;
    width: 100%;
    height: 100%;
    max-height: 48px;
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
    border:none;
    color: #C4C4C4;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}

 .myCountriesss{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:40px 
}  

.textunder h3{
color: #111517;
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: 26px; 
}

.myCountriesss img{
    border-radius:5px;
    max-width: 264px;
    width: 100%;
    height: 100%;
    max-height: 183px;

}

.mycountriesss{
    border-radius: 5px;
    background:#FFF;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    gap: 40px;

}

 .textunder{
    color: #111517;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
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
    }

    .searchImage{
     max-width: 18px;
    width:100%;
    max-height: 18px;
    height: 100%;
    margin: auto 0;
    }

    .searchSpace{
        border-radius: 5px;
        background: #FFF;
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
        max-width: 480px;
        height: 100%;
        width: 100%;
        max-height: 56px;
        align-content: stretch;
        padding: 18px 270px 18px 32px;
     }
     
     .filterSearch{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }


     .searchInput{
        display: flex;
        flex-direction: column;
        gap: 48px
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
    row-gap: 63px;
    justify-content: space-evenly;
    gap: 20px;
} 
/* .myCountriesss img{
    border-radius:5px;
    max-width: 264px;
    width: 100%;
    height: 100%;
    max-height: 183px;
} */

.mycountriesss{
max-width: 264px;
    width: 100%;
    height: 100%;
    max-height: 336px;
}

 } 

 .lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>