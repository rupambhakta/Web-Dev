import { Inter } from "next/font/google";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Admin-Facebook",
    description: "Lorem huieop kaie sd",
};

export default function AdminLayout({ children }) {
    return (
        <>
        <span>Admin Navbar</span>
            {children}
        </>

    );
}
