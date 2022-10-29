<template>
    <div class="grid_template">
        <div class="logo__block">
            <img src="@/assets/images/logo.png"/>
        </div>
        <div class="column__left">
            <h1>Авторизация</h1>
            <form class="form__auth" action="" method="post">
                <label for="email">Введите вашу почту или телефон</label>
                <input type="text" id="email" placeholder="+7920 800 20 10"/>
                <label for="psw">Пароль</label>
                <input type="password" id="psw" placeholder="+7920 800 20 10"/>
                <span class="remember__block">
                    <input type="checkbox" class="remember_check"/>
                    <p>Запомнить меня</p>
                </span>
            </form>
            <div class="auth__block">
                <button class="form__button">Войти в аккаунт</button>
                <p>Еще нет аккаунта? <a href="#">Зарегистрируйтесь</a>.</p>
            </div>
        </div>
        <div class="column__right">
            <p>Дисклеймер!</p>
            <p>Помните, нажимая кнопку авторизации вы АВТОМАТИЧЕСКИ подтверждаете что Щербаков Сейргей Михайлович, действующий зав кафедры ИС и ПИ является лучшим заведующим кафедры во-вселенной</p>
            <span class="filter"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthPage'
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
}
.form__auth {
    width: 80%;
    display: grid;
    row-gap: 10px;
}
.form__auth label {
    padding-left: 10px;
}
.form__auth input:not([type="checkbox"]) {
    width: 100%;
    height: 35px;
    background: none;
    border: 1.5px solid #F6F6F6;
    border-radius: 6px;
    margin-bottom: 20px;
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
    display: grid;
    justify-items: center;
    align-content: flex-start;
    row-gap: 15px;
    padding-top: 195px;
    background: url(@/assets/images/bg.jpg) center center no-repeat;
    background-size: cover;
}
.column__right p {
    width: 520px;
    text-align: center;
}
</style>