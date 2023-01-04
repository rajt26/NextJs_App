import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core/'


const AllEventsPage = ({ data }) => {
    return (
        <>
            <Grid container justifyContent='center' direction='row' spacing={2}>
                {
                    data.map((category) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                                <Card sx={{ maxWidth: 400, maxHeight: 350 }}>
                                    <CardMedia
                                        component="img"
                                        alt="event_images"
                                        height="140"
                                        image={category.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {category.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {category.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link key={category.id} href={`/events/${category.id}`}>
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default AllEventsPage