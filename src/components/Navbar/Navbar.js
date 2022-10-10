import React from "react";
import { NavContainer } from "./styles";

const Navbar = () => {

    return (
        <>
            <NavContainer>
                <div>
                    <img src="https://res.cloudinary.com/depp3dev/image/upload/v1665329506/Logos/infosis/logo-infosis_oepkoh.svg" alt="" />
                </div>
                <div>
                    <h2>Horas <span>Extras</span></h2>
                </div>
                <div>
                    <a href="/login">Administrar</a>
                </div>
            </NavContainer>
        </>
    );
};

export default Navbar;