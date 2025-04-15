import Image from 'next/image'

export const LeadershipSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our Leadership
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Meet the dedicated professionals behind Dentech.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 shadow-sm">
                        <div className="lg:w-1/3">
                            <div className="relative w-64 h-64 mx-auto">
                                <Image
                                    src="/images/jane-kaminski.webp"
                                    alt="Jane E. Kaminski"
                                    fill
                                    className="object-cover rounded-full shadow-lg"
                                    priority
                                />
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Jane E. Kaminski
                                </h3>
                                <p className="text-lg font-medium text-primary-600">
                                    Chief Executive Officer
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                Today, under the helm of Jane Kaminski, Dentech continues to provide technology-leading 
                                solutions for dental practice management software. With Dentech NextGen, Jane brings the next 
                                leap forward introducing not only next-gen technology, but also challenging the status quo 
                                as a female software business leader.
                            </p>
                            
                            <blockquote className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                                <p className="italic text-gray-700">
                                    &quot;With over 40 years of service to our customers and the dental industry as a whole we are 
                                    excited for what lies ahead for us as a company, for our customers and the entire dental 
                                    industry. It is my goal to not only continue the legacy that my father has built, but to 
                                    also leverage modern day technology so that we can continue to provide world class solutions 
                                    for our customers.&quot;
                                </p>
                            </blockquote>

                            <p className="text-gray-600 leading-relaxed">
                                &quot;We will stay committed to servicing our customers and the dental industry with the care 
                                and concern that we are known for while staying on the cutting edge of technology. We look 
                                forward to the next 40 years and we thank each of our customers who have supported us and 
                                helped us build the company and products that we are today.&quot;    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}