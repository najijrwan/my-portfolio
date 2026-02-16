import { Outlet } from "react-router-dom";
import { Hero } from "@layout/hero";
import { Navbar } from "@layout";

const Layout = () => (
    <div
        className="
            min-w-[259px] xl:max-w-[1200px] mx-[12px] my-[15px] xl:mx-auto sm:mb-[100px]
            lg:mb-[60px] sm:mt-[60px] 
            xl:flex xl:justify-center xl:items-stretch xl:gap-[25px]"
    >
        <Hero />
        <div
            className="
                lg:relative
                sm:max-w-[520px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[900px] sm:mx-auto
                bg-eerie-2 border border-solid border-jet shadow-1 lg:shadow-5 rounded-[20px]
                animate-fade"
        >
            <Navbar />

            <main
                className="
                relative
                p-[20px] sm:p-[30px] lg:pt-0"
            >
                <Outlet />
            </main>
        </div>
    </div>
);

export default Layout;
