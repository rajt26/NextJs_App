import SinglePageEvent from '../../../components/events/singlePageEvent'

export const getStaticPaths = async () => {
    const { allEvents } = await import('../../../data/data.json')
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                ecat: path.city,
                id: path.id.toString(),
                name: path.title
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { allEvents } = await import('../../../data/data.json')
    const id = context?.params?.id
    const data = allEvents.find((event) => event.id === id)

    return {
        props: { data }
    }
}

const EventPage = ({ data }) => {
    return (
        <>
            <SinglePageEvent data={data} />
        </>
    )
}

export default EventPage