import Banner from "../../Component/HomeCompopnent/Banner";
import Homesectionman from "../../Component/HomeCompopnent/Homesectionman";
import Navbar from "../Shered/Navbar";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
            <Banner></Banner>
            <div className="flex flex-col gap-y-20 mt-20 px-10 md:px-14 lg:px-10">
            <Homesectionman></Homesectionman>
            <Homesectionman></Homesectionman>
            <Homesectionman></Homesectionman>
            <Homesectionman></Homesectionman>
            </div>
            </div>
        </div>
    );
}

export default Home;