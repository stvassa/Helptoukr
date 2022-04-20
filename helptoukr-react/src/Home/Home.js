export function Home() {
    return (
        <main className="main__content mbb">
            {/*f<!--Секція пошуку -->*/}
            <section className="container">
                <div className="box box_btm">
                    <div className="row justify-content-center align-items-start mb-5">
                        <div className="col-lg-3 col-6 text-center px-3 py-3">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#0057B880"
                                     className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <p className="pt-3">Напишіть місто відправлення</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 text-center px-3 py-3">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#0057B880"
                                     className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <p className="pt-3">Напишіть місто прибуття</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 text-center px-3 py-3">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#0057B880"
                                     className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <p className="pt-3">Напишіть час надсилання</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 text-center px-3 py-3">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#0057B880"
                                     className="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path
                                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                                <p className="pt-3">Натисніть кнопку "Шукати"</p>
                            </div>
                        </div>
                    </div>

                    <div className="container justify-content-center mb-3">
                        <div className="row mb-2 px-2">
                            <div className="col-md-4 my-2">
                                <div className="form p-1">
                                    <img className="mx-1" src="./icons/location.svg" alt=""/>
                                    <input type="text" className="inp" placeholder="Місто відправлення?"/>
                                </div>
                            </div>
                            <div className="col-md-4 my-2">
                                <div className="form p-1">
                                    <img className="mx-1" src="./icons/location.svg" alt=""/>
                                    <input type="text" className="inp" placeholder="Куди?"/>
                                </div>
                            </div>
                            <div className="col-md-4 my-2">
                                <div className="form p-1">
                                    <img className="mx-1" src="./icons/calendar.svg" alt=""/>
                                    <input type="text" className="inp" placeholder="Коли?"/>
                                </div>
                            </div>
                        </div>

                        <div className="d-grid px-2">
                            <button className="btn_big btn-primary py-4" type="button">
                                Шукати
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="main__content">
                <div className="container">
                    <div className="box text-center">
                        <h1 className="style_h1">Пропозиції</h1>
                    </div>
                    
                    <div className="accordion" id="accordionExample">
                        

                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                    <div className="row card-body align-items-center py-1">

                                        <span className="col-6 col-lg-2 badge add-badge">Створено</span>

                                        <div className="col-md-2 col-lg-2 h6 acc-title ms-2 my-2" id='calendar'>
                                            24.03.2022
                                        </div>

                                        <div className="col-md-4 col-lg-3 py-1">
                                            <span>Київ</span>
                                            <img className="img_arrow" width="15px" height="15px"
                                                 src="./icons/arrow-right.svg" alt=""/>
                                            <span className="">Херсон</span>
                                        </div>

                                        <div className="col py-1"> 2 людей</div>

                                        <div className="col-md-12 col-lg-3 py-1 d-flex align-items-center">
                                            <span className="acc-leybl">Ваша поїздка</span>
                                        </div>

                                    </div>

                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body border-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md py-1">
                                                <span className="acc-title">Місце відїзду:</span>
                                                <span>вул. кошиця, 3</span>
                                            </div>
                                            <div className="col-md py-1"><span className="acc-title">Попутні
                                                зупинки:
                                            </span><span>м.
                                                Запорїжжя</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Коментар:</span>
                                                <span>багажник великий, влізуть речі і тварини, перевагу
                                                надам жінкам з
                                                дітьми</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Статус:</span>
                                                <span>Заброньовано, очікуйте підтвердження від водія</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button type="button"
                                                    className="col-xs-2 col-md-4 col-lg-3 btn btn-danger mx-2 my-2">Скасувати
                                            </button>
                                            <div className="d-flex align-items-center col-xl-4">
                                                <a href="#" role="button" className="btn btn-outline-primary me-2 px-2 border-3
                                            my-2">Профіль пасажира</a>
                                                <button type="button" className="chat my-2">
                                                    <svg className="chat-icon">
                                                        <img src="./icons/send.svg"></img>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <div className="row card-body align-items-center py-1">

                                        <span className="col-6 col-lg-2 badge bg-primary">Підтверджено</span>

                                        <div className="col-md-2 col-lg-2 h6 acc-title ms-2 my-2" id='calendar'>
                                            24.03.2022
                                        </div>

                                        <div className="col-md-4 col-lg-3 py-1">
                                            <span>Київ</span>
                                            <img className="img_arrow" width="15px" height="15px"
                                                 src="./icons/arrow-right.svg" alt=""/>
                                            <span className="">Херсон</span>
                                        </div>

                                        <div className="col py-1"> 2 людей</div>

                                        <div className="col-md-12 col-lg-3 py-1 d-flex align-items-center">
                                            <span className="acc-leybl">Ваша поїздка</span>
                                        </div>

                                    </div>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body border-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md py-1">
                                                <span className="acc-title">Місце відїзду:</span>
                                                <span>вул. кошиця, 3</span>
                                            </div>
                                            <div className="col-md py-1"><span className="acc-title">Попутні
                                                зупинки:
                                            </span><span>м.
                                                Запорїжжя</span></div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Коментар:</span>
                                                <span>багажник великий, влізуть речі і тварини, перевагу
                                                надам жінкам з
                                                дітьми</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Статус:</span>поїздка
                                                підтверджена, по-приїзді натисніть завершення поїзди
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button type="button"
                                                    className="col-xs-2 col-md-4 col-lg-3 btn btn-danger mx-2 my-2">Скасувати
                                            </button>
                                            <a href="#" role="button" className="col-xs-2 col-md-4 col-lg-3 btn btn-outline-success border-3 mx-2
                                            my-2">Завершити</a>
                                            <div className="d-flex align-items-center col-xl-4">
                                                <a href="#" role="button" className="btn btn-outline-primary me-2 px-2 border-3
                                            my-2">Профіль пасажира</a>
                                                <button type="button" className="chat my-2">
                                                    <svg className="chat-icon">
                                                        <src src="./assets/icons/send.svg#send"></src>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    <div className="row card-body align-items-center py-1">

                                        <span className="col-6 col-lg-2 badge bg-secondary">Завершено</span>

                                        <div className="col-md-2 col-lg-2 h6 acc-title ms-2 my-2" id='calendar'>
                                            24.03.2022
                                        </div>

                                        <div className="col-md-4 col-lg-3 py-1">
                                            <span>Київ</span>
                                            <img className="img_arrow" width="15px" height="15px"
                                                 src="./icons/arrow-right.svg" alt=""/>
                                            <span className="">Херсон</span>
                                        </div>
                                        <div className="col py-1"> 2 людей</div>
                                        <div className="col-md-12 col-lg-3 py-1 d-flex align-items-center">
                                            <span className="acc-leybl">Ваша поїздка</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body border-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md py-1">
                                                <span className="acc-title">Місце відїзду:</span>
                                                <span>вул. кошиця, 3</span>
                                            </div>
                                            <div className="col-md py-1"><span className="acc-title">Попутні
                                                зупинки:
                                            </span><span>м.
                                                Запорїжжя</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Коментар:</span>
                                                <span>багажник великий, влізуть речі і тварини, перевагу
                                                надам жінкам з
                                                дітьми</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span
                                                className="acc-title">Статус:</span> поїздка
                                                завершена, дякуємо що Ви в безпеці
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    <div className="row card-body align-items-center py-1">
                                        <span className="col-6 col-lg-2 badge bg-secondary">Скасовано</span>
                                        <div className="col-md-2 col-lg-2 h6 acc-title ms-2 my-2" id='calendar'>
                                            24.03.2022
                                        </div>
                                        <div className="col-md-4 col-lg-3 py-1">
                                            <span>Київ</span>
                                            <img className="img_arrow" width="15px" height="15px"
                                                 src="./icons/arrow-right.svg" alt=""/>
                                            <span className="">Херсон</span>
                                        </div>
                                        <div className="col py-1"> 2 людей</div>
                                        <div className="col-md-12 col-lg-3 py-1 d-flex align-items-center">
                                            <span className="acc-leybl">Ваша поїздка</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body border-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md py-1">
                                                <span className="acc-title">Місце відїзду:</span>
                                                <span>вул. кошиця, 3</span>
                                            </div>
                                            <div className="col-md py-1"><span className="acc-title">Попутні
                                                зупинки:
                                            </span><span>м.
                                                Запорїжжя</span></div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Коментар:</span>
                                                <span>багажник великий, влізуть речі і тварини, перевагу
                                                надам жінкам з
                                                дітьми</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span
                                                className="acc-title">Статус:</span> поїздка
                                                скасована, створіть новий запит
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                    <div className="row card-body align-items-center py-1">
                                        <span className="col-6 col-lg-2 badge bg-secondary">Деактивовано</span>

                                        <div className="col-md-2 col-lg-2 h6 acc-title ms-2 my-2" id='calendar'>
                                            24.03.2022
                                        </div>

                                        <div className="col-md-4 col-lg-3 py-1">
                                            <span>Київ</span>
                                            <img className="img_arrow" width="15px" height="15px"
                                                 src="./icons/arrow-right.svg" alt=""/>
                                            <span className="">Херсон</span>
                                        </div>

                                        <div className="col py-1"> 2 людей</div>

                                        <div className="col-md-12 col-lg-3 py-1 d-flex align-items-center">
                                            <span className="acc-leybl">Ваша поїздка</span>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body border-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md py-1">
                                                <span className="acc-title">Місце відїзду:</span>
                                                вул. кошиця, 3
                                            </div>
                                            <div className="col-md py-1"><span className="acc-title">Попутні
                                                зупинки: </span>м.Запорїжжя
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Коментар:</span>
                                                багажник великий, влізуть речі і тварини, перевагу
                                                надам жінкам з
                                                дітьми
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span
                                                className="acc-title">Статус:</span> дата поїздки
                                                пройшла, створіть новий запит
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item card">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                    <div className="row card-body align-items-center py-1">

                                        <span className="col-6 col-lg-2 badge bg-warning text-dark">Зарезервовано</span>

                                        <div className="col-md-2 col-lg-2 h6 acc-title ms-2 my-2" id='calendar'>
                                            24.03.2022
                                        </div>

                                        <div className="col-md-4 col-lg-3 py-1">
                                            <span>Київ</span>
                                            <img className="img_arrow" width="15px" height="15px"
                                                 src="./icons/arrow-right.svg" alt=""/>
                                            <span className="">Херсон</span>
                                        </div>

                                        <div className="col py-1"> 2 людей</div>

                                        <div className="col-md-12 col-lg-3 py-1 d-flex align-items-center">
                                            <span className="acc-leybl">Ваша поїздка</span>
                                        </div>

                                    </div>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body border-top">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md py-1">
                                                <span className="acc-title">Місце відїзду:</span>
                                                вул. кошиця, 3
                                            </div>
                                            <div className="col-md py-1"><span className="acc-title">Попутні
                                                зупинки:
                                            </span>м.Запорїжжя
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span className="acc-title">Коментар:</span>
                                                багажник великий, влізуть речі і тварини, перевагу
                                                надам жінкам з
                                                дітьми
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 py-1"><span
                                                className="acc-title">Статус:</span> поїздка
                                                зарезервована, підтвердіть виїзд
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button type="button"
                                                    className="col-xs-2 col-md-4 col-lg-3 btn btn-danger mx-2 my-2">Скасувати
                                            </button>
                                            <button type="button"
                                                    className="col-xs-2 col-md-4 col-lg-3 btn btn-primary mx-2 my-2">Підтвердити
                                            </button>
                                            <div className="d-flex align-items-center col-xl-4">
                                                <a href="#" role="button" className="btn btn-outline-primary me-2 px-2 border-3
                                            my-2">Профіль пасажира</a>
                                                <button type="button" className="chat my-2">
                                                    <svg className="chat-icon">
                                                        <img src="./icons/send.svg#send">
                                                        </img>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-grid text-center">
                        <button className="btn_big btn-primary py-4" type="button">
                            Більше
                        </button>
                    </div>
                </div>
            </section>
            
            <section className="main__content box_btm">
                <div className="container">
                    <div className="box text-center">
                        <h1 className="style_h1 mb-5">Оголошення</h1>
                        <div className="d-flex justify-content-center">
                            <div className="d-inline-block">
                                <div className="form align-items-center">
                                    <button className="mx-2 style_form">+</button>
                                    <input type="text" className="inp" placeholder="Фільтр?"/>
                                    <button type="button" className="mx-3">
                                        <img src="./icons/filter.svg" alt=""/>
                                    </button>
                                </div>
                            </div>
                            <button type="button" className="mx-3">
                                <img src="./icons/blue_plus.svg" width="62px" height="62px" alt=""/>
                            </button>
                        </div>
                    </div>

                    <div id="cardO" className="card mb-3">
                        <div className="row card-body align-items-center py-3">
                            <div className="col-12 col-md-4 px-2 py-1">
                                <span className="mx-2">Київ</span>
                                <img className="img_arrow mx-2" width="15px" height="15px"
                                     src="./icons/arrow-right.svg"
                                     alt=""/>
                                <span className="mx-2">Херсон</span>
                            </div>
                            <div className="col-12 col-md-3 px-2 py-1">
                                <span className="flex-shrink-0">2 людей</span>
                            </div>
                            <div className="col-12 col-md-5 px-2 py-1">
                            <span>Доброго дня, заберіть мене, будь ласка, з
                                Києва кудись в Польщу</span>
                            </div>
                        </div>
                    </div>

                    <div className="d-grid text-center">
                        <button className="btn_big btn-primary py-4" type="button">
                            Більше
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}