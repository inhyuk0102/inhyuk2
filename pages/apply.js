import Layout from '../components/layout';
import Apply from '../components/home/apply';
import Link from 'next/link'
export default function apply(){
    return(
        <>
        <Layout>
            <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:w-2/3 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Step4 신청하기</h1>

        <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-full h-full bg-indigo-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-4/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">해당 링크를 통해 설문지를 작성해주세요.</h1>
            <Link legacyBehavior href="https://docs.google.com/forms/d/1k-jgkJnQQvdePP74uj-R0rBfVsCoJFmIQumqiJZsOiQ/edit">
                        <a className="text-3xl font-bold underline mr-5 hover:text-gray-900">신청하기</a>
                    </Link>
            <Apply/>
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
            </div>
        </div>
        </div>
    </div>
    </section>
        </Layout>
        </>

    );
}