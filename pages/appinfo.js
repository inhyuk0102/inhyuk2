import Layout from '../components/layout';
import Link from 'next/link'
export default function ahrck(){
    return(
        <>
        <Layout>
                        <section className= "flex min-h-screen flex-col items-center justify text-gray-600 body-font">
            
            
         <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:w-2/3 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Step3 신청 안내</h1>

        <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-3/4 h-full bg-indigo-500"></div>
        </div>

        </div>
            <div className="container px-5 py-27 mx-auto flex flex-wrap">                
                
                
                <div className="flex flex-wrap w-full">

                <div className="lg:w-5/5 md:w-2/3 md:pr-10 md:py-6">
                    <div className="flex relative pb-20">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> 1</h2>
                        <p className="leading-relaxed">링크 접속</p>
                    </div>
                    </div>
                    <div className="flex relative pb-30">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                    </div>
                    <div className="flex-grow pl-4">                      
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> 2</h2>
                        <p className="leading-relaxed">신청지 작성</p>
                    </div>
                    </div>
                    <div className="flex relative pb-20">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    </div>
                    <div className="flex relative pb-20">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> 3</h2>
                        <p className="leading-relaxed">4월 1일 까지 제출</p>
                    </div>
                    </div>
                    <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider"> 4</h2>

                        <p className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">4월 8일 선발 발표</p>

                    </div>
                    <Link legacyBehavior href= "/apply">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">계속</a>
                    </Link>

                    </div>
                </div>                
                </div>
            </div>
            </div>
            </section>
        </Layout>
        </>

    );
}