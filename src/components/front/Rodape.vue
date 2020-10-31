<template>
    <div class="background">
        <b-container>
            <div class="wrapper">
                <div class="realizacao">
                    <h2>Realização</h2>
                    <div class="first-img">
                        <img class="pet" src="../../assets/PET.png" alt="">
                        <img class="UEM" src="../../assets/UEM.png" alt="">
                    </div>
                    <div class="second-img">
                        <img class="DIN" src="../../assets/DIN.png" alt="">
                        <img class="CAINFO" src="../../assets/CAINFO.png" alt="">
                        <img class="CACCOM" src="../../assets/CACOM.png" alt="">
                    </div>
                </div>
                <div class="patrocinio">
                    <h2>Patrocínio</h2>
                    <div class="first-img">
                        <img src="../../assets/mandic.png" alt="">
                        <img class="elotech" src="../../assets/elotech.png" alt="">
                    </div>
                    <div class="second-img">
                        <img src="../../assets/dumativa.png" alt="">
                        <img class="db1" src="../../assets/db1.png" alt="">
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.background {
    background-color: #aaaaaa;
}

.wrapper h2 {
    position: relative;
    top: 20px;
    text-decoration: underline;
}

.wrapper {
    display: flex;
    text-align: center;
}

.wrapper img {
    width: 100px;
    height: 100px;
    margin: 20px 30px 20px 30px;
}

.wrapper .patrocinio .first-img {
    margin: 60px 0 0 0;
}

.wrapper .patrocinio .second-img {
    margin: 30px 0 0 0;
}

.wrapper .realizacao .pet {
    width: 170px;
    height: 80px;
}

.wrapper .realizacao .UEM {
    width: 170px;
    height: 170px;
}

.wrapper .realizacao .CACCOM {
    width: 170px;
    height: 120px;
}

.wrapper .realizacao .DIN {
    width: 170px;
    height: 120px;
}

.wrapper .patrocinio .elotech {
    width: 140px;
    height: 40px;
}

.wrapper .patrocinio .db1 {
    width: 150px;
    height: 70px;
}

@media (max-width: 780px) {
    .wrapper .realizacao .second-img {
        display: flex;
        flex-direction: column;
        position: relative;
        bottom: 50px;
    }

    .wrapper .realizacao .DIN {
    margin-left: 28%;
    }

    .wrapper .realizacao .CAINFO {
    margin-left: 38%;
    }

    .wrapper .realizacao .CACCOM {
    margin-left: 29%;
    }

    .wrapper .realizacao .pet {
        position: relative;
        top: 50px;
    }

    .wrapper .realizacao .UEM {
        position: relative;
        top: 20px;
    }
}

@media (max-width: 420px) {
    .wrapper {
        flex-direction: column;
    }

    .wrapper .realizacao .second-img {
        display: unset;
    }

    .wrapper .realizacao .DIN {
    margin-left: 0;
    }

    .wrapper .realizacao .CAINFO {
    margin-left: 0;
    }

    .wrapper .realizacao .CACCOM {
    margin-left: 0;
    }

    .wrapper .realizacao .second-img {
        position: relative;
        bottom: 50px;
    }

    .wrapper .realizacao .pet {
        position: relative;
        top: 40px;
    }
    
}

@media (max-width: 354px) {
    .wrapper .realizacao .second-img {
        position: relative;
        left: 20px;
    }   
}

</style>