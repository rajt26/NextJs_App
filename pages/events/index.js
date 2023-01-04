
import AllEventsPage from '../../components/events/allEventsPage';


export const getStaticProps = async () => {
    const { events_categories } = await import('../../data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}
const EventsPage = ({ data }) => {
    return (
        <>
            <AllEventsPage data={data} />
        </>
    )
}

export default EventsPage;