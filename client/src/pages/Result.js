import React, { useEffect } from "react";
import './Result.css'
import { Link } from "react-router-dom";
import ResultTable from "../components/ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attempts_Number ,earnPoints_Number, finalResult} from "../resultCounter/resultCounter";
import { usePublishResult } from "../hooks/setResult";

export default function Result() {

    const dispatch =useDispatch()
    const {questions : {queue,answers}, result: {result,userId}}=useSelector(state =>state)

   

    const totalPoints =queue.length * 10;
    const attempts = attempts_Number(result)
    const earnPoints=earnPoints_Number(result,answers, 10)
    const final = finalResult (totalPoints, earnPoints)

  usePublishResult({result,
     username:userId,
      attempts,
       points:earnPoints,
        achieved:final?"Passed":"Failed"});


    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    return(
        <div className="container">
            <h1 className="title text-light">Quiz</h1>

            <div className="result flex-center">
                <div className="flex">
                    <span>Username</span>
                    <span className="bold">{userId}</span>
                </div>
                <div className="flex">
                    <span>Iš viso taškų:</span>
                    <span className="bold">{totalPoints || 0}</span>
                </div>
                <div className="flex">
                    <span>Iš viso klausimų:</span>
                    <span className="bold">{queue.length || 0}</span>
                </div>
                <div className="flex">
                    <span>Iš viso bandymų:</span>
                    <span className="bold">{attempts || 0}</span>
                </div>
                <div className="flex">
                    <span>Iš viso pelnyta taškų:</span>
                    <span className="bold">{earnPoints || 0}</span>
                </div>
                <div className="flex">
                    <span>Quiz rezultatai</span>
                    <span style ={{color : `${final ? "#2aff95" : "#ff2a66"}`}}className="bold">{final ? "Išlaikyta" : "Neišlaikyta"}</span>
                </div>
            </div>
            <div className="start">
                <Link className="btn" to={'/'} onClick={onRestart}>Pradėti iš naujo</Link>
            </div>

            <div className="container">
<ResultTable></ResultTable>
            </div>
        </div>
    )
}