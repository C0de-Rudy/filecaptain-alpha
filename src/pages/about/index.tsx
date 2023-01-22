import {NextPage} from 'next';
import { useSession } from 'next-auth/react';


const About: NextPage = () => { 
    const session = useSession()

    return (
        <div>
        <h1 className='bg-blue-400 text-black'>
            About Page
        </h1>
        <h1 className='text-yellow-600'>
            About FileCaptain
        </h1>
        </div>
    )

}

export default About;