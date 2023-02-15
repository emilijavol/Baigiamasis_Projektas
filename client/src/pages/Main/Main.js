import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "../../redux/result_reducer";
import './Main.css'

export default function Main() {
    const inputRef=useRef(null)
    const dispatch = useDispatch();

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    return(
        <div className="container">
            <h1 className="title text-light">Klausimynas</h1>
            <p>Taisyklės</p>
            <ol>
                <li>Klausimyne bus pateikti 5 klausimai.</li>
                <li>Teisingai atsakyto klausimo vertė yra 10 taškų.</li>
                <li>Kiekvienas klausimas turi tris atsakymo variantus.</li>
                <li>Prieš baigiant klausimyną yra galimybė pasitikrinti ir pakeisti atsakymą.</li>
                <li>Baigus spręsti bus pateikta rezultatų lentelė.</li>
            </ol>
            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*'/>
            </form>
            <div className="start">
        <Link className="btn" to={'quiz'} onClick={startQuiz}>Pradėti</Link>
            </div>
        </div>
    )
}