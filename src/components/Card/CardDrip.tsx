import dripstore from '../../assets/img/dripstore.png'
import Image from 'next/image';


function Card() {
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image className="rounded-t-lg" src={dripstore} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-commerce DripStore</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A Drip Store, é um projeto de estudos, disponibilizado pela instituição de ensino Digital College, visando proporcionar aos discentes, uma experiência realista, no desenvolvimento de uma plataforma de vendas online (e-commerce).</p>
                    <a href="https://dripstore.vercel.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Deploy
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;