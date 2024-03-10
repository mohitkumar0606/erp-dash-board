import { useContext } from "react";
import AppContext from "./app-context";

const useAppContext = () => {
    return useContext(AppContext);
}

export default useAppContext