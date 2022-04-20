import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col py-1 mb-3 d-flex justify-content-between align-items-center">
                        <a href="./index.html">
                            <p className="header__logo me-3">HELPTOUKR</p>
                        </a>

                        <img src="./emblem.svg" alt="Trident"/>
                        {/*nav-menu*/}
                        <div className="d-flex justify-content-between align-items-center position-relative">
                            <button className="header__avatar mx-2">
                                <img className="user_avatar" src="./avatar.png" alt="user avatar"/>
                                <span className="upper-dot"></span>
                            </button>
                            {/*sdf*/}
                            {/*<!-- Если юзер залогинился показывается его аватарка, если нет, кнопка с юзером -->*/}
                            {/*<!-- <button*/}
                            {/*        type="button"*/}
                            {/*        class="header__button px-2 mx-2"*/}
                            {/*    >*/}
                            {/*        <img src="assets/icons/user.svg" alt="user" />*/}
                            {/*    </button> -->*/}
                            {/*sdf*/}

                            <button type="button" className="header__button mx-2 px-1">
                                <img src="./icons/add.svg" alt="add a trip"/>
                            </button>

                            <div className="nav-item dropdown">
                                <a className="nav-link header__button px-2 mx-2" href="#" role="button"
                                   id="dropdownMenuLink"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="./icons/horizontal_dot.svg" alt="menu"/>
                                </a>
 
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#"><img src="./assets/icons/menu/login.svg"
                                                                                   alt="login" className="me-4"/>
                                        <div>Вхід</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#"> <img src="./assets/icons/menu/car.svg"
                                                                                    alt="car"
                                                                                    className="me-4"/>
                                        <div>Вашi поїздки</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#"><img
                                        src="./assets/icons/menu/bell-ring.svg"
                                        alt="bell-ring" className="me-4"/>
                                        <div>Повідомлення</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#"><img src="./assets/icons/menu/volume.svg"
                                                                                   alt="volume" className="me-4"/>
                                        <div>Оголошення</div>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#"><img src="./assets/icons/menu/hands.svg"
                                                                                   alt="hands" className="me-3"/>
                                        <div>Підтримка</div>
                                    </a></li>
                                    <div className="underline"></div>
                                    <li><a className="dropdown-item" href="#"> <img
                                        src="./assets/icons/menu/sign-out.svg"
                                        alt="sing out" className="me-4"/>
                                        <div>Вийти</div>
                                    </a></li>
                                </ul>
                            </div>
                            
                            {/*ssf*/}
                            {/*<!-- dropdown файли для активних іконок -->*/}
                            {/*<!-- <div class="dropdown__profile">*/}
                            {/*    <div class="dropdown__item my-2">*/}
                            {/*        <img src="./assets/icons/menu/user.svg" alt="user" class="me-2" />*/}
                            {/*        <div>Профіль</div>*/}
                            {/*    </div>*/}
                            {/*    <div class="dropdown__item my-2">*/}
                            {/*        <div class="position-relative me-2 p-1">*/}
                            {/*            <img src="./assets/icons/menu/car.svg" alt="car" class="position-relative" />*/}
                            {/*            <span class="upper-dot"></span>*/}
                            {/*        </div>*/}
                            {/*        <div>Вашi поїздки</div>*/}
                            {/*    </div>*/}
                            {/*    <div class="dropdown__item my-2">*/}
                            {/*        <div class="position-relative me-2">*/}
                            {/*            <img src="./assets/icons/menu/bell-ring.svg" alt="bell-ring" class="me-2" />*/}
                            {/*            <span class="upper-dot_number">14</span>*/}
                            {/*        </div>*/}
                            {/*        <div>Повідомлення</div>*/}
                            {/*    </div>*/}
                            {/*</div> -->*/}
                            
                            {/*sff*/}

                        </div>
                        {/*sf*/}
                        {/*<!-- ./nav-menu -->*/}
                        {/*sf*/}

                    </div>
                </div>
            </div>
        </header>
    );
}