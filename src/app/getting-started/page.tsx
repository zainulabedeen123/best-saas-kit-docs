import Link from "next/link";
import { ArrowRight, Copy, CheckCircle, AlertCircle, Terminal, Database, Key, CreditCard } from "lucide-react";

export default function GettingStarted() {
  return (
    <div className="container px-4 py-12 mx-auto max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">Getting Started</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get your Best SAAS Kit V2 application up and running in minutes. 
            Follow this comprehensive guide to set up your development environment and deploy your first SaaS application.
          </p>
        </div>

        {/* Prerequisites */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Prerequisites</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <PrerequisiteCard
              title="Node.js 18+"
              description="Download and install the latest LTS version"
              link="https://nodejs.org/"
            />
            <PrerequisiteCard
              title="Git"
              description="Version control system for cloning the repository"
              link="https://git-scm.com/"
            />
            <PrerequisiteCard
              title="Neon Account"
              description="PostgreSQL database hosting (free tier available)"
              link="https://neon.tech/"
            />
            <PrerequisiteCard
              title="Stripe Account"
              description="Payment processing (test mode available)"
              link="https://stripe.com/"
            />
          </div>
        </section>

        {/* Step 1: Clone Repository */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
              1
            </div>
            <h2 className="text-2xl font-bold">Clone the Repository</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Start by cloning the Best SAAS Kit V2 repository to your local machine:
            </p>
            
            <CodeBlock
              title="Clone Repository"
              code={`git clone https://github.com/zainulabedeen123/Best-Saas-Kit--V2.git
cd Best-Saas-Kit--V2`}
            />
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">
                    Repository Structure
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                    The repository includes a complete Next.js application with authentication, 
                    payments, database integration, and admin dashboard pre-configured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Install Dependencies */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
              2
            </div>
            <h2 className="text-2xl font-bold">Install Dependencies</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Install all required dependencies using npm or yarn:
            </p>
            
            <CodeBlock
              title="Install Dependencies"
              code={`npm install
# or
yarn install`}
            />
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">
                    What's Included
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    All dependencies including Next.js, TypeScript, Tailwind CSS, Stripe, 
                    authentication libraries, and database drivers are automatically installed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Environment Setup */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
              3
            </div>
            <h2 className="text-2xl font-bold">Environment Configuration</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Create your environment file and configure the required services:
            </p>
            
            <CodeBlock
              title="Create Environment File"
              code={`cp .env.example .env.local`}
            />
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Required Environment Variables</h3>
              
              <EnvironmentSection
                icon={<Database className="h-5 w-5 text-orange-600" />}
                title="Database Configuration"
                description="Set up your Neon PostgreSQL database connection"
                variables={[
                  { name: "DATABASE_URL", description: "Your Neon database connection string" },
                  { name: "DIRECT_URL", description: "Direct connection URL for migrations" }
                ]}
              />
              
              <EnvironmentSection
                icon={<Key className="h-5 w-5 text-blue-600" />}
                title="Authentication"
                description="Configure Google OAuth for user authentication"
                variables={[
                  { name: "GOOGLE_CLIENT_ID", description: "Google OAuth client ID" },
                  { name: "GOOGLE_CLIENT_SECRET", description: "Google OAuth client secret" },
                  { name: "NEXTAUTH_SECRET", description: "Random secret for NextAuth.js" },
                  { name: "NEXTAUTH_URL", description: "Your application URL" }
                ]}
              />
              
              <EnvironmentSection
                icon={<CreditCard className="h-5 w-5 text-green-600" />}
                title="Stripe Payments"
                description="Set up Stripe for subscription management"
                variables={[
                  { name: "STRIPE_PUBLISHABLE_KEY", description: "Stripe publishable key" },
                  { name: "STRIPE_SECRET_KEY", description: "Stripe secret key" },
                  { name: "STRIPE_WEBHOOK_SECRET", description: "Webhook endpoint secret" }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Step 4: Database Setup */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
              4
            </div>
            <h2 className="text-2xl font-bold">Database Setup</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Initialize your database with the required tables and schema:
            </p>
            
            <CodeBlock
              title="Run Database Migrations"
              code={`npm run db:migrate
# or
yarn db:migrate`}
            />
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">
                    Database Schema
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    This creates tables for users, subscriptions, credits, and analytics. 
                    Make sure your Neon database is accessible before running migrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Development Server */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
              5
            </div>
            <h2 className="text-2xl font-bold">Start Development Server</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Start the development server and begin building your SaaS application:
            </p>
            
            <CodeBlock
              title="Start Development Server"
              code={`npm run dev
# or
yarn dev`}
            />
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900 dark:text-green-100">
                    You're Ready!
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Your application is now running at <code className="bg-green-100 dark:bg-green-800 px-1 rounded">http://localhost:3000</code>. 
                    You can start customizing and building your SaaS features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <NextStepCard
              title="Explore Features"
              description="Learn about authentication, payments, analytics, and admin features"
              href="/features"
            />
            <NextStepCard
              title="Deployment Guide"
              description="Deploy your application to Vercel, Netlify, or other platforms"
              href="/deployment"
            />
            <NextStepCard
              title="API Reference"
              description="Detailed documentation of all available APIs and functions"
              href="/api-reference"
            />
            <NextStepCard
              title="Customization"
              description="Learn how to customize the template for your specific needs"
              href="/customization"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function PrerequisiteCard({ title, description, link }: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
    </a>
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

function EnvironmentSection({ icon, title, description, variables }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  variables: { name: string; description: string }[];
}) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center space-x-3 mb-3">
        {icon}
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <div className="space-y-2">
        {variables.map((variable) => (
          <div key={variable.name} className="flex justify-between items-start">
            <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {variable.name}
            </code>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-4 flex-1">
              {variable.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NextStepCard({ title, description, href }: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="group">
      <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </Link>
  );
}
