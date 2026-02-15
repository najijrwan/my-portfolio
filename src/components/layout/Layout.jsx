import { Outlet } from "react-router-dom";
import { Hero } from "@layout/hero";
import { Navbar } from "@layout";

const Layout = () => (
    <div
        className="
            min-w-[259px] xl:max-w-[1200px] mx-[12px] xl:mx-auto my-[15px] sm:mb-[100px]
            lg:mb-[60px] sm:mt-[60px] 
            xl:flex xl:justify-center xl:items-stretch xl:gap-[25px]"
    >
        <Hero />
        <section
            className="
                lg:relative
                lg:w-max xl:min-w-[75%] xl:w-[75%] pb-5 lg:m-auto xl:m-0!"
        >
            <Navbar />
            <main
                className="
                relative z-10
                sm:w-[520px] md:w-[700px] lg:w-[950px] xl:w-[900px]! xl:min-h-full sm:mx-auto
                p-[20px] sm:p-[30px]
                bg-eerie-2 rounded-[20px] border border-solid border-jet shadow-1
                lg:shadow-5
                animate-fade"
            >
                <Outlet />
            </main>
        </section>
    </div>
);

export default Layout;
