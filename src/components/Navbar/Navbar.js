import React from "react";
import { NavContainer } from "./styles";

const Navbar = () => {

    return (
        <>
            <NavContainer>
                <div>
                    <img src="" alt="" />
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