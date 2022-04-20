export function Footer() {
    return (
        <footer className="footer bg_blue py-3">
            <div className="container">
                <div className="row">
                    <div
                        className="footer__wrapper col py-3 mb-4 my d-flex justify-content-between align-items-center flex-wrap">
                        <a href="#">
                            <p className="header__logo me-3">HELPTOUKR</p>
                        </a>

                        <img src="./emblem.svg" alt="Trident"/>

                        <div className="footer__info d-flex flex-column text-end">
                            <a href="tel:+380504902673" className="fs-4">+ 38 (050) 490-26-73</a>
                            <a href="mailto:vashaorganizaciya@mail.ua">vashaorganizaciya@mail.ua</a>
                        </div>
                    </div>
                    <div className="footer__descr text-white">
                        <p className="fw-bold">Про проект</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Enim ipsa nihil eius aperiam
                            fugiat dolorum iure quis. Deleniti, repellat
                            consequuntur placeat sit veritatis at distinctio
                            exercitationem a voluptas, ad odit.
                        </p>
                    </div>
                    <p className="copyright">Helptoukr © 2022</p>
                </div>
            </div>
        </footer>
    );
}