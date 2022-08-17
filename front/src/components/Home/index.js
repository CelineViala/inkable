import './index.scss';
import AppHeader from "../AppHearder";
import FilterSearch from "../FilterSearch";
import TattooCardsList from '../TattooCardsList';
import Terms from '../Terms';
const Home = () => {

    return (
        <>
            <AppHeader />
            <FilterSearch />
            <TattooCardsList />
            <Terms />
        </>
    )
};

export default Home;