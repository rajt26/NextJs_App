import Head from 'next/head';
import HomePage from '../components/home/home'


export const getStaticProps = async () => {
    const { events_categories } = await import('../data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}
const index = ({ data }) => {
    return (
        <>
            <div>
                <Head>
                    <title>NextJs App</title>
                </Head>
                <HomePage data={data} />
            </div>
        </>
    )
}

export default index
