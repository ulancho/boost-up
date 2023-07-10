import React from 'react';

const FirstLoginPage = () => {
    return (
        <div className="login-container">
            <div className="text-align-center max-width570 ">
                <h4>Добро пожаловать</h4>
                <p className="gray-font">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable.{' '}
                </p>
                <div>
                    <div class="circle">1</div>
                    <div className="dash"></div>
                    <div class="circle">2</div>
                    <div className="dash"></div>
                    <div class="circle">3</div>
                </div>
            </div>
            <form action="">
                <div className="login-form text-align-center">
                    <span className="text-left">
                        <div className="circle width-24">1</div>
                        <p className="orange-color fs-25 fw-5">Информация о тебе</p>
                    </span>
                    <p className="text-align-left fs-16 fw-3 gray-font">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut.
                    </p>
                    <div class="form-group">
                        <label for="name">
                            <p>Имя</p>
                        </label>
                        <input type="text" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="lastname">
                            <p>Фамилия</p>
                        </label>
                        <input type="text" name="lastname" />
                    </div>
                    <div class="form-group">
                        <label for="surname">
                            <p>Отчество</p>
                        </label>
                        <input type="text" name="surname" />
                    </div>
                    <p className="text-align-left fs-14 fw-4 gray-font ml-0">
                        Укажи дату своего рождения
                    </p>
                    <div className="center-wrapper wrap-items ">
                        <div className="form-group width190 mr-20 mt-0">
                            <label for="day">
                                <p>День</p>
                            </label>
                            <select name="day"></select>
                        </div>
                        <div className="form-group width190 mr-20 mt-0">
                            <label for="month">
                                <p>Месяц</p>
                            </label>
                            <select name="month"></select>
                        </div>
                        <div className="form-group width190 mt-0">
                            <label for="year">
                                <p>Год</p>
                            </label>
                            <select id="select_year" start="1900" end="2022" name="year"></select>
                        </div>
                    </div>
                    <div class="form-group">
                        <p className="text-align-left fs-14 fw-4 gray-font">
                            Место учебы (текущее или последнее образовательное учреждение)
                        </p>
                        <input type="text" />
                    </div>
                    <div class="form-group">
                        <p className="text-align-left fs-14 fw-4 gray-font">
                            Образовательные курсы (какие курсы прошли по IT)
                        </p>
                        <input type="text" />
                    </div>
                    <div className="center-wrapper">
                        <div class="form-group width300 mr-20">
                            <p className="text-align-left fs-14 fw-4 gray-font">
                                Номер телефона (номер должен быть
                                <br /> зарегистрирован в Telegram или WhatsApp)
                            </p>
                            <select></select>
                        </div>
                        <div class="form-group width300 pt-12">
                            <p className="text-align-left fs-14 fw-4 gray-font">Направление </p>
                            <select></select>
                        </div>
                    </div>
                    <button className="btn gray-btn">Далее</button>
                </div>
            </form>
        </div>
    );
};

export default FirstLoginPage;
