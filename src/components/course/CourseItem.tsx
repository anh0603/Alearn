import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconClock, IconEye, IconStar } from '../icons';

const CourseItem = () => {
    const courseInfo = [
        {
            title: "2200",
            icon: (className?: string) => <IconEye className={className} />
        },
        {
            title: "5.0",
            icon: (className?: string) => <IconStar className={className} />
        },
        {
            title: "3h25p",
            icon: (className?: string) => <IconClock className={className} />
        }
    ];
    return (
        <div className='bg-white dark:bg-grayDarker border dark:border-opacity-10 border-gray-200 p-4 rounded-2xl'>
            <Link href='#' className='block h-[200px] relative'>
                <Image
                    src='https://plus.unsplash.com/premium_vector-1720102933713-e3ad74c8b32c?q=80&w=1270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='Sample Course'
                    width={600}
                    height={400}
                    className='w-full h-full object-cover rounded'
                    sizes='@media (min-width:640px) 300px, 100vh'
                    priority
                />
                <span className='inline-block px-3 py-1 absolute top-3 right-3 z-10 
                text-white font-medium bg-green-500 text-xs rounded-full'>
                    new
                </span>
            </Link>
            <div className='pt-4'>
                <h3 className='font-bold text-lg mb-3'>
                    Khóa học NextJs Pro - Xây dựng E - Learning system hoàn chỉnh
                </h3>
                <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
                    {courseInfo.map((item, index) => (
                        <div className="flex items-center gap-1" key={index}>
                            {item.icon('size-4')}
                            <span>{item.title}</span>
                        </div>
                    ))}
                    <span className='font-bold text-base text-primary ml-auto'>899.000</span>
                </div>

                <Link href='#'
                    className='block flex items-center 
                    justify-center w-full mt-10 h-10
                    rounded-lg bg-primary text-white font-semibold'
                >
                    Xem chi tiết
                </Link>
            </div>
        </div>
    );
}

export default CourseItem;
