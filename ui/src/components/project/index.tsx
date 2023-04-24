import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function SingleProject({ company, title, description, link = "", features, photo }: { company: string, title: string, description: string, link?: string, photo: string, features: { name: string, description: string, icon: any }[] }) {
    return (
        <div className="overflow-hidden bg-gray-900 py-12 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">{company}</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                {description}
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            {link !== "" ?
                                <a href={link} className="font-semibold text-indigo-500 flex items-center mt-6">See more&nbsp;<ArrowRightIcon className="w-4" /></a>
                                :
                                <></>
                            }
                        </div>
                    </div>
                    <img
                        src={photo}
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}