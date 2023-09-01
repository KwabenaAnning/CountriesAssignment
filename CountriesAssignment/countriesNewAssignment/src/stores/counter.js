import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {

  const countries=ref()

  async function getCountries(name){
    try{
      const feedback = await axios(
        `https://restcountries.com/v3.1/all${name}`
      );
      countries.value = feedback.data;
    }
      catch(error){
      console.log(error)
      }
  }

  return { countries, getCountries };
});
