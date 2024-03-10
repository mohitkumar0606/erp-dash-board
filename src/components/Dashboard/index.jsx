import useAppContext from "../../context/use-app-context";

// eslint-disable-next-line react/prop-types
const App = () => {
    const { setCurrPage } = useAppContext();
    setCurrPage("dashboard");
    return (
        <>

        </>
    );
};

export default App;
