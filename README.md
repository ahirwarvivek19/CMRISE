# CMRISE Ujjain - Official Website

A modern, responsive website for CMRISE Ujjain School built with React, featuring reusable components and a production-ready architecture.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, React Router, and modern hooks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Reusable Components**: Modular component system for easy maintenance and scaling
- **Performance Optimized**: Lazy loading, code splitting, and optimized builds
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **SEO Ready**: Meta tags, structured data, and optimized for search engines
- **CI/CD Pipeline**: Automated testing, building, and deployment with GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled Components, CSS3 with CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/            # UI components (Hero, Card, etc.)
├── pages/              # Page components
├── styles/             # Global styles and CSS variables
├── utils/              # Utility functions
└── App.js              # Main application component

public/                 # Static assets
.github/               # GitHub Actions workflows
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cmrise-ujjain-website.git
   cd cmrise-ujjain-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🏗️ Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🚀 Deployment

### GitHub Pages (Automatic)

The website is automatically deployed to GitHub Pages through GitHub Actions:

- **Staging**: Deploys from `develop` branch
- **Production**: Deploys from `main` branch

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `build/` folder to your hosting service

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_SCHOOL_NAME=CMRISE Ujjain
REACT_APP_CONTACT_EMAIL=info@cmriseujjain.edu.in
REACT_APP_PHONE=+91 1234567890
```

### Customization

- **Colors**: Modify CSS variables in `src/index.css`
- **Content**: Update text content in respective component files
- **Images**: Replace placeholder images in the `public/` directory

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color schemes
- Screen reader compatibility

## 🔒 Security

- Regular security scans with Trivy
- Dependency vulnerability monitoring
- Secure build processes
- HTTPS enforcement

## 📊 Performance

- Lighthouse CI integration
- Bundle size optimization
- Image optimization
- Lazy loading implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@cmriseujjain.edu.in
- **Phone**: +91 1234567890
- **Website**: [https://cmriseujjain.edu.in](https://cmriseujjain.edu.in)

## 🙏 Acknowledgments

- Built with ❤️ for CMRISE Ujjain
- Inspired by modern web design principles
- Community-driven development approach

---

**CMRISE Ujjain** - Excellence in Education, Innovation in Learning


