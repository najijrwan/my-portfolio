import { Outlet } from "react-router-dom";
import { Hero } from "@layout/hero";
import { Navbar } from "@layout";

const Layout = () => (
    <div
        className="
            my-[15px] mx-[12px] min-w-[259px]
            sm:mt-[60px] sm:mb-[100px] 
            lg:mb-[60px] 
            xl:max-w-[1200px] xl:mx-auto xl:flex xl:justify-center xl:items-stretch xl:gap-[25px]"
    >
        <Hero />
        <section
            className="
            lg:relative
            lg:w-max xl:min-w-[75%] xl:w-[75%] pb-5 lg:m-auto xl:m-0!"
        >
            <Navbar />
            <main>
                <Outlet />
            </main>
        </section>
    </div>
);

export default Layout;
