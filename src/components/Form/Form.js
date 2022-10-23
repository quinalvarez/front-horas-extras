import React from "react";
import { SContainer, SForm } from "./styles";

export const Form = () => {

    return (
        <SContainer>
            <SForm>
                <div className="card">
                    <h4>Nombre y Apellido<span>*</span></h4>
                    <select name="Empleado" className="s__select">
                        <option value="Joaquin">Joaquin</option>
                        <option value="Claudio">Claudio</option>
                        <option value="Dante">Dante</option>
                    </select>
                </div>
                <div className="card">
                    <h4>Área<span>*</span></h4>
                    <select name="Area" className="s__select">
                        <option value="Desarrollo">Desarrollo</option>
                        <option value="QAManual">QA Manual</option>
                        <option value="QAAutomation">QA Automation</option>
                    </select>
                </div>
                <div className="card">
                    <h4>Proyecto<span>*</span></h4>
                    <select name="Area" className="s__select">
                        <option value="Desarrollo">QRoma</option>
                        <option value="QAManual">Caract España</option>
                        <option value="QAAutomation">Reportes</option>
                    </select>
                </div>
                <div className="card">
                    <h4>Valor hora<span>*</span></h4>
                    <div className="horas">
                        <div>
                            <input type="checkbox" name="Compensa" id="Hora" />
                            <label htmlFor="Compensa">Compensa</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Extra" id="Hora" />
                            <label htmlFor="Extra">Extra</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h4>Rango Fechas (Lunes)</h4>
                    <input className="fechas" type="date" name="" id="" />
                </div>
                <div className="card">
                    <h4>Rango Fechas (Domingo)</h4>
                    <input className="fechas" type="date" name="" id="" />
                </div>
                <div className="card">
                    <h4>Horas realizadas</h4>
                    <select name="horasRealizadas" className="s__select">
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                    </select>
                </div>
                <div className="card"></div>
                <div className="comments">
                    <h4>Observaciones adicionales</h4>
                    <textarea name="comentarios" id="comentarios"></textarea>
                </div>
                <button className="btn">Enviar</button>
            </SForm>
        </SContainer>
    );
};
