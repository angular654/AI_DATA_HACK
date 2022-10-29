<template>
    <div class="grid_template">
        <div class="logo__block">
            <img src="@/assets/images/logo.png"/>
        </div>
        <div class="column__left">
            <h1>Регистрация начинается отсюда</h1>
            <form class="form__reg" action="" method="post">
                <label for="name">
                    <p>Ваше ФИО</p>
                    <input type="text" id="name" placeholder="Андрей Ращук"/>
                </label>
                <label for="email">
                    <p>Электронная почта</p>
                    <input type="email" id="email" placeholder="Andre@gmail.com"/>
                </label>
                <label for="tel">
                    <p>Ваш номер телефона</p>
                    <input type="tel" id="tel" placeholder="+7920 800 20 10"/>
                </label>
                <label for="psw">
                    <p>Пароль</p>
                    <input type="password" id="psw" placeholder="+7920 800 20 10"/>
                </label>
                <span class="remember__block">
                    <input type="checkbox" class="remember_check"/>
                    <p>Я согласен с <a href="#">политикой конфиденциальности</a></p>
                </span>
            </form>
            <div class="auth__block">
                <button class="form__button">Создать аккаунт</button>
                <p>Уже есть аккаунт? <a href="#">Войдите</a> в него.</p>
            </div>
        </div>
        <div class="column__right">
            <div class="column__text">
                <p>Дисклеймер!</p>
                <p>Помните, нажимая кнопку авторизации вы АВТОМАТИЧЕСКИ подтверждаете что Щербаков Сейргей Михайлович, действующий зав кафедры ИС и ПИ является лучшим заведующим кафедры во-вселенной</p>
            </div>
            <div class="column__filter"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage'
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
    top: 22px;
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
    row-gap: 30px;
    padding-top: 100px;
}
.form__reg {
    width: 80%;
    display: grid;
    row-gap: 15px;
}
label p {
    padding-left: 10px;
}
.form__reg input:not([type="checkbox"]) {
    width: 100%;
    height: 35px;
    background: none;
    border: 1.5px solid #F6F6F6;
    border-radius: 6px;
    margin-top: 5px;
}
.remember__block {
    display: flex;
    gap: 10px;
}
.form__auth input[type="checkbox"] {
    background: none;
    border: 1.5px solid #F6F6F6;
    border-radius: 6px;
}
.auth__block {
    width: 80%;
}
.form__button {
    width: 100%;
    padding: 12px 8px;
    color: black;
    background-color: #00FF00;
    border-radius: 12px;
    font-weight: bold;
}
.form__button:hover {
    background-color: #F6F6F6;
    color: black;
}
.auth__block p {
    margin-top: 10px;
    text-align: center;
}
.auth__block a {
    color: #00FF00;
    text-decoration: none;
}
.auth__block a:hover {
    color: #F6F6F6;
}
.column__right {
    position: relative;
    top: 0;
    left: 0;
    border: 1px solid red;
}
.column__text {
    display: grid;
    justify-items: center;
    align-content: flex-start;
    row-gap: 15px;
    padding-top: 195px;
    z-index: 2;
}
.column__text p {
    width: 520px;
    text-align: center;
}
.column__filter {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/images/bg.jpg") center center no-repeat;
    background-size: cover;
    z-index: 1;
}
</style>