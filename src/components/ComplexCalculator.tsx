import { useState } from "react";

function CalculatorComplex() {
    const [kijelzo, setKijelzo] = useState("0");
    const [elsoSzam, setElsoSzam] = useState(0);
    const [muvelet, setMuvelet] = useState("");

    function szamBevitel(szam: string) {
        if (kijelzo === "Hiba" || kijelzo === "Nullával nem osztható") {
            setKijelzo(szam);
        }
        else if (szam === "." && kijelzo.includes(".")) {
            return;
        }
        else if (kijelzo === "0" && szam !== ".") {
            setKijelzo(szam);
        }
        else {
            setKijelzo(kijelzo + szam);
        }
    }

    function muveletValasztas(m: string) {
        setElsoSzam(Number(kijelzo));
        setMuvelet(m);
        setKijelzo("0");
    }

    function szamitas() {
        const masodikSzam = Number(kijelzo);
        let eredmeny = 0;

        if (muvelet === "+") {
            eredmeny = elsoSzam + masodikSzam;
        }
        else if (muvelet === "-") {
            eredmeny = elsoSzam - masodikSzam;
        }
        else if (muvelet === "*") {
            eredmeny = elsoSzam * masodikSzam;
        }
        else if (muvelet === "/") {
            if (masodikSzam === 0) {
                setKijelzo("Nullával nem osztható");
                setMuvelet("");
                return;
            }

            eredmeny = elsoSzam / masodikSzam;
        }
        else {
            setKijelzo("Hiba");
            return;
        }

        setKijelzo(String(eredmeny));
        setMuvelet("");
    }

    function torles() {
        setKijelzo("0");
        setElsoSzam(0);
        setMuvelet("");
    }

    return (
        <div className="calculator">
            <div className="kijelzo">
                {kijelzo}
            </div>

            <div className="gombok">
                <button className="torles" onClick={torles}>C</button>
                <button onClick={() => muveletValasztas("/")}>÷</button>
                <button onClick={() => muveletValasztas("*")}>×</button>
                <button onClick={() => muveletValasztas("-")}>−</button>

                <button onClick={() => szamBevitel("7")}>7</button>
                <button onClick={() => szamBevitel("8")}>8</button>
                <button onClick={() => szamBevitel("9")}>9</button>
                <button onClick={() => muveletValasztas("+")}>+</button>

                <button onClick={() => szamBevitel("4")}>4</button>
                <button onClick={() => szamBevitel("5")}>5</button>
                <button onClick={() => szamBevitel("6")}>6</button>
                <button onClick={() => szamBevitel("1")}>1</button>

                <button onClick={() => szamBevitel("2")}>2</button>
                <button onClick={() => szamBevitel("3")}>3</button>
                <button onClick={() => szamBevitel("0")}>0</button>
                <button onClick={() => szamBevitel(".")}>.</button>

                <button className="egyenlo" onClick={szamitas}>=</button>
            </div>
        </div>
    );
}

export default CalculatorComplex;