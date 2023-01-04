import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map((post) => {
        return {
            params: {
                id: post.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    };
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    };
}


const postData = ({ data }) => {
    return (
        <>
            <Layout>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Layout>
        </>
    )
}

export default postData