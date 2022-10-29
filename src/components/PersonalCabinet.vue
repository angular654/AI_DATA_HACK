<template>
    <div class="grid_template">
        <div class="header">
            <div class="header__profile">
                <img src="@/assets/images/UserCircle.svg" width="80" height="80">
                <p>Имя Фамилия</p>
                <img src="@/assets/images/Setting.svg"/>
            </div>
            <p>Выйти</p>
        </div>
        <div class="body">
            <div class="body__blur"></div>
            <form class="settings__window" action="" method="post">
                <img src="@/assets/images/Exit.svg" width="15" height="25"/>
                <label for="name">Имя</label>
                <input type="text" id="name"/>
                <label for="surname">Фамилия</label>
                <input type="text" id="surname"/>
                <label for="patronymic">Отчество</label>
                <input type="text" id="patronymic"/>
                <label for="email">Email</label>
                <input type="email" id="email"/>
                <label for="phone">Номер телефона</label>
                <input type="tel" id="phone"/>
                <label for="psw">Пароль</label>
                <input type="password" id="psw"/>
                <button type="submit" class="save__info">Сохранить изменения</button>
            </form>
            <div class="grid__file">
                <div class="file__caption">
                    <div>
                    <h3>Ваши файлы</h3>
                    <img src="@/assets/images/Plus.svg" width="43" height="43"/>
                    </div>
                    <div>Общий % распознавания документа</div>
                    <div>
                        <p>Соответствие</p>
                        <div class="columns">
                            <p>Параметрам</p>
                            <p>Описанию</p>
                        </div>
                    </div>
                    <div>Время анализа</div>
                </div>
            </div>
            <div class="grid__file" v-if="this.files.length == 0">
                <div class="file__drop" id="file-drag-drop">
                    <form ref="fileform">
                        <span class="drop-files">Перетащите в это поле файлы с расширением .xls, .xlsx, .csv</span>
                    </form>
                </div>
            </div>
            <template v-else>
                <div class="grid__file">
                    <div class="file__item">
                        <div class="file__name">
                            <p class="file__id">1</p>
                            <p>Название файла</p>
                        </div>
                        <div class="result__red">Результат</div>
                        <div class="result__green">распознование %</div>
                        <div class="result__yellow">распознование %</div>
                        <div>1 min 15 sec</div>
                        <button class="file__download">Скачать файл</button>
                    </div>
                    <div class="file__item">
                        <div class="file__name">
                            <p class="file__id">1</p>
                            <p>Название файла</p>
                        </div>
                        <div class="result__yellow">Результат</div>
                        <div class="result__yellow">распознование %</div>
                        <div class="result__red">распознование %</div>
                        <div>20 sec</div>
                        <button class="file__download">Скачать файл</button>
                    </div>
                    <div class="file__item">
                        <div class="file__name">
                            <p class="file__id">1</p>
                            <p>Название файла</p>
                        </div>
                        <div class="result__green">Результат</div>
                        <div class="result__red">распознование %</div>
                        <div class="result__green">распознование %</div>
                        <div>20 min 20 sec</div>
                        <button class="file__download">Скачать файл</button>
                    </div>
                </div>
                <div class="grid__file">
                    <h3>Статистика</h3>
                    <div class="grid__statistic">
                        <p>(всего файлов, объём занимаемой файлами памяти, проверенных строк, общее время обработки)</p>
                        <p>Средний % обработки данных</p>
                        <p>Средний % соответствия параметрам\описанию</p>
                        <div class="stat__info">
                            <p>119</p>
                            <p>12gb</p>
                            <p>1 111 987 строк</p>
                            <p>12 часов, 13 минут, 27 секунд</p>
                        </div>
                        <div class="result__yellow">распознование %</div>
                        <div>
                            <p class="result__yellow">54%</p>
                            <img src="@/assets/images/Vector.svg" width="30" height="40">
                            <p class="result__green">75%</p>
                        </div>
                    </div>
                </div>
            </template>
            <div class="grid__file">
                <h3>Список прошлых файлов</h3>
                <div class="last__item">
                    <div class="file__name">
                        <p class="file__id">1</p>
                        <p>Название файла</p>
                    </div>
                    <div class="result__green">Результат</div>
                    <div class="result__red">распознование %</div>
                    <div class="result__green">распознование %</div>
                    <span class="file__datetime">
                        <div>20 min 20 sec</div>
                        <div>17 April, 2022</div> 
                        <button class="file__download">Скачать файл</button>
                    </span>
                </div>
                <div class="last__item">
                    <div class="file__name">
                        <p class="file__id">1</p>
                        <p>Название файла</p>
                    </div>
                    <div class="result__green">Результат</div>
                    <div class="result__red">распознование %</div>
                    <div class="result__green">распознование %</div>
                    <span class="file__datetime">
                        <div>20 min 20 sec</div>
                        <div>17 April, 2022</div> 
                        <button class="file__download">Скачать файл</button>
                    </span>
                </div>
                <div class="last__item">
                    <div class="file__name">
                        <p class="file__id">1</p>
                        <p>Название файла</p>
                    </div>
                    <div class="result__green">Результат</div>
                    <div class="result__red">распознование %</div>
                    <div class="result__green">распознование %</div>
                    <span class="file__datetime">
                        <div>20 min 20 sec</div>
                        <div>17 April, 2022</div> 
                        <button class="file__download">Скачать файл</button>
                    </span>
                </div>
                <div class="last__item">
                    <div class="file__name">
                        <p class="file__id">1</p>
                        <p>Название файла</p>
                    </div>
                    <div class="result__green">Результат</div>
                    <div class="result__red">распознование %</div>
                    <div class="result__green">распознование %</div>
                    <span class="file__datetime">
                        <div>20 min 20 sec</div>
                        <div>17 April, 2022</div> 
                        <button class="file__download">Скачать файл</button>
                    </span>
                </div>
                <button class="show__btn">Показать еще</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PersonalCabinet',
    data(){
        return {
            dragAndDropCapable: false,
            files: []
        }
    },
    methods: {
        determineDragAndDropCapable(){
            var div = document.createElement('div');
            return ( ( 'draggable' in div )
                    || ( 'ondragstart' in div && 'ondrop' in div ) )
                    && 'FormData' in window
                    && 'FileReader' in window;
        }
    },
    mounted(){
        this.dragAndDropCapable = this.determineDragAndDropCapable();

        if( this.dragAndDropCapable ){
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
                this.$refs.fileform.addEventListener(evt, function(e){
                    e.preventDefault();
                    e.stopPropagation();
                }.bind(this), false);
            }.bind(this));
            this.$refs.fileform.addEventListener('drop', function(e){
                for( let i = 0; i < e.dataTransfer.files.length; i++ ){
                    this.files.push( e.dataTransfer.files[i] );
                }
            }.bind(this));
        }
    },
}
</script>

<style scoped>
* {
    color: #F6F6F6;
}
.grid_template {
    max-width: 100vw;
    height: auto;
    box-sizing: border-box;
    background: black;
}
.header {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 2% 4%;
}
.header__profile {
    display: flex;
    align-items: center;
    gap: 10px;
}
.body {
    position: relative;
    top: 0;
    left: 0;
}
.body__blur {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none;
    z-index: 2;
}
.settings__window {
    width: 60%;
    height: auto;
    padding: 15px 0;
    position: absolute;
    top: 0;
    left: 20%;
    display: grid;
    row-gap: 10px;
    border: 1px solid #00FF00;
    background-color: black;
    display: none;
    z-index: 5;
}
.settings__window img {
    justify-self: flex-end;
    padding-right: 15px;
}
.settings__window input {
    height: 30px;
    border: 1px solid #00FF00;
    background: rgba(255, 255, 255, 0.2);
}
.save__info {
    width: 50%;
    padding: 15px 30px;
    justify-self: center;
    background-color: #00FF00;
    border-radius: 12px;
    color: black;
}
.grid__file {
    display: grid;
    row-gap: 15px;
    padding: 2% 5%;
}
.file__caption {
    display: grid;
    grid-template-columns: 20% 11.5% auto 10% 15%;
    gap: 30px;
    text-align: center;
    align-items: flex-end;
}
.file__caption div:first-child {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 10px;
}
.columns {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;
    margin-top: 15px;
}
.file__item {
    display: grid;
    grid-template-columns: 20% auto auto auto 10% 15%;
    gap: 30px;
}
.file__item div, .last__item div, .grid__statistic div {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #F6F6F6;
    border-radius: 5px;
}
.file__name p {
    padding: 10px;
}
.file__name p:first-child {
    border-right: 1px solid #F6F6F6;
}
.file__name p:last-child {
    width: 250px;
}
.file__download {
    background-color: #00FF00;
    color: black;
    font-weight: bold;
    border-radius: 6px;
}
.file__download:hover {
    background-color: #F6F6F6;
    color: black;
}
.file__drop {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    margin: 10px 0px;
    border: 3px solid #F6F6F6;
    border-radius: 6px;
}
.file__drop:hover {
    background: rgba(246, 246, 246, 0.3);
}
.grid__statistic {
    display: grid;
    grid-template-columns: auto 15% 15%;
    column-gap: 30px;
    row-gap: 15px;
}
.stat__info {
    padding: 8px;}
.stat__info p {
    color: #00FF00;
}
.last__item {
    display: grid;
    grid-template-columns: 20% auto auto auto 28%;
    gap: 30px;
}
.file__datetime {
    display: flex;
    gap: 15px;
}
.file__datetime div {
    padding: 0px 10px;
}
.show__btn {
    background: none;
    border: none;
    color: #00FF00;
    justify-self: flex-start;
}

.result__green {
    color: #00FF00;
}
.result__yellow {
    color: #FFED00;
}
.result__red {
    color: #FF0000;
}
</style>