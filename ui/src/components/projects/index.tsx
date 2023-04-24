import SingleProject from "../project";
import datacentric from "../../assets/datacentric.png"
import thereigo from "../../assets/thereigo.png"
import rjvale from "../../assets/rjvale.png"
import { CommandLineIcon, UsersIcon} from '@heroicons/react/20/solid'


const featuresLangflow = [
    {
        name: 'Languages:',
        description:
        'The front-end of this project is made with React, Typescript and Tailwind. An API is used, via Axios, to connect to the backend, where all the data is fetched and processed with Python.',
        icon: CommandLineIcon,
    },
    {
        name: 'Participation:',
        description: 'In this project, a coworker and I were the responsibles for the React front-end, with me being the top contributor until the release.',
        icon: UsersIcon,
    },
]

const featuresDataCentric = [
    {
        name: 'Languages:',
        description:
        'The front-end of this project is made with React, Typescript and Tailwind. The connection with the back-end is made with GraphQL and Apollo.',
        icon: CommandLineIcon,
    },
    {
        name: 'Participation:',
        description: 'In this project, a coworker and I were the responsibles for the React front-end, with me being the top contributor.',
        icon: UsersIcon,
    },
]

const featuresThereIGo = [
    {
        name: 'Languages:',
        description:
        'The front-end of this project is made with Flutter and Dart. The back-end is a Firebase database.',
        icon: CommandLineIcon,
    },
    {
        name: 'Participation:',
        description: 'I am the full-stack developer for this project, and it was made from ground up for a client.',
        icon: UsersIcon,
    },
]

const featuresRJVale = [
    {
        name: 'Languages:',
        description:
        'The front-end of this project is made with Flutter and Dart. The back-end is a Firebase database.',
        icon: CommandLineIcon,
    },
    {
        name: 'Participation:',
        description: 'I am the full-stack developer for this project, and it was made from ground up for a client.',
        icon: UsersIcon,
    },
]

export default function MyProjects() {
    return (
        <div className="text-left">
            <div className="px-6 py-12 sm:pt-16 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Projects</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Here are the projects that I worked on and that made me proficient in the languages cited.
                    </p>
                </div>
            </div>
            <SingleProject company="Logspace" title="LangFlow" link="https://github.com/logspace-ai/langflow" description="LangFlow is a UI for LangChain, designed with react-flow to provide an effortless way to experiment and prototype flows." features={featuresLangflow} photo="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*MZGYVKtygrS1oNjK.png" />
            <SingleProject company="Logspace" title="DataCentric" description="DataCentric is a complete pipeline for integrating Artificial Intelligence into a dataset, that follows the user through the steps, from data annotation to the model training and prediction." features={featuresDataCentric} photo={datacentric} />
            <SingleProject company="Nevit Technology" title="ThereIGo" description="ThereIGo is a traveling social media, where the users can send albums, set up travel itineraries and contact professional tour guides." features={featuresThereIGo} photo={thereigo} />
            <SingleProject company="Nevit Technology" title="RJVale App" description="RJVale App is a clock up app for a medium business, including daily checklists and submitting help requests for the workers." features={featuresRJVale} photo={rjvale} />
        </div>
    )
}