# Blog Admin Panel

A complete blog management system with an admin panel for creating, editing, and managing blog posts, plus a public-facing blog interface.

## Features

- **Admin Panel**
  - Secure authentication with Firebase
  - Create, edit, and delete blog posts
  - Rich text editor with Quill.js
  - Image uploads with Vercel Blob
  - SEO metadata management
  - Category management
  - Custom URL slugs

- **Blog Frontend**
  - Responsive blog listing page
  - Detailed blog post pages
  - Category filtering
  - SEO optimized

## Tech Stack

- React.js with Vite
- TypeScript
- Firebase Authentication
- Firebase Firestore
- Vercel Blob for image storage
- Quill.js rich text editor
- Tailwind CSS for styling
- React Router for navigation

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Firebase account
- Vercel account (for Blob storage)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Firebase Setup

1. Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication with Email/Password
3. Create a Firestore database
4. Add your Firebase configuration to the `.env` file

### Vercel Blob Setup

1. Create a Vercel account if you don't have one
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel link` to link your project
4. Create a Blob store: `vercel blob create`
5. Add the Blob token to your `.env` file

## Deployment

Build the project for production:

```
npm run build
```

Deploy to your preferred hosting service (Vercel, Netlify, Firebase Hosting, etc.).

## Admin Access

After deployment, create your admin user by:

1. Navigate to `/admin/login`
2. Use Firebase Authentication methods to create your first admin user
3. Access the admin panel at `/admin`

## License

MIT 