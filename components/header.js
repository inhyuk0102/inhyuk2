import Link from "next/link";


export default function Header(){
    return(
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    
                <Link legacyBehavior href="/">

                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />

                    </svg>

                    <span className="ml-3 text-xl">클라우드</span>
                    </a>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">                    
                    <Link legacyBehavior href="/about-cloud">
                        <a className="mr-5 hover:text-gray-900">클라우드 동아리 소개</a>
                    </Link>

                    </nav>
                </div>
            </header>
        </>
    );
}