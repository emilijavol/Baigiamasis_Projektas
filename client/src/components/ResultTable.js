import React from "react";

export default function ResultTable () {
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
                    <tr className="table-body">
                        <td>dEmilija</td>
                        <td>03</td>
                        <td>20</td>
                        <td>Išlaikyta</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}