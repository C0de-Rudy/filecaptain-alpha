import { NextPage } from 'next';
import { useSession } from 'next-auth/react';


const Dashboard: NextPage = () => {
    console.log(useSession())
    return (<></>)
}

export default Dashboard