import path, { join } from 'path'
import fs from 'fs'

const buildPath = () => {
    return path.join(process.cwd(), 'data', 'data.json')
}

const extractData = (filePath) => {
    const readData = fs.readFileSync(filePath);
    const data = JSON.parse(readData)
    return data
}

export default function handlers(req, res) {
    const { method } = req

    const filePath = buildPath();
    const { events_categories, allEvents } = extractData(filePath);

    if (!allEvents) {
        return res.status(404).json({
            status: 404,
            message: 'Event data not found!!!'
        })
    }
    if (method === 'POST') {
        const { email, id } = req.body;

        if (!email | !email.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
        }
        const newAllEvents = allEvents.map((event) => {
            if (event.id === id) {

                if (event.emails_registered.includes(email)) {
                    res.status(409).json({ message: 'email has been already registered!!!' })
                }
                return { ...event, emails_registered: [...event.emails_registered, email] }
            }

            return event;
        })
        fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }))
        res.status(201).json({
            message: `You have been registered successfully with the email: ${email} for the event: ${id}`,
        });
    }

}