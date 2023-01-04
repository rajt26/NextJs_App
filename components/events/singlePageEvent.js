import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const SinglePageEvent = ({ data }) => {
    const emailRef = useRef();
    const router = useRouter();
    const id = router?.query?.id
    const [message, setMessage] = useState('')


    const onSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.match(validRegex)) {
            setMessage('Please enter valid email address');
        }

        try {
            const res = await fetch('/api/email-register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, id })
            })
            if (!res.ok) throw new Error(`Error: ${res.status}`);
            const data = await res.json();
            setMessage(data.message);
            inputEmail.current.value = '';
        } catch (error) {
            console.log('ERROR', e);
        }
    }
    return (
        <>
            <h2>
                {`${data.id}`}
            </h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="event_images"
                    height="140"
                    image={data.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>

            </Card>
            <br />
            <form onSubmit={onSubmit} >
                <label>Get Registered for this event!!</label>
                <br />
                <input
                    required
                    ref={emailRef}
                />
                <Button type="submit" size='large'>Submit</Button>
            </form>
            <p>{message}</p>
        </>
    )
}

export default SinglePageEvent