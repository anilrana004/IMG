# AI Image Generation App

A full-stack MERN application for AI-powered image generation, inspired by MidJourney and DALL-E.

## Features

- 🎨 AI-powered image generation
- 🔐 User authentication and authorization
- 💾 Image storage and management
- 🔄 Real-time image generation status
- 📱 Responsive design
- 🌐 Cloud deployment ready

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Storage**: AWS S3
- **Deployment**: Render

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/anilrana004/IMG.git
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the server directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_BUCKET_NAME=your_bucket_name
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm run dev
   ```

## Project Structure

```
project/
├── client/          # Frontend React application
├── server/          # Backend Node.js/Express application
├── .gitignore      # Git ignore file
└── render.yaml     # Deployment configuration
```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/images/generate` - Generate new image
- `GET /api/images` - Get user's images
- `DELETE /api/images/:id` - Delete image

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Anil Rana - [GitHub](https://github.com/anilrana004)

Project Link: [https://github.com/anilrana004/IMG.git](https://github.com/anilrana004/IMG.git) 
Backend (API)
http://localhost:5000
Frontend (React app)
http://localhost:5173
