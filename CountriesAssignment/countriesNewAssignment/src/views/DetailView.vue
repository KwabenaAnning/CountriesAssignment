<script setup>
import { useCounterStore } from '../stores/counter';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
// import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const mycountryList = useCounterStore();
const route = useRoute();
// const router = useRouter();

// countryList.getCountries(route.params.name);
// console.log(countryList.countries)
// const onlyOneCountry = computed(() => {
//   return countryList.countries[0];
// });
const onlyOneCountry = ref(null);
// this is taking the a push from the dispOneCountry into it. keeping to display it in the detail view.
onMounted(async () => {
  const countryName = route.params.name;
  onlyOneCountry.value = await mycountryList.dispOnecountry(countryName);
});
</script>
 

<template>
    <div class="detailPage">
        <div class="button">
            <img src="@/assets/call-made.svg" alt="">
            <button><RouterLink to="/">Back</RouterLink></button>
        </div>
        <div class="texxts">
            <div class="textUnder1" v-if="onlyOneCountry">
                <img :src="onlyOneCountry?.flags.png" alt="" class="img">
                <div class="textNoimage">
                    <div class="pees">
                        <p> {{ onlyOneCountry?.name }}</p>
                        <p><b>Native Name: </b> {{ onlyOneCountry.name.native ? countryData.name.native.common : 'N/A' }}</p>
                        <p><b>Population: </b> {{onlyOneCountry.population  }}</p>
                        <p><b>Region: </b> {{onlyOneCountry?.region }}</p>
                        <p><b>Subregion: </b> {{ onlyOneCountry.subregion}}</p>
                        <p><b>Capital: </b> {{onlyOneCountry?.capital  }}</p>
                    </div>
                    <div class="textUnder2">
                        <p><b>Top Level Domain: </b> {{ onlyOneCountry?.tld }}</p>
                        <p><b>Currency: </b> {{ onlyOneCountry?.currencies }}</p>
                        <p><b>Languages: </b> {{ onlyOneCountry?.languages }}</p>
                    </div>
                </div>
            </div>
        </div>
      <!-- <div v-else>
        <p>Loading...</p>
      </div> -->
    </div>
  </template>
  

<style scoped>
.detailPage{
    padding: 80px 82px 124px 80px;
    display: flex;
    flex-direction: column;
    gap: 90px ;
   
}

.textUnder1{
    display: flex;
    flex-direction: column;
    gap: 43px ;
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

.img{
    max-width: 559.715px;
    height: 100%;
    max-height: 401.169px;
    border-radius: 5px;

}

.textNoimage{
    display: flex;
    flex-direction: column;
    gap: 32px ;
}

.img{
    border-radius: 5.718px;
    background: #808080;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.03);
    width: 320px;
    height: 229px;
}

.texxts{
    display:flex;
    flex-direction: column;
    align-items: center;
}



b{
    color: #111517;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px
}

.pees{
    color: #111517;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
}

.textUnder2{
    color: #111517;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
}

@media (min-width: 750px) {

    .texxts{
        display:flex;
        flex-direction: row;
    }
    .textUnder1{
    display: flex;
    flex-direction: row;
    gap: 120px;
}

.textNoimage{
    display: flex;
    flex-direction: row;
     justify-content: space-between;
     /* width: 404px;
   height: 323px; */
}

.img{
    max-width: 560px;
    width: 100%;
    height:100;
    max-height: 401px;
}

b{
    font-size: 15px;
}

.pees{
    font-size: 15px;
}

}
</style>
