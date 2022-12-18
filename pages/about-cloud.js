import Layout from '../components/layout';
import AboutCloud from '../components/home/about-cloud';
import Link from 'next/link'
export default function aboutCloud(){
    return(
        <>
        <Layout>
            <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:w-2/3 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Step1 클라우드 동아리 소개</h1>

        <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/4 h-full bg-indigo-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">프로그래밍에 관심있다면? 클라우드</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">클라우드 동아리는 it 기술과 프로그램에 관심을 가진 친구들이 모여 프로그래밍을 배우거나 프로젝트를 제작하는 킹갓엠퍼러제너럴충무공마제스티 동아리입니다. </p>
            <AboutCloud/>
        </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
            </div>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
            </div>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <Link legacyBehavior href= "/id-program">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">계속</a>
                    </Link>

            </div>
        </div>
        </div>
    </div>
    </section>
        </Layout>
        </>

    );
}