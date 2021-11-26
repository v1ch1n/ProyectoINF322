import "./Home.css";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import DataInfo from "../../components/DataInfo/DataInfo";
import Graphs from "../../components/Graphs/Graphs";


export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <DataInfo />
            <Graphs />
        </div>
    )
}
