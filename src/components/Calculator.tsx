import { useState } from "react"

export function Calculator() {

    const [szam, setSzam] = useState("")
    const [szam2, setSzam2] = useState("")
    const [muvelet, setMuvelet] = useState("")
    const [hiba, setHiba] = useState("");
    const [eredmeny, setEredmeny] = useState("");

    function Szamologep() {
        setHiba("");
        const egy = Number(szam);
        const ketto = Number(szam2);

        if (szam === "" || szam2 === "") {
            setHiba("Nem lehet üres a mező")
            return
        }
        if (muvelet == ("/") && ketto == 0) {
            setHiba("nem lehet nullával osztani")
            return
        }
        if (muvelet == ("/") && egy == 0) {
            setHiba("nem lehet nullát osztani")
            return
        }

        if (muvelet === "+") {
            setEredmeny(String(egy + ketto));
        }
        if (muvelet === "-") {
            setEredmeny(String(egy - ketto));
        }
        if (muvelet === "/") {
            setEredmeny(String(egy / ketto));
        }
        if (muvelet === "*") {
            setEredmeny(String(egy * ketto));
        }



    }

    return <>
        <div className="form-group">
            <label >Add meg az első számot: </label>
            <input type="text"
                value={szam}
                className="form-control"
                onChange={(e) => setSzam(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label >Add meg a második számot: </label>
            <input type="text"
                value={szam2}
                className="form-control"
                onChange={(e) => setSzam2(e.target.value)}
            />
        </div>

        <select className="form-select" value={muvelet}
            aria-label="Default select example"
            onChange={(e) => setMuvelet(e.target.value)}>

            <option selected>Válassz műveletet: </option>
            <option value="+">Összeadás</option>
            <option value="-">Kivonás</option>
            <option value="/">Osztás</option>
            <option value="*">Szorzás</option>
        </select>

        <button className='btn btn-success' onClick={Szamologep}>Számolás</button>


       {hiba && <p className="alert alert-danger">{hiba}</p>}

       {eredmeny && <p className="alert alert-success">{eredmeny}</p>}
        


    </>
}