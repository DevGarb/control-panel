import React from "react";
import Image from "next/image";
import photo from "../../assets/img/mypic.png";

const Hero1 = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 max-lg:hidden">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Meet our leadership
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                            vitae elementum enim vitae ullamcorper suspendisse.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col top-6 m-5">
                    <div className="bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                        <div className="flex-none sm:flex items-center">
                            <div className="relative h-72 w-72 sm:mb-0 mb-3">
                                <span>
                                    <Image
                                        quality={100}
                                        priority={true}
                                        src={photo}
                                        alt="Gabriel"
                                        className="rounded-2xl hover:scale-110 ease-in duration-300 size-"
                                    />
                                </span>
                                <a
                                    href="#"
                                    className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-600 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                            />
                                        </svg>
                                    </svg>
                                </a>
                            </div>
                            <div className="pt-4 flex-auto sm:ml-5 justify-evenly leading-10 text-lg">
                                <div className="flex items-center justify-between sm:mt-2">
                                    <div className="flex items-center">
                                        <div className="flex flex-col">
                                            <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                                                Gabriel Porto
                                                <div className="border w-44 border-gray-300 my-2"></div>
                                            </div>
                                            <div className="flex-auto text-gray-400 my-1">
                                                <span className="mr-3 ">
                                                    Desenvolvedor e Analista de Sistemas
                                                </span>
                                                <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                                                <span>Fortaleza - CE .</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5 text-yellow-400"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5 text-yellow-400"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5 text-yellow-400"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5 text-yellow-400"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="h-5 w-5 text-yellow-400"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1 inline-flex   items-center ml-2 space-x-2">
                                        <a href="https://www.behance.net/ajeeshmon" target="_blank">
                                            <svg
                                                className=" cursor-pointer w-9 h-9 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="48"
                                                height="48"
                                                viewBox="0 0 50 50"
                                            >
                                                <g
                                                    fill="none"
                                                    fill-rule="nonzero"
                                                    stroke="none"
                                                    stroke-width="1"
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    stroke-miterlimit="10"
                                                    stroke-dasharray=""
                                                    stroke-dashoffset="0"
                                                    font-family="none"
                                                    font-weight="none"
                                                    font-size="none"
                                                    text-anchor="none"
                                                    className="mix-blend-mode: normal"
                                                >
                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                    <g fill="#ffffff">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            x="0px"
                                                            y="0px"
                                                            width="50"
                                                            height="50"
                                                            viewBox="0 0 50 50"
                                                        >
                                                            <path d="M25,8c9.389,0,17,7.611,17,17c0,7.548-4.921,13.944-11.729,16.163c0.002-0.006,0.005-0.016,0.005-0.016	s-1.147-0.538-1.123-1.498c0.027-1.056,0-3.521,0-4.426c0-1.553-0.983-2.654-0.983-2.654s7.709,0.087,7.709-8.139	c0-3.174-1.659-4.825-1.659-4.825s0.871-3.388-0.302-4.825c-1.315-0.142-3.669,1.257-4.675,1.91c0,0-1.593-0.653-4.244-0.653	c-2.65,0-4.244,0.653-4.244,0.653c-1.005-0.653-3.36-2.052-4.675-1.91c-1.173,1.437-0.302,4.825-0.302,4.825	s-1.659,1.652-1.659,4.825c0,8.226,7.709,8.139,7.709,8.139s-0.777,0.878-0.946,2.168c-0.538,0.183-1.33,0.408-1.969,0.408	c-1.673,0-2.946-1.626-3.412-2.379c-0.46-0.742-1.403-1.365-2.281-1.365c-0.579,0-0.861,0.289-0.861,0.62	c0,0.331,0.811,0.562,1.347,1.175c1.129,1.294,1.109,4.202,5.132,4.202c0.437,0,1.329-0.107,2-0.198	c-0.004,0.916-0.005,1.882,0.009,2.447c0.024,0.96-1.123,1.498-1.123,1.498s0.003,0.01,0.005,0.016C12.921,38.944,8,32.548,8,25	C8,15.611,15.611,8,25,8z"></path>
                                                        </svg>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/ajeeshmon"
                                            target="_blank"
                                        >
                                            <svg
                                                className="cursor-pointer w-9 h-9 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                width="48"
                                                height="48"
                                                viewBox="0 0 172 172"
                                            >
                                                <g
                                                    fill="none"
                                                    fill-rule="nonzero"
                                                    stroke="none"
                                                    stroke-width="1"
                                                    stroke-linecap="butt"
                                                    stroke-linejoin="miter"
                                                    stroke-miterlimit="10"
                                                    stroke-dasharray=""
                                                    stroke-dashoffset="0"
                                                    font-family="none"
                                                    font-weight="none"
                                                    font-size="none"
                                                    text-anchor="none"
                                                    className="mix-blend-mode: normal"
                                                >
                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                    <g fill="#ffffff">
                                                        <path d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex pt-2  text-sm text-gray-400">
                                    <div className="flex-1 inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                                        </svg>
                                        <p className="">1.2k Followers</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <p className="">7 Projetos</p>
                                    </div>
                                    <a
                                        href="https://www.behance.net/ajeeshmon"
                                        target="_blank"
                                        className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-black rounded-full transition ease-in duration-300"
                                    >
                                        Confira!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero1;
