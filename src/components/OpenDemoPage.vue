<template>
    <div class="grid_template">
        <div class="logo__block">
            <img src="@/assets/images/logo.png"/>
        </div>
        <div class="column__left">
            <h1>Жабы спасут этот мир!</h1>
            <p>(и мир документации тоже)</p>
            <a href="/personal"><button class="form__button">Запустить Демо</button></a>
        </div>
        <div class="column__right"></div>
    </div>
</template>

<script>
export default {
    name: 'OpenDemoPage'
  }
</script>

<style scoped>
* {
    color: #F6F6F6;
}
.logo__block {
    position: absolute;
    width: 250px;
    height: 150px;
    left: -14px;
    bottom: 10px;
}
.logo__block img {
    width: 100%;
    height: 100%;
}
.grid_template {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 45% 55%;
    background: black;
}
.column__left {
    display: grid;
    justify-items: center;
    align-content: center;
    row-gap: 10px;
}
.form__button {
    width: 70%;
    padding: 20px 0;
    color: black;
    background-color: #00FF00;
    border-radius: 12px;
    font-weight: bold;
    margin-top: 30px;
}
.form__button:hover {
    background-color: #F6F6F6;
    color: black;
}
.column__right {
    display: grid;
    justify-items: center;
    align-content: flex-start;
    row-gap: 15px;
    padding-top: 195px;
    background: url(@/assets/images/bg_demo.jpg) center 80% no-repeat;
    background-size: cover;
}
.column__right p {
    width: 520px;
    text-align: center;
}
</style>