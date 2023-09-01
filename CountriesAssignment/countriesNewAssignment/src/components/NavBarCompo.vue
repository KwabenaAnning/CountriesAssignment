<script setup>

</script>

<template>
    <div class="nav">
       <h3>Where in the world?</h3>
       <div class="dark">
           <img src="@/assets/moon.svg" alt="">
           <p>Dark Mode</p>
        </div>
    </div>

</template>



<style scoped>

.nav{
    display: flex;
    padding: 30px 0px 30px 16px;
    justify-content: space-between;
    background: #FFF;
   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
}


.dark{
    justify-content:center;
    align-items: center;
    display: Flex;
    padding-right: 16px;
    gap:8px
}

.dark p{
    color: #111517;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
}

.nav h3{
    color: #111517;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 20px;
}

@media (min-width: 750px){
    .nav{
        padding: 23px 80px 29px 81px;
    }

    .nav h3{
     color: #111517;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}
.nav p{
    color: #111517;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
}
</style>