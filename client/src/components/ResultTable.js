import React, { useEffect, useState } from "react";
import { getServerData } from "../resultCounter/resultCounter";

export default function ResultTable () {

    const[data, setData]=useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
            setData(res)
        })
    })
    return(
        <div>
            <table>
                <thead className="tabel-header">
                    <tr className="table-row">
                        <td>Vardas</td>
                        <td>Bandymai</td>
                        <td>Pelnyti taškai</td>
                        <td>Rezultatas</td>
                    </tr>

                </thead>
                <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achieved || ""}</td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}