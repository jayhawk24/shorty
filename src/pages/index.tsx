import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Curve from "../components/CreateLinkForm/Curve";
import Header from "../components/Header/Header";

const CreateLinkForm = dynamic(
    () => import("../components/CreateLinkForm/CreateLink"),
    {
        ssr: false
    }
);

const Home: NextPage = () => {
    return (
        <div className="bg-secondary-100 h-screen w-screen px-20 overflow-hidden">
            <Header />
            <Suspense>
                <CreateLinkForm />
            </Suspense>
            <Curve />
        </div>
    );
};

export default Home;
