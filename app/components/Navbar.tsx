import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Image from "next/image"

export default function Navbar(){
    return(
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        {/* <h1 className="text-2xl font-medium">
                            Og <span className=" text-teal-500">Blog</span>
                        </h1>*/}
                        <Image
                            src = "/KnowledgeWave.png"
                            alt="logo"
                            width={175}
                            height={50}
                            className=" m-2"
                        />
                    </Link> 
                    <Link href="/">
                    <h1 className="text-2xl font-bold text-black dark:text-white">Blogs</h1>
                    </Link>
                    <ThemeButton/>
                </div>
            </div>
        </div>
    )
}