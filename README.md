# Hotel Booking Platform

A professional hotel booking website built with React, TypeScript, and Tailwind CSS, featuring a modern design similar to Booking.com but focused on a single destination.

## Features

- **Modern Design**: Professional booking interface with smooth animations
- **Comprehensive Pages**: Home, Hotels, Experiences, About, Login/Register
- **User Dashboards**: Separate client and hotel partner dashboards
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Authentication**: Login and registration system
- **Search & Filters**: Advanced hotel search and filtering
- **Local Experiences**: Curated local activities and tours
- **Booking System**: Complete booking workflow (frontend)

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI components

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Download the project files**
   - Download all project files to your desired directory
   - Or use Git if available: `git clone <repository-url>`

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application should be running

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## How to Download Your Project

### From Lovable (Recommended)
1. Go to your Lovable project
2. Click on the **GitHub** button in the top right
3. Connect your GitHub account if not already connected
4. Push your project to GitHub
5. Clone or download from GitHub

### Manual Download
1. Use the browser's developer tools to save files
2. Or copy the code from each file in the project

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, cards, etc.)
│   ├── Navigation.tsx   # Main navigation component
│   ├── HeroSection.tsx  # Homepage hero section
│   ├── HotelCard.tsx    # Hotel listing card
│   └── Footer.tsx       # Site footer
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Hotels.tsx       # Hotel listings
│   ├── Experiences.tsx  # Local experiences
│   ├── About.tsx        # About page
│   ├── Login.tsx        # Login page
│   ├── Register.tsx     # Registration page
│   ├── ClientDashboard.tsx    # Client dashboard
│   └── HotelPartner.tsx       # Hotel partner dashboard
├── assets/              # Static assets (images, etc.)
├── lib/                 # Utility functions
└── hooks/               # Custom React hooks
```

## Key Pages

### Homepage (`/`)
- Hero section with search functionality
- Featured hotels grid
- Call-to-action sections

### Hotels (`/hotels`)
- Advanced search and filtering
- Hotel grid with detailed cards
- Booking interface

### Experiences (`/experiences`)
- Local activities and tours
- Category-based filtering (Culture & History, Food & Drink, Adventure, Photography, Arts & Culture)
- Detailed experience cards

### About (`/about`)
- Company story and mission
- Team information
- Contact details

### Authentication
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - User registration

### Dashboards
- **Client Dashboard** (`/client-dashboard`) - User booking management
- **Hotel Partner** (`/hotel-partner`) - Hotel management interface

## Experience Categories

### Culture & History
Immerse in centuries of heritage through guided tours of landmarks, museums, and historical districts.

### Food & Drink
Savor authentic local flavors through market tours, cooking classes, and wine tastings.

### Adventure
Challenge yourself with thrilling outdoor activities from mountain hiking to water sports.

### Photography
Capture stunning moments with professional photography tours at the most photogenic spots.

### Arts & Culture
Explore local art scenes through gallery visits, studio tours, and hands-on workshops.

## Customization

### Design System
The project uses a comprehensive design system defined in:
- `src/index.css` - CSS custom properties and base styles
- `tailwind.config.ts` - Tailwind configuration with custom colors

### Colors
All colors are defined as HSL values in the design system:
- Primary: Main brand color
- Secondary: Supporting color
- Accent: Highlight color
- Muted: Subtle backgrounds

### Components
UI components are built with:
- Consistent design patterns
- Accessibility features
- Responsive design
- Smooth animations

## Development Tips

1. **Use the design system**: Always use semantic color tokens instead of hardcoded colors
2. **Component structure**: Keep components small and focused
3. **Responsive design**: Test on multiple screen sizes
4. **Animations**: Use the predefined animation classes for consistency

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps for Production

1. **Add Backend Integration**: Connect to a real backend API for bookings, user management, and hotel data
2. **Payment Processing**: Integrate payment gateways like Stripe or PayPal
3. **Database**: Set up a database for storing user accounts, bookings, and hotel information
4. **Authentication**: Implement proper user authentication and session management
5. **Email System**: Add email notifications for bookings and confirmations
6. **Admin Panel**: Create an admin interface for managing hotels and bookings

## Support

For questions about the codebase or customization, refer to:
- React documentation: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/
- TypeScript: https://www.typescriptlang.org/