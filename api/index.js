// pages/api/index.js

export default function handler(request, response) {
    response.status(200).json({
        message: 'Hello, World! This is my first vercel deploy! Check it out.',
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    });
}