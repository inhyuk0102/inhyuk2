import Cloud from './cloud';
import Link from 'next/link';
import AboutCloud from './about-cloud';
export default function Hero() {
    return(
    
            <section className="flex min-h-screen flex-col items-center justify text-gray-600 body-font">
              <div className=" container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">선인고등학교
                    <br className="hidden lg:inline-block"/>
                  </h1>
                  <p className="mb-8 leading-relaxed">클라우드</p>
                  <div className="flex justify-center">
                    <Link legacyBehavior href= "/ahrck">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">시작</a>
                    </Link>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Cloud/>                    
                </div>
              </div>
            </section>
    
    )
}