import React from "react";
import { Container, Header, Main } from "@components";
import Tabbar from "@components/Tabbar";
import useNavigation from "src/hooks/useNavigation";
import useStore from "src/store";

const Home: React.FC = () => {
    const navigationData = ["Home", "Discover", "Store", "Inbox", "Profile"];
    // const endPoint = "https://thronesapi.com/api/v2/Characters";

    const { currentRoute, setCurrentRoute } = useNavigation();

    const characters = useStore((state) => state.allCharacters);
    // const getCharacters = useStore((state) => state.getCharacters);

    console.log(characters);

    return (
        <Container>
            <Header
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Main />
            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
        </Container>
    );
};

export default Home;
