"use strict";

let switcher = document.querySelector('[type="checkbox"]');

function doThemeChange() {
    const isDarkMode = localStorage.getItem('doThemeChange') === 'true';
    const $body = document.querySelector('body');

    localStorage.setItem('doThemeChange', !isDarkMode)
    $body.classList.toggle('dark-mode', !isDarkMode)
};

switcher.addEventListener('change', (event) => {
    if (event.target.checked) {
        doThemeChange().remove();
    }
    else {
        doThemeChange();
    }
})

function onLoad() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('doThemeChange') === 'true' )
};

document.addEventListener('DOMContentLoaded', onLoad);


const students = [
    {
        "name": "Андреєв Вячеслав",
        "github": "https://github.com/SlavaAndreievvvv",
        "email": "andreiev.viacheslav@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/114100602?v=4"
    },

    {
        "name": "Шутька Інна",
        "github": "https://github.com/inna-shutka",
        "email": "inna102992@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/114100620?v=4"
    },

    {
        "name": "Маклаков Григорій",
        "github": "https://github.com/GregoryMaklakov",
        "email": "maklakov.grigory@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/105268946?v=4"
    },

    {
        "name": "Картавенко Богдан",
        "github": "https://github.com/bogdanKartavenko",
        "email": "bogdankartavenko@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/71920438?v=4"
    },

    {
        "name": "Микитенко Валерій",
        "github": "https://github.com/kasper93721",
        "email": "valeraa.mikitenkoo@gmail.com",
        "photo": "https://avatars.githubusercontent.com/u/114100530?v=4"
    },

    {
        "name": "Конопльов Владислав",
        "github": "https://github.com/chooh-chooh",
        "email": "v.konoplov@merge.rocks",
        "photo": "https://avatars.githubusercontent.com/u/114100580?v=4"
    }
]

let $studentsContainer = document.querySelector('.students');

students.reverse().map(user => { 
    return $studentsContainer.insertAdjacentHTML('afterbegin', `
    <div class="students__card card">
        <div class="card__wrapper-name">
            <img class="card__icon" src="${user.photo}" />
            <div class="card__inner">
                <p class="card__name">${user.name}</p>
                <div class="card__wrapper-email">
                    <svg
                        class="card__img-email"
                        viewBox="0 0 16 13"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.75 0.875H1.25C0.951631 0.875 0.665483 0.993526 0.454505 1.2045C0.243526 1.41548 0.125 1.70163 0.125 2V11C0.125 11.2984 0.243526 11.5845 0.454505 11.7955C0.665483 12.0065 0.951631 12.125 1.25 12.125H14.75C15.0484 12.125 15.3345 12.0065 15.5455 11.7955C15.7565 11.5845 15.875 11.2984 15.875 11V2C15.875 1.70163 15.7565 1.41548 15.5455 1.2045C15.3345 0.993526 15.0484 0.875 14.75 0.875ZM13.5125 2L8 5.81375L2.4875 2H13.5125ZM1.25 11V2.51187L7.67938 6.96125C7.77354 7.02657 7.8854 7.06158 8 7.06158C8.1146 7.06158 8.22646 7.02657 8.32062 6.96125L14.75 2.51187V11H1.25Z"
                        />
                    </svg>
                    <a href="mailto:${user.email}" class="card__email">${user.email}</a>
                </div>
            </div>
        </div>
        <div class="card__wrapper-github">
            <a class="card__github" href="${user.github}">
                <svg
                    class="card__img"
                    viewBox="0 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8992 1.56251C10.2078 1.56046 7.6035 2.51679 5.55296 4.26017C3.50243 6.00355 2.13962 8.42007 1.70868 11.0768C1.27773 13.7336 1.8068 16.457 3.20112 18.7591C4.59543 21.0613 6.76388 22.7918 9.318 23.6406C9.88519 23.7438 10.0914 23.3938 10.0914 23.0938C10.0914 22.825 10.0821 22.1125 10.0758 21.1672C6.92581 21.8516 6.26018 19.6484 6.26018 19.6484C5.74456 18.3391 5.00237 17.9922 5.00237 17.9922C3.97425 17.2891 5.0805 17.3031 5.0805 17.3031C6.218 17.3828 6.81487 18.4703 6.81487 18.4703C7.82581 20.2016 9.46644 19.7016 10.1117 19.4109C10.2149 18.6797 10.5086 18.1797 10.8305 17.8969C8.31487 17.6109 5.67112 16.6391 5.67112 12.2984C5.65477 11.173 6.0728 10.0845 6.83831 9.25938C6.72112 8.97188 6.33206 7.82188 6.94769 6.25938C6.94769 6.25938 7.90081 5.95626 10.0633 7.42188C10.9877 7.1705 11.9413 7.04231 12.8992 7.04063C13.8572 7.04243 14.8108 7.17062 15.7352 7.42188C17.8977 5.95626 18.8477 6.26094 18.8477 6.26094C19.4664 7.82032 19.0774 8.97188 18.9602 9.25938C19.6867 10.0516 20.1242 11.0609 20.1242 12.2984C20.1242 16.65 17.4758 17.6078 14.9524 17.8875C15.3586 18.2375 15.7211 18.9297 15.7211 19.9859C15.7211 21.5016 15.7071 22.7219 15.7071 23.0938C15.7071 23.3969 15.9117 23.75 16.4867 23.6391C19.0403 22.7892 21.2079 21.0579 22.6013 18.7553C23.9946 16.4527 24.5226 13.7293 24.0907 11.0728C23.6589 8.41639 22.2953 6.00048 20.2444 4.25785C18.1934 2.51522 15.5906 1.55972 12.8992 1.56251Z"
                    />
                </svg>
            </a>
        </div>
    </div>
    `);
});