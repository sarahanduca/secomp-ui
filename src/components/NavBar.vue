<template>
    <b-container>
        <div class="navbar">
            <img src="../assets/secompBranca.svg" />

            <div class="menuMiddle">
                <p>PALESTRAS</p>
                <p>WORKSHOPS</p>
                <p>CAMPEONATO</p>
                <p>SORTEIO</p>
            </div>
            <div class="inscrever">
                <p>INSCREVA-SE</p>
            </div>
        </div>
    </b-container>
</template>

<script>

export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');


.navbar {
    overflow: hidden;
    background-color: #296016;
    display: flex;
    align-items: center;
    width: 100%;
    // padding: 10px;
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

.navbar img {
    margin: 4px;
}

</style>