import React from 'react';
import Image from 'next/image';

const Gallery: React.FC = () => {
    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <div className="col-span-2 row-span-2 md:col-start-3 md:row-start-1 rounded shadow-sm">
                    <Image
                        src="/images/photo6.jpg"
                        alt="Gallery image"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="rounded shadow-sm"
                    />
                </div>
                <Image
                    src="/images/photo4.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo1.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo2.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo3.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo4.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo5.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo6.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <Image
                    src="/images/photo3.jpg"
                    alt="Gallery image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="rounded shadow-sm"
                />
                <div className="col-span-2 row-span-2 md:col-start-1 md:row-start-3 rounded shadow-sm">
                    <Image
                        src="/images/photo3.jpg"
                        alt="Gallery image"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="rounded shadow-sm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
