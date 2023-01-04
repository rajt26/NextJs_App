import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core/';


const EventsCategories = ({ data }) => {
    return (
        <>
            <Grid container spacing={12}>
                {data.map((event) => {
                    return (
                        <>
                            <Grid tem xs={12} sm={6} md={4} key={event.id}>
                                <h1>
                                    {`Events in ${event.city}`}
                                </h1>
                                <Card sx={{ maxWidth: 400, maxHeight: 350 }} key={event.id}>
                                    <CardMedia
                                        component="img"
                                        alt="event_images"
                                        height="140"
                                        image={event.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {event.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {event.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={`/events/${event.city}/${event.id}`}>
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}

export default EventsCategories