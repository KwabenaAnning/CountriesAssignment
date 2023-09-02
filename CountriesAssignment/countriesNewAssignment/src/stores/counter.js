import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const loading = ref(false);

// Function to trigger loading

export const useCounterStore = defineStore('counter', () => {

  const countries=ref()
const loadData = async () => {  
  loading.value = true;
}


  async function getCountries(name){
     loading.value = true;
    try{
      const feedback = await axios(
        `https://restcountries.com/v3.1/all${name}`
      );
      countries.value = feedback.data;
       loading.value = false;
    }
      catch(error){
      console.log(error)
       loading.value = false;
      }
  }

  async function dispOnecountry(name) {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
      return response.data[0]
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return { countries, getCountries, dispOnecountry}
});
