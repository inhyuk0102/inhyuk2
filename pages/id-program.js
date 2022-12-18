import Layout from '../components/layout';
import Gaming from '../components/home/gaming';
import Link from 'next/link'
import { TOKEN, DATABASE_ID } from './config';
export default function idprograms (){
    return(
        <Layout>
            <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:w-2/3 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Step2 프로그램 소개</h1>

        <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/2 h-full bg-indigo-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">당신이 원하는 프로그램 뭐든지!</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">작년 2022 클라우드 동아리는 관심있는 주제가 비슷한 친구들 끼리 협업하여 여러가지 프로그램을 제작하였습니다.</p>
            
            <Gaming/>
            <Link legacyBehavior href="https://drive.google.com/drive/folders/18DqPJygiX2Gwyio7PVE3O-yv7uN3baTP?usp=share_link">
                        <a className="text-3xl font-bold underline mr-5 hover:text-gray-900">프로그램 살펴보기</a>
                    </Link>

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
                <Link legacyBehavior href= "/appinfo">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">계속</a>
                    </Link>

            </div>
        </div>
        </div>
    </div>
    </section>
        </Layout>
    )
}
