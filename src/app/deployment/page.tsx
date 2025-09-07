import Link from "next/link";
import { 
  Cloud, 
  Github, 
  Globe, 
  Settings, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Copy,
  Zap,
  Shield,
  Database
} from "lucide-react";

export default function Deployment() {
  return (
    <div className="container px-4 py-12 mx-auto max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Deployment Guide</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Deploy your Best SAAS Kit V2 application to production with our comprehensive deployment guide. 
            We'll cover Vercel deployment, environment configuration, and production best practices.
          </p>
        </div>

        {/* Deployment Options */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Deployment Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <DeploymentOption
              icon={<Zap className="h-8 w-8 text-black" />}
              title="Vercel"
              description="Recommended platform with zero-config deployment"
              features={["Zero configuration", "Automatic CI/CD", "Edge functions", "Preview deployments"]}
              recommended={true}
            />
            <DeploymentOption
              icon={<Cloud className="h-8 w-8 text-orange-600" />}
              title="Netlify"
              description="Popular JAMstack platform with great developer experience"
              features={["Git integration", "Form handling", "Edge functions", "Split testing"]}
            />
            <DeploymentOption
              icon={<Globe className="h-8 w-8 text-blue-600" />}
              title="Custom Server"
              description="Deploy to your own infrastructure or cloud provider"
              features={["Full control", "Custom domains", "Server configuration", "Scaling options"]}
            />
          </div>
        </section>

        {/* Vercel Deployment (Recommended) */}
        <section className="space-y-8">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-black" />
            <h2 className="text-3xl font-bold">Vercel Deployment (Recommended)</h2>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Why Vercel?
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Vercel is the platform created by the Next.js team and offers the best experience for Next.js applications. 
                  It provides automatic deployments, edge functions, and seamless integration with your Git repository.
                </p>
              </div>
            </div>
          </div>

          {/* Step 1: Prepare Repository */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold">Prepare Your Repository</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Ensure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket):
              </p>
              
              <CodeBlock
                title="Push to Repository"
                code={`git add .
git commit -m "Ready for deployment"
git push origin main`}
              />
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900 dark:text-yellow-100">
                      Environment Variables
                    </p>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Make sure your .env.local file is NOT committed to your repository. 
                      You'll configure environment variables in Vercel's dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Connect to Vercel */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold">Connect to Vercel</h3>
            </div>
            
            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Visit <a href="https://vercel.com" className="text-blue-600 hover:underline">vercel.com</a> and sign up/login</li>
                <li>Click "New Project" on your dashboard</li>
                <li>Import your Git repository</li>
                <li>Vercel will automatically detect it's a Next.js project</li>
                <li>Configure your project settings (optional)</li>
                <li>Click "Deploy"</li>
              </ol>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-100">
                      Automatic Detection
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Vercel automatically detects Next.js projects and configures the build settings. 
                      No additional configuration is needed for basic deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Environment Variables */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold">Configure Environment Variables</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Add your environment variables in the Vercel dashboard:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Go to your project settings in Vercel</li>
                <li>Navigate to "Environment Variables"</li>
                <li>Add each variable from your .env.local file</li>
                <li>Set the environment (Production, Preview, Development)</li>
              </ol>

              <div className="space-y-4">
                <h4 className="font-semibold">Required Environment Variables:</h4>
                <EnvironmentVariablesList />
              </div>
            </div>
          </div>

          {/* Step 4: Custom Domain */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                4
              </div>
              <h3 className="text-xl font-semibold">Custom Domain (Optional)</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Add your custom domain to your Vercel project:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Go to your project settings</li>
                <li>Navigate to "Domains"</li>
                <li>Add your domain name</li>
                <li>Configure DNS records as instructed</li>
                <li>Wait for SSL certificate provisioning</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Production Checklist */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Production Checklist</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <ChecklistSection
              icon={<Shield className="h-6 w-6 text-green-600" />}
              title="Security"
              items={[
                "Environment variables configured",
                "HTTPS enabled (automatic with Vercel)",
                "CORS policies configured",
                "Rate limiting enabled",
                "Security headers configured"
              ]}
            />
            
            <ChecklistSection
              icon={<Database className="h-6 w-6 text-blue-600" />}
              title="Database"
              items={[
                "Production database configured",
                "Database migrations run",
                "Connection pooling enabled",
                "Backup strategy in place",
                "Monitoring configured"
              ]}
            />
            
            <ChecklistSection
              icon={<Settings className="h-6 w-6 text-purple-600" />}
              title="Configuration"
              items={[
                "Analytics tracking enabled",
                "Error monitoring setup",
                "Performance monitoring",
                "SEO meta tags configured",
                "Sitemap generated"
              ]}
            />
            
            <ChecklistSection
              icon={<Globe className="h-6 w-6 text-orange-600" />}
              title="Performance"
              items={[
                "Images optimized",
                "Caching configured",
                "CDN enabled",
                "Bundle size optimized",
                "Core Web Vitals passing"
              ]}
            />
          </div>
        </section>

        {/* Post-Deployment */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Post-Deployment Steps</h2>
          
          <div className="space-y-6">
            <PostDeploymentStep
              number="1"
              title="Test Your Application"
              description="Thoroughly test all features including authentication, payments, and database operations."
            />
            
            <PostDeploymentStep
              number="2"
              title="Configure Monitoring"
              description="Set up error tracking, performance monitoring, and uptime monitoring for your application."
            />
            
            <PostDeploymentStep
              number="3"
              title="Set Up Analytics"
              description="Configure Google Analytics, user analytics, and business metrics tracking."
            />
            
            <PostDeploymentStep
              number="4"
              title="Configure Backups"
              description="Ensure your database and critical data have automated backup solutions."
            />
            
            <PostDeploymentStep
              number="5"
              title="Documentation"
              description="Update your documentation with production URLs, API endpoints, and deployment procedures."
            />
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold">Common Issues & Solutions</h2>
          
          <div className="space-y-4">
            <TroubleshootingItem
              issue="Build Fails on Vercel"
              solution="Check your package.json dependencies and ensure all environment variables are set correctly."
            />
            
            <TroubleshootingItem
              issue="Database Connection Errors"
              solution="Verify your DATABASE_URL is correct and your database is accessible from Vercel's servers."
            />
            
            <TroubleshootingItem
              issue="Authentication Not Working"
              solution="Ensure NEXTAUTH_URL matches your production domain and OAuth redirect URLs are updated."
            />
            
            <TroubleshootingItem
              issue="Stripe Webhooks Failing"
              solution="Update your Stripe webhook endpoint URL to your production domain and verify the webhook secret."
            />
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Your SaaS is Live! 🎉</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Congratulations! Your SaaS application is now live and ready for users. 
            Continue building and scaling your business with our additional resources.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
            >
              Explore More Features
            </Link>
            <Link
              href="/api-reference"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              API Documentation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function DeploymentOption({ icon, title, description, features, recommended = false }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
}) {
  return (
    <div className={`relative rounded-lg border p-6 shadow-sm ${
      recommended ? "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20" : "bg-card"
    }`}>
      {recommended && (
        <div className="absolute -top-3 left-4">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            Recommended
          </span>
        </div>
      )}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
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
  );
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</h4>
        <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Copy className="h-4 w-4" />
          <span>Copy</span>
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function EnvironmentVariablesList() {
  const variables = [
    { name: "DATABASE_URL", description: "Neon database connection string" },
    { name: "DIRECT_URL", description: "Direct database connection for migrations" },
    { name: "GOOGLE_CLIENT_ID", description: "Google OAuth client ID" },
    { name: "GOOGLE_CLIENT_SECRET", description: "Google OAuth client secret" },
    { name: "NEXTAUTH_SECRET", description: "Random secret for NextAuth.js" },
    { name: "NEXTAUTH_URL", description: "Your production domain URL" },
    { name: "STRIPE_PUBLISHABLE_KEY", description: "Stripe publishable key" },
    { name: "STRIPE_SECRET_KEY", description: "Stripe secret key" },
    { name: "STRIPE_WEBHOOK_SECRET", description: "Stripe webhook endpoint secret" }
  ];

  return (
    <div className="space-y-2">
      {variables.map((variable) => (
        <div key={variable.name} className="flex justify-between items-start p-3 bg-gray-50 dark:bg-gray-800 rounded">
          <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
            {variable.name}
          </code>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-4 flex-1">
            {variable.description}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChecklistSection({ icon, title, items }: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostDeploymentStep({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex space-x-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function TroubleshootingItem({ issue, solution }: {
  issue: string;
  solution: string;
}) {
  return (
    <div className="border-l-4 border-yellow-400 pl-4">
      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">{issue}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{solution}</p>
    </div>
  );
}
