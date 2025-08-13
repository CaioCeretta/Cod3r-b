import { useContext } from "react";
import ContextoEventos from "../contexts/ContextoEventos";

const useEvento = () => useContext(ContextoEventos)

export default useEvento

