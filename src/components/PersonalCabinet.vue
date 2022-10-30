<template>
    <div class="grid_template">
        <div class="header">
            <div class="header__profile">
                <img src="@/assets/images/UserCircle.svg" width="80" height="80">
                <p>Имя Фамилия</p>
                <button v-on:click="openWindow" class="open__window">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.1667 21.1C32.8995 20.7958 32.7521 20.4048 32.7521 20C32.7521 19.5951 32.8995 19.2041 33.1667 18.9L35.3 16.5C35.5351 16.2378 35.681 15.9078 35.717 15.5575C35.7529 15.2072 35.6769 14.8545 35.5 14.55L32.1667 8.78332C31.9915 8.47919 31.7248 8.23812 31.4046 8.09446C31.0843 7.95081 30.7269 7.91192 30.3833 7.98332L27.25 8.61665C26.8513 8.69904 26.4362 8.63264 26.0831 8.42999C25.73 8.22734 25.4633 7.90246 25.3333 7.51665L24.3167 4.46665C24.2048 4.13562 23.9918 3.8481 23.7077 3.64472C23.4236 3.44135 23.0827 3.33242 22.7333 3.33332H16.0667C15.7032 3.31435 15.3435 3.41487 15.0426 3.61951C14.7416 3.82416 14.516 4.12169 14.4 4.46665L13.4667 7.51665C13.3367 7.90246 13.0699 8.22734 12.7168 8.42999C12.3637 8.63264 11.9487 8.69904 11.55 8.61665L8.33332 7.98332C8.00757 7.93729 7.67549 7.98869 7.3789 8.13105C7.08231 8.27342 6.83449 8.50037 6.66666 8.78332L3.33332 14.55C3.15192 14.8511 3.07036 15.2018 3.10029 15.552C3.13023 15.9023 3.27013 16.2341 3.49999 16.5L5.61666 18.9C5.88385 19.2041 6.03121 19.5951 6.03121 20C6.03121 20.4048 5.88385 20.7958 5.61666 21.1L3.49999 23.5C3.27013 23.7659 3.13023 24.0977 3.10029 24.448C3.07036 24.7982 3.15192 25.1489 3.33332 25.45L6.66666 31.2167C6.84182 31.5208 7.10852 31.7619 7.42874 31.9055C7.74897 32.0492 8.10636 32.0881 8.44999 32.0167L11.5833 31.3833C11.982 31.3009 12.3971 31.3673 12.7502 31.57C13.1033 31.7726 13.37 32.0975 13.5 32.4833L14.5167 35.5333C14.6326 35.8783 14.8583 36.1758 15.1593 36.3805C15.4602 36.5851 15.8199 36.6856 16.1833 36.6667H22.85C23.1994 36.6676 23.5402 36.5586 23.8244 36.3553C24.1085 36.1519 24.3215 35.8644 24.4333 35.5333L25.45 32.4833C25.58 32.0975 25.8467 31.7726 26.1998 31.57C26.5529 31.3673 26.968 31.3009 27.3667 31.3833L30.5 32.0167C30.8436 32.0881 31.201 32.0492 31.5212 31.9055C31.8415 31.7619 32.1082 31.5208 32.2833 31.2167L35.6167 25.45C35.7936 25.1455 35.8696 24.7928 35.8336 24.4425C35.7977 24.0921 35.6517 23.7622 35.4167 23.5L33.1667 21.1ZM30.6833 23.3333L32.0167 24.8333L29.8833 28.5333L27.9167 28.1333C26.7163 27.888 25.4676 28.0919 24.4076 28.7063C23.3477 29.3208 22.5502 30.3031 22.1667 31.4667L21.5333 33.3333H17.2667L16.6667 31.4333C16.2831 30.2697 15.4856 29.2875 14.4257 28.673C13.3657 28.0585 12.117 27.8546 10.9167 28.1L8.94999 28.5L6.78332 24.8167L8.11666 23.3167C8.93658 22.4 9.38988 21.2132 9.38988 19.9833C9.38988 18.7534 8.93658 17.5667 8.11666 16.65L6.78332 15.15L8.91666 11.4833L10.8833 11.8833C12.0837 12.1287 13.3324 11.9248 14.3923 11.3103C15.4523 10.6958 16.2497 9.71359 16.6333 8.54999L17.2667 6.66665H21.5333L22.1667 8.56665C22.5502 9.73025 23.3477 10.7125 24.4076 11.327C25.4676 11.9415 26.7163 12.1454 27.9167 11.9L29.8833 11.5L32.0167 15.2L30.6833 16.7C29.8726 17.6146 29.4249 18.7945 29.4249 20.0167C29.4249 21.2389 29.8726 22.4187 30.6833 23.3333ZM19.4 13.3333C18.0814 13.3333 16.7925 13.7243 15.6962 14.4569C14.5999 15.1894 13.7454 16.2306 13.2408 17.4488C12.7362 18.6669 12.6042 20.0074 12.8614 21.3006C13.1187 22.5938 13.7536 23.7817 14.6859 24.714C15.6183 25.6464 16.8062 26.2813 18.0994 26.5386C19.3926 26.7958 20.733 26.6638 21.9512 26.1592C23.1694 25.6546 24.2106 24.8001 24.9431 23.7038C25.6757 22.6075 26.0667 21.3185 26.0667 20C26.0667 18.2319 25.3643 16.5362 24.114 15.2859C22.8638 14.0357 21.1681 13.3333 19.4 13.3333ZM19.4 23.3333C18.7407 23.3333 18.0963 23.1378 17.5481 22.7716C16.9999 22.4053 16.5727 21.8847 16.3204 21.2756C16.0681 20.6665 16.0021 19.9963 16.1307 19.3497C16.2593 18.7031 16.5768 18.1091 17.043 17.643C17.5091 17.1768 18.1031 16.8593 18.7497 16.7307C19.3963 16.6021 20.0665 16.6681 20.6756 16.9204C21.2847 17.1727 21.8053 17.5999 22.1716 18.1481C22.5378 18.6963 22.7333 19.3407 22.7333 20C22.7333 20.884 22.3821 21.7319 21.757 22.357C21.1319 22.9821 20.284 23.3333 19.4 23.3333Z" fill="#D9D9D9"/>
                    </svg>
                </button>
            </div>
            <p>Выйти</p>
        </div>
        <div class="body">
            <div class="body__blur"></div>
            <form class="settings__window">
                <span v-on:click="closeWindow" class="close__window">
                    <img src="@/assets/images/Exit.svg" width="15" height="25"/>
                </span>
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
                    <input type="file" id="upload__form" class="upload__form" multiple>
                    <label for="upload__form" class="upload__btn">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="42" height="42" rx="5.5" stroke="white"/>
                        <rect x="5" y="19" width="33" height="6" fill="#00FF00"/>
                        <rect x="18.5" y="38.5" width="33" height="6" transform="rotate(-90 18.5 38.5)" fill="#00FF00"/>
                        </svg>
                    </label>
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
        },
        openWindow(){
            let newWindow = document.getElementsByClassName('settings__window')[0];
            let windowBlur = document.getElementsByClassName('body__blur')[0];
            let settingBtn = document.querySelector('button.open__window svg path');

            newWindow.style.display = 'grid';
            windowBlur.style.display = 'block';
            settingBtn.style.fill = '#00FF00';
        },
        closeWindow(){
            let newWindow = document.getElementsByClassName('settings__window')[0];
            let windowBlur = document.getElementsByClassName('body__blur')[0];
            let settingBtn = document.querySelector('button.open__window svg path');

            newWindow.style.display = 'none';
            windowBlur.style.display = 'none';
            settingBtn.style.fill = '#F6F6F6';
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

        let uploadForm = document.getElementById('upload__form');
        let closeBtn = document.querySelectorAll('label.upload__btn svg rect:not(:first-child)');

        uploadForm.addEventListener('change', function () {
            if (uploadForm.files && uploadForm.files.length >= 1) {
                for (var i = 0; i < uploadForm.files.length; i++){
                    this.files.push( uploadForm.files[i] );
                }
                
                closeBtn.forEach(function(elem){
                    elem.style.fill = '#F6F6F6';
                })
            }
        }.bind(this))
    }
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
.open__window {
    background: none;
    border: none;
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
.close__window {
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
.save__info:hover {
    background-color: #F6F6F6;
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
.upload__form {
    display: none;
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