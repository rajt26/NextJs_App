
import EventsCategories from '../../../components/events/eventCategories';


export const getStaticPaths = async () => {
    const { events_categories } = await import('../../../data/data.json');
    const allPaths = events_categories.map((event) => {
        return {
            params: {
                ecat: event.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context?.params?.ecat
    const { allEvents } = await import('../../../data/data.json');
    const data = allEvents.filter((event) => {
        return event.city === id
    })
    return {
        props: {
            data
        }

    }
}

const EventCategory = ({ data }) => {
    return (
        <EventsCategories key={data.id} data={data} />
    )
}

export default EventCategory