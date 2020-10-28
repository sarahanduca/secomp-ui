<template>
    <div>
    <div class="b-container">
        <div class="navbar">
            <img class="ml-1" src="../assets/logoSECOMP.svg" />

            <div class="menuMiddle">
                <p>PALESTRAS</p>
                <p>WORKSHOPS</p>
                <p>CAMPEONATO</p>
                <p>SORTEIO</p>
                <p>INSCREVA-SE</p>
            </div>
            <div class="inscrever">
                
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

div {
    background-color: #296016;
}
.navbar {
    overflow: hidden;
    background-color: #296016;
    display: flex;
    align-items: center;
    width: 80%;
    margin: auto;
}

.menuMiddle {
    display: flex;
    background-color: #296016;
    margin: auto;
}

.menuMiddle p {
    font-size: 30px;
    font-family: Bebas Neue, cursive;
    color: #ffffff;
    padding: 0px 20px;
}

.navbar .inscrever p {
    color: #ffffff;
    font-family: Bebas Neue, cursive;
    font-size: 30px;
    position: relative;
    right: 15px;
}

.navbar .inscrever {
    background-color: #296016;
}

@media (max-width: 1000px){
    .menuMiddle p {
        font-size: 20px;
    }

    .navbar .inscrever p {
        font-size: 20px;
    }
}

@media (max-width: 781px){
    .menuMiddle {
        display: none;
    }

    .inscrever {
        display: none;
    }

    img {
    position: relative;
    left: 43%;
    }
    
}

</style>