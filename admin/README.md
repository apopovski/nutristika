# Nutristika Admin Panel

This is the admin interface for managing the Nutristika website content. It's built with Next.js 15, React 19, TypeScript, and Supabase for authentication and data storage.

## 🔐 Accessing the Online Admin

### Admin Login URL

Once deployed, access the admin panel at:
```
https://[your-domain]/admin/login
```

For local development:
```
http://localhost:3000/admin/login
```

### Admin Authentication

The admin panel uses Supabase authentication. To access the admin, you need to be either:

1. **Admin Role User**: A Supabase user with the `admin` role in their `app_metadata`
2. **Allowed Email User**: A user whose email is listed in the `ADMIN_ALLOWED_EMAILS` environment variable

#### Setting Admin Permissions

**Option 1: Using Admin Role (Recommended)**

Add the admin role to a user's metadata in Supabase:

1. Go to your Supabase project dashboard
2. Navigate to Authentication → Users
3. Click on the user you want to make an admin
4. In the "User Metadata" section, add to `app_metadata`:
   ```json
   {
     "role": "admin"
   }
   ```
   OR
   ```json
   {
     "roles": ["admin"]
   }
   ```

**Option 2: Using Allowed Emails**

Set the environment variable with comma-separated admin emails:
```bash
ADMIN_ALLOWED_EMAILS=admin@nutristika.com,jasmina@example.com
```

## 🚀 Setup & Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Supabase account and project

### Environment Variables

Create a `.env.local` file in the `admin` directory:

```env
# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Admin Access Control (Optional)
ADMIN_ALLOWED_EMAILS=admin@example.com,another@example.com
```

**Getting Supabase Credentials:**

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the "Project URL" as `NEXT_PUBLIC_SUPABASE_URL`
5. Copy the "anon public" key as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Installation

```bash
cd admin
npm install
```

### Running Locally

```bash
npm run dev
```

The admin panel will be available at `http://localhost:3000/admin/login`

### Building for Production

```bash
npm run build
npm start
```

## 📋 Admin Features

Once logged in, you can access:

- **Dashboard** (`/admin/dashboard`) - Overview of admin capabilities
- **Homepage Editor** (`/admin/homepage-editor`) - Edit homepage content
- **Edit Homepage** (`/admin/edit-homepage`) - Alternative homepage editor

## 🔒 Security

- All `/admin/*` routes are protected by middleware
- Unauthenticated users are redirected to `/admin/login`
- Non-admin authenticated users are redirected to `/admin/access-denied`
- Logged-in admins attempting to access `/admin/login` are redirected to dashboard

## 🛠️ Testing Admin Access

### Step 1: Create a Test User

1. Create a user in your Supabase project:
   - Go to Authentication → Users → Add User
   - Enter email and password
   - Confirm the user's email

2. Grant admin access using one of the methods above

### Step 2: Sign In

1. Navigate to `/admin/login`
2. Enter your admin email and password
3. Click "Sign in"
4. You should be redirected to `/admin/dashboard`

### Step 3: Verify Access

- Try accessing protected admin routes
- Verify you can see the admin navigation
- Test logout and re-login functionality

## 🚨 Troubleshooting

### "Missing environment variables" error
- Make sure `.env.local` exists with all required variables
- Restart the dev server after adding environment variables

### "Unable to sign in" error
- Verify Supabase credentials are correct
- Check that the user exists in your Supabase project
- Ensure the user's email is confirmed

### Redirected to "Access Denied"
- Verify the user has admin role in `app_metadata`, OR
- Add the user's email to `ADMIN_ALLOWED_EMAILS` environment variable
- Check that email matches exactly (case-insensitive)

### Changes not reflecting
- Clear browser cookies/cache
- Check browser console for errors
- Verify Supabase connection is active

## 📚 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.7
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)

## 📝 Development Notes

- The app uses Next.js middleware for route protection
- Authentication state is managed by Supabase SSR
- All admin routes use server-side auth checks
- Session tokens are stored in HTTP-only cookies
