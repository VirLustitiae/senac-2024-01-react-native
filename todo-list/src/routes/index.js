import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";

export default function Routes() {
    const estaLogado = false;

    return (
        <>
            {/* { !estaLogado && <RotasPublicas />}
            { estaLogado && <RotasPrivadas />} */}
            {estaLogado ? <RotasPrivadas /> : <RotasPublicas />}
        </>
    )
}