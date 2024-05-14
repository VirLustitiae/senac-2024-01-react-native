import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";

export default function Routes() {
    const authCtx = useContext(AuthContext)

    return (
        <>
            {/* { !estaLogado && <RotasPublicas />}
            { estaLogado && <RotasPrivadas />} */}
            {authCtx.isAuthenticated ? <RotasPrivadas /> : <RotasPublicas />}
        </>
    )
}