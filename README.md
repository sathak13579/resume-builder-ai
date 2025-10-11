# Resume Builder AI

## About

Resume Builder AI is an intelligent web application designed to help developers and professionals create compelling, ATS-optimized resumes with the power of artificial intelligence. Our platform combines intuitive design tools with AI-powered content optimization to help you stand out in your job search. Whether you're a seasoned professional or just starting your career, Resume Builder AI streamlines the resume creation process and ensures your application materials showcase your best self.

## Features

### Core Features
- **AI-Powered Content Optimization** - Leverage advanced AI to enhance your resume content, suggest improvements, and optimize for Applicant Tracking Systems (ATS)
- **Real-time Preview** - See your changes instantly with our live preview feature
- **Multiple Templates** - Choose from a variety of professional, modern resume templates
- **Export Options** - Download your resume in PDF, DOCX, or JSON formats
- **Auto-save** - Never lose your progress with automatic cloud saving
- **Custom Sections** - Add custom sections to tailor your resume to your unique experience

### Premium Features
- **Advanced AI Suggestions** - Get detailed, context-aware recommendations for every section
- **ATS Score Analysis** - Understand how well your resume performs against ATS systems
- **Unlimited Templates** - Access our complete library of premium templates
- **Cover Letter Generator** - Create matching cover letters with AI assistance
- **Priority Support** - Get help when you need it with dedicated support

## Stack

### Frontend
- **React.js** - Modern, component-based UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling framework
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **OpenAI API** - AI-powered content optimization
- **JWT** - Secure authentication
- **Stripe** - Payment processing for premium features

### DevOps & Tools
- **Docker** - Containerization for consistent environments
- **GitHub Actions** - CI/CD pipelines
- **ESLint & Prettier** - Code quality and formatting
- **Jest & React Testing Library** - Testing frameworks

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas account)
- Git

### Clone the Repository
```bash
git clone https://github.com/sathak13579/resume-builder-ai.git
cd resume-builder-ai
```

### Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Environment Configuration

Create `.env` files in both backend and frontend directories:

**Backend `.env`:**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CORS_ORIGIN=http://localhost:3000
```

**Frontend `.env`:**
```env
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Local Dev

### Running the Development Servers

**Start Backend Server:**
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:5000`

**Start Frontend Development Server:**
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:3000`

### Development Workflow

1. **Hot Reload** - Both frontend and backend support hot reloading for instant updates
2. **API Testing** - Use the included Postman collection in `/docs` for API testing
3. **Database Seeding** - Run `npm run seed` in the backend directory to populate sample data
4. **Linting** - Run `npm run lint` to check code quality
5. **Testing** - Run `npm test` to execute the test suite

### Building for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

### Docker Support

Run the entire stack with Docker:
```bash
docker-compose up -d
```

## Payments

Resume Builder AI uses **Stripe** for secure payment processing to support our freemium business model.

### Payment Features
- **Subscription Plans** - Monthly and annual premium subscriptions
- **Secure Checkout** - PCI-compliant payment processing
- **Webhook Integration** - Real-time payment status updates
- **Customer Portal** - Self-service subscription management

### Integration Details

**Subscription Tiers:**
- **Free** - Basic resume builder with limited templates and exports
- **Premium** ($9.99/month) - Unlimited AI suggestions, all templates, and priority support
- **Professional** ($19.99/month) - Everything in Premium plus cover letter generation and ATS analysis

**Testing Payments:**
Use Stripe test cards for development:
- Success: `4242 4242 4242 4242`
- Requires Authentication: `4000 0025 0000 3155`
- Declined: `4000 0000 0000 9995`

**Webhook Setup:**
1. Install Stripe CLI: `brew install stripe/stripe-cli/stripe`
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:5000/api/webhooks/stripe`

### Security Best Practices
- Never commit API keys to version control
- Always validate webhook signatures
- Use environment variables for sensitive data
- Implement proper error handling for failed payments

## License

MIT License

Copyright (c) 2025 Resume Builder AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**Made with ❤️ by the Resume Builder AI Team**

For questions, feedback, or support, please open an issue or contact us at support@resumebuilderai.com
