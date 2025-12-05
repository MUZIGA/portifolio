# Judith Muziga - Portfolio Website

A modern, professional portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Showcasing frontend development skills, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional UI with blue color scheme
- **Responsive**: Fully responsive design for all devices
- **Multi-page Structure**: Separate pages for better SEO and navigation
- **Professional CV**: Downloadable/printable CV page
- **Contact Form**: Working contact form for client inquiries
- **Blog Section**: Articles and insights showcase
- **Project Showcase**: Featured projects with live demos
- **Dark Header/Footer**: Professional dark blue navigation and footer

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📱 Pages

- **Home** (`/`) - Hero section with introduction
- **Services** (`/services`) - Development services offered
- **Skills** (`/skills`) - Technical skills and expertise
- **Projects** (`/projects`) - Portfolio of work
- **About** (`/about`) - Personal background
- **CV** (`/cv`) - Professional resume
- **Blog** (`/blog`) - Articles and insights
- **Contact** (`/contact`) - Contact form and information

## 🎨 Design Features

- Professional blue color palette (#60a5fa)
- Gradient text effects
- Smooth hover animations
- Clean typography with Inter font
- Subtle background patterns
- Professional dark navigation

## 📧 Contact Information

- **Email**: umuzigajudit@gmail.com
- **Phone**: +250 786 184 438
- **Location**: Rwanda

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── cv/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── skills/
│   │   └── globals.css
│   ├── components/          # Reusable components
│   │   ├── ui/             # UI components
│   │   ├── navigation.tsx
│   │   ├── hero.tsx
│   │   ├── footer.tsx
│   │   └── ...
│   ├── hooks/              # Custom hooks
│   └── lib/                # Utilities
├── public/                 # Static assets
│   └── image.jpg          # Profile image
└── README.md
```

## 🎯 Key Projects Featured

1. **MedEase Healthcare Platform**
   - Healthcare management system
   - Patient records and appointments
   - Built with React and Node.js

2. **E-Commerce Platform**
   - Full-featured online store
   - Payment integration with Stripe
   - Inventory management system

3. **A2 Tax Management System**
   - Professional tax calculation software
   - Automated reporting features
   - Client management system

## 🔧 Customization

### Adding Your Information

1. Update contact details in:
   - `src/components/hero.tsx`
   - `src/components/footer.tsx`
   - `src/components/contact.tsx`
   - `src/app/cv/page.tsx`

2. Replace profile image:
   - Add your photo as `public/image.jpg`

3. Update projects:
   - Edit `src/components/projects.tsx`
   - Add your actual project URLs

### Color Scheme

The portfolio uses a professional blue theme. To change colors, update the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #60a5fa;    /* Main blue */
  --accent: #3b82f6;     /* Accent blue */
  /* ... other colors */
}
```

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Responsive layout for tablets
- **Desktop**: Full desktop experience
- **Print**: CV page optimized for printing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed on:
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## 📈 Performance

- **Next.js 16**: Latest performance optimizations
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting
- **SEO Optimized**: Meta tags and structured data

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, contact:
- Email: umuzigajudit@gmail.com
- Phone: +250 786 184 438

---

**Built with ❤️ by Judith Muziga**