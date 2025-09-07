import Link from "next/link";
import { 
  Shield, 
  CreditCard, 
  BarChart3, 
  Users, 
  Database, 
  Zap, 
  Lock, 
  Globe, 
  Smartphone,
  Code,
  Settings,
  CheckCircle
} from "lucide-react";

export default function Features() {
  return (
    <div className="container px-4 py-12 mx-auto max-w-6xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Features Overview</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Best SAAS Kit V2 comes packed with everything you need to build, launch, and scale your SaaS application. 
            From authentication to payments, analytics to admin tools - we've got you covered.
          </p>
        </div>

        {/* Core Features Grid */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Core Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Authentication System"
              description="Complete user authentication with Google OAuth, session management, and secure user profiles."
              features={[
                "Google OAuth integration",
                "Session management",
                "User profile management",
                "Secure password handling",
                "Email verification",
                "Role-based access control"
              ]}
              href="/features/authentication"
            />
            
            <FeatureCard
              icon={<CreditCard className="h-12 w-12 text-green-600" />}
              title="Stripe Payments"
              description="Full Stripe integration with subscription management, billing portal, and webhook handling."
              features={[
                "Subscription management",
                "One-time payments",
                "Billing portal",
                "Webhook handling",
                "Invoice generation",
                "Payment analytics"
              ]}
              href="/features/payments"
            />
            
            <FeatureCard
              icon={<BarChart3 className="h-12 w-12 text-purple-600" />}
              title="Analytics Dashboard"
              description="Built-in analytics with user metrics, revenue tracking, and business insights."
              features={[
                "User analytics",
                "Revenue tracking",
                "Growth metrics",
                "Real-time data",
                "Custom reports",
                "Export functionality"
              ]}
              href="/features/analytics"
            />
            
            <FeatureCard
              icon={<Database className="h-12 w-12 text-orange-600" />}
              title="Database Integration"
              description="PostgreSQL with Neon hosting, optimized queries, and automatic migrations."
              features={[
                "PostgreSQL database",
                "Neon cloud hosting",
                "Automatic migrations",
                "Optimized queries",
                "Connection pooling",
                "Backup & recovery"
              ]}
              href="/features/database"
            />
            
            <FeatureCard
              icon={<Users className="h-12 w-12 text-red-600" />}
              title="Admin Dashboard"
              description="Comprehensive admin panel for user management, analytics, and system monitoring."
              features={[
                "User management",
                "System monitoring",
                "Analytics overview",
                "Content management",
                "Settings configuration",
                "Activity logs"
              ]}
              href="/features/admin"
            />
            
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-yellow-600" />}
              title="Performance Optimized"
              description="Built for speed with caching, lazy loading, and production-ready configurations."
              features={[
                "Server-side rendering",
                "Static generation",
                "Image optimization",
                "Code splitting",
                "Caching strategies",
                "CDN integration"
              ]}
              href="/features/performance"
            />
          </div>
        </section>

        {/* Technical Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Technical Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <TechnicalFeatureCard
              icon={<Code className="h-8 w-8 text-blue-600" />}
              title="Modern Tech Stack"
              description="Built with the latest technologies for optimal performance and developer experience."
              technologies={[
                "Next.js 15 with App Router",
                "TypeScript for type safety",
                "Tailwind CSS for styling",
                "React Server Components",
                "Edge Runtime support"
              ]}
            />
            
            <TechnicalFeatureCard
              icon={<Lock className="h-8 w-8 text-green-600" />}
              title="Security First"
              description="Enterprise-grade security features built into every component."
              technologies={[
                "CSRF protection",
                "XSS prevention",
                "SQL injection protection",
                "Rate limiting",
                "Secure headers"
              ]}
            />
            
            <TechnicalFeatureCard
              icon={<Globe className="h-8 w-8 text-purple-600" />}
              title="SEO Optimized"
              description="Built-in SEO features to help your SaaS rank higher in search results."
              technologies={[
                "Meta tags optimization",
                "Structured data",
                "Sitemap generation",
                "Open Graph tags",
                "Twitter Cards"
              ]}
            />
            
            <TechnicalFeatureCard
              icon={<Smartphone className="h-8 w-8 text-orange-600" />}
              title="Mobile Responsive"
              description="Fully responsive design that works perfectly on all devices."
              technologies={[
                "Mobile-first design",
                "Touch-friendly interface",
                "Progressive Web App",
                "Offline support",
                "App-like experience"
              ]}
            />
          </div>
        </section>

        {/* Integration Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Integrations & APIs</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <IntegrationCard
              title="Stripe"
              description="Complete payment processing with subscriptions, invoices, and billing management."
              status="Included"
            />
            <IntegrationCard
              title="Neon Database"
              description="Serverless PostgreSQL with automatic scaling and built-in connection pooling."
              status="Included"
            />
            <IntegrationCard
              title="Google OAuth"
              description="Secure authentication with Google accounts for seamless user onboarding."
              status="Included"
            />
            <IntegrationCard
              title="Vercel Deployment"
              description="One-click deployment to Vercel with automatic CI/CD and preview deployments."
              status="Included"
            />
            <IntegrationCard
              title="Email Service"
              description="Transactional emails for user notifications, receipts, and marketing."
              status="Ready to Configure"
            />
            <IntegrationCard
              title="Analytics Tools"
              description="Google Analytics, Mixpanel, or custom analytics integration ready."
              status="Ready to Configure"
            />
          </div>
        </section>

        {/* Developer Experience */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center">Developer Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Development Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>TypeScript for type safety</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>ESLint and Prettier configuration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Hot reload development server</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Automated testing setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Git hooks for code quality</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Documentation & Support</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Code examples and tutorials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>API reference guide</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Deployment guides</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Community support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our detailed documentation to learn how to implement each feature 
            and customize the template for your specific needs.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
            >
              Get Started Now
            </Link>
            <Link
              href="/api-reference"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View API Reference
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, features, href }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}) {
  return (
    <Link href={href} className="group">
      <div className="h-full rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">{icon}</div>
            <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

function TechnicalFeatureCard({ icon, title, description, technologies }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <ul className="space-y-1">
          {technologies.map((tech, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IntegrationCard({ title, description, status }: {
  title: string;
  description: string;
  status: string;
}) {
  const isIncluded = status === "Included";
  
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            isIncluded 
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          }`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
