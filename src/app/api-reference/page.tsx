import Link from "next/link";
import { 
  Database, 
  Shield, 
  CreditCard, 
  Users, 
  BarChart3,
  Code,
  Copy,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function APIReference() {
  return (
    <div className="container px-4 py-12 mx-auto max-w-6xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter">API Reference</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Complete API documentation for Best SAAS Kit V2. Learn how to use all available functions, 
            database operations, authentication methods, and integration endpoints.
          </p>
        </div>

        {/* Quick Navigation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Quick Navigation</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <QuickNavCard
              icon={<Shield className="h-6 w-6 text-blue-600" />}
              title="Authentication"
              description="User authentication and session management"
              href="#authentication"
            />
            <QuickNavCard
              icon={<Database className="h-6 w-6 text-green-600" />}
              title="Database Functions"
              description="User management and data operations"
              href="#database"
            />
            <QuickNavCard
              icon={<CreditCard className="h-6 w-6 text-purple-600" />}
              title="Payments"
              description="Stripe integration and subscription management"
              href="#payments"
            />
            <QuickNavCard
              icon={<BarChart3 className="h-6 w-6 text-orange-600" />}
              title="Analytics"
              description="Analytics and reporting functions"
              href="#analytics"
            />
            <QuickNavCard
              icon={<Users className="h-6 w-6 text-red-600" />}
              title="Admin Functions"
              description="Administrative operations and user management"
              href="#admin"
            />
            <QuickNavCard
              icon={<Code className="h-6 w-6 text-gray-600" />}
              title="Utilities"
              description="Helper functions and utilities"
              href="#utilities"
            />
          </div>
        </section>

        {/* Authentication API */}
        <section id="authentication" className="space-y-8">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Authentication API</h2>
          </div>
          
          <div className="space-y-6">
            <APIEndpoint
              method="POST"
              endpoint="/api/auth/signin"
              title="Sign In User"
              description="Authenticate user with Google OAuth"
              parameters={[
                { name: "provider", type: "string", description: "OAuth provider (google)", required: true },
                { name: "callbackUrl", type: "string", description: "Redirect URL after authentication", required: false }
              ]}
              response={{
                success: {
                  user: {
                    id: "string",
                    email: "string",
                    name: "string",
                    image: "string"
                  },
                  session: "string"
                }
              }}
            />
            
            <APIEndpoint
              method="POST"
              endpoint="/api/auth/signout"
              title="Sign Out User"
              description="End user session and clear authentication"
              parameters={[]}
              response={{
                success: {
                  message: "Successfully signed out"
                }
              }}
            />
            
            <APIFunction
              name="getServerSession()"
              description="Get current user session on server side"
              location="lib/auth.ts"
              usage={`import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

const session = await getServerSession(authOptions)
if (session?.user) {
  // User is authenticated
}`}
              returns="Session object or null"
            />
          </div>
        </section>

        {/* Database API */}
        <section id="database" className="space-y-8">
          <div className="flex items-center space-x-3">
            <Database className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl font-bold">Database Functions</h2>
          </div>
          
          <div className="space-y-6">
            <APIFunction
              name="createUser(userData)"
              description="Create a new user in the database"
              location="lib/database.ts"
              parameters={[
                { name: "userData", type: "object", description: "User data object", required: true },
                { name: "userData.googleId", type: "string", description: "Google OAuth ID", required: true },
                { name: "userData.email", type: "string", description: "User email", required: true },
                { name: "userData.name", type: "string", description: "User display name", required: true },
                { name: "userData.image", type: "string", description: "Profile image URL", required: false }
              ]}
              usage={`import { createUser } from "@/lib/database"

const newUser = await createUser({
  googleId: "123456789",
  email: "user@example.com",
  name: "John Doe",
  image: "https://example.com/avatar.jpg"
})`}
              returns="User object with database ID"
            />
            
            <APIFunction
              name="getUserByGoogleId(googleId)"
              description="Retrieve user by Google OAuth ID"
              location="lib/database.ts"
              parameters={[
                { name: "googleId", type: "string", description: "Google OAuth ID", required: true }
              ]}
              usage={`import { getUserByGoogleId } from "@/lib/database"

const user = await getUserByGoogleId("123456789")`}
              returns="User object or null"
            />
            
            <APIFunction
              name="updateUserCredits(googleId, credits)"
              description="Update user's credit balance"
              location="lib/database.ts"
              parameters={[
                { name: "googleId", type: "string", description: "Google OAuth ID", required: true },
                { name: "credits", type: "number", description: "New credit amount", required: true }
              ]}
              usage={`import { updateUserCredits } from "@/lib/database"

await updateUserCredits("123456789", 100)`}
              returns="Updated user object"
            />
            
            <APIFunction
              name="getUserCredits(googleId)"
              description="Get user's current credit balance"
              location="lib/database.ts"
              parameters={[
                { name: "googleId", type: "string", description: "Google OAuth ID", required: true }
              ]}
              usage={`import { getUserCredits } from "@/lib/database"

const credits = await getUserCredits("123456789")`}
              returns="Number of credits"
            />
          </div>
        </section>

        {/* Payments API */}
        <section id="payments" className="space-y-8">
          <div className="flex items-center space-x-3">
            <CreditCard className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-bold">Payments API</h2>
          </div>
          
          <div className="space-y-6">
            <APIEndpoint
              method="POST"
              endpoint="/api/stripe/create-checkout-session"
              title="Create Checkout Session"
              description="Create a Stripe checkout session for subscription"
              parameters={[
                { name: "priceId", type: "string", description: "Stripe price ID", required: true },
                { name: "userId", type: "string", description: "User ID", required: true }
              ]}
              response={{
                success: {
                  sessionId: "string",
                  url: "string"
                }
              }}
            />
            
            <APIEndpoint
              method="POST"
              endpoint="/api/stripe/create-portal-session"
              title="Create Billing Portal Session"
              description="Create a Stripe customer portal session"
              parameters={[
                { name: "customerId", type: "string", description: "Stripe customer ID", required: true }
              ]}
              response={{
                success: {
                  url: "string"
                }
              }}
            />
            
            <APIEndpoint
              method="POST"
              endpoint="/api/stripe/webhook"
              title="Stripe Webhook Handler"
              description="Handle Stripe webhook events"
              parameters={[
                { name: "event", type: "object", description: "Stripe webhook event", required: true }
              ]}
              response={{
                success: {
                  received: true
                }
              }}
            />
            
            <APIFunction
              name="updateSubscriptionStatus(userId, status)"
              description="Update user's subscription status"
              location="lib/database.ts"
              parameters={[
                { name: "userId", type: "string", description: "User ID", required: true },
                { name: "status", type: "string", description: "Subscription status (free/pro)", required: true }
              ]}
              usage={`import { updateSubscriptionStatus } from "@/lib/database"

await updateSubscriptionStatus("user123", "pro")`}
              returns="Updated user object"
            />
          </div>
        </section>

        {/* Analytics API */}
        <section id="analytics" className="space-y-8">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold">Analytics API</h2>
          </div>
          
          <div className="space-y-6">
            <APIFunction
              name="getAnalyticsData()"
              description="Get comprehensive analytics data"
              location="lib/database.ts"
              parameters={[]}
              usage={`import { getAnalyticsData } from "@/lib/database"

const analytics = await getAnalyticsData()`}
              returns="Analytics object with user, revenue, and credit data"
            />
            
            <APIFunction
              name="getGrowthMetrics()"
              description="Get growth and conversion metrics"
              location="lib/database.ts"
              parameters={[]}
              usage={`import { getGrowthMetrics } from "@/lib/database"

const growth = await getGrowthMetrics()`}
              returns="Growth metrics object"
            />
            
            <APIFunction
              name="getDetailedUserStats()"
              description="Get detailed user statistics for admin dashboard"
              location="lib/database.ts"
              parameters={[]}
              usage={`import { getDetailedUserStats } from "@/lib/database"

const stats = await getDetailedUserStats()`}
              returns="Detailed user statistics object"
            />
          </div>
        </section>

        {/* Admin API */}
        <section id="admin" className="space-y-8">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl font-bold">Admin Functions</h2>
          </div>
          
          <div className="space-y-6">
            <APIFunction
              name="requireAdminAccess()"
              description="Middleware to require admin access"
              location="lib/admin-auth.ts"
              parameters={[]}
              usage={`import { requireAdminAccess } from "@/lib/admin-auth"

// In your admin page
await requireAdminAccess() // Redirects if not admin`}
              returns="Throws error or redirects if not admin"
            />
            
            <APIFunction
              name="getAllUsers()"
              description="Get all users (admin only)"
              location="lib/database.ts"
              parameters={[]}
              usage={`import { getAllUsers } from "@/lib/database"

const users = await getAllUsers()`}
              returns="Array of user objects"
            />
            
            <APIFunction
              name="getRecentUserActivity(limit)"
              description="Get recent user activity"
              location="lib/database.ts"
              parameters={[
                { name: "limit", type: "number", description: "Number of users to return", required: false }
              ]}
              usage={`import { getRecentUserActivity } from "@/lib/database"

const recentUsers = await getRecentUserActivity(10)`}
              returns="Array of recent user objects"
            />
          </div>
        </section>

        {/* Utilities */}
        <section id="utilities" className="space-y-8">
          <div className="flex items-center space-x-3">
            <Code className="h-8 w-8 text-gray-600" />
            <h2 className="text-3xl font-bold">Utility Functions</h2>
          </div>
          
          <div className="space-y-6">
            <APIFunction
              name="cn(...inputs)"
              description="Utility function for conditional CSS classes"
              location="lib/utils.ts"
              parameters={[
                { name: "inputs", type: "ClassValue[]", description: "CSS class values", required: true }
              ]}
              usage={`import { cn } from "@/lib/utils"

const className = cn(
  "base-class",
  condition && "conditional-class",
  { "object-class": condition }
)`}
              returns="Merged CSS class string"
            />
            
            <APIFunction
              name="formatDate(date)"
              description="Format date for display"
              location="lib/utils.ts"
              parameters={[
                { name: "date", type: "Date", description: "Date object to format", required: true }
              ]}
              usage={`import { formatDate } from "@/lib/utils"

const formatted = formatDate(new Date())`}
              returns="Formatted date string"
            />
          </div>
        </section>

        {/* Error Handling */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold">Error Handling</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-semibold text-red-800 dark:text-red-200">Common Error Codes</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li><code>AUTH_ERROR</code> - Authentication failed or session expired</li>
                <li><code>DB_ERROR</code> - Database connection or query error</li>
                <li><code>STRIPE_ERROR</code> - Payment processing error</li>
                <li><code>VALIDATION_ERROR</code> - Input validation failed</li>
                <li><code>PERMISSION_ERROR</code> - Insufficient permissions</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Best Practices</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>Always wrap database calls in try-catch blocks</li>
                <li>Validate user input before processing</li>
                <li>Check user authentication before sensitive operations</li>
                <li>Log errors for debugging and monitoring</li>
                <li>Return appropriate HTTP status codes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rate Limiting */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Rate Limiting</h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  API Rate Limits
                </h3>
                <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                  <li>• Authentication endpoints: 5 requests per minute</li>
                  <li>• Payment endpoints: 10 requests per minute</li>
                  <li>• Database queries: 100 requests per minute</li>
                  <li>• Analytics endpoints: 20 requests per minute</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Need Help?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our additional resources 
            or reach out to the community for support.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
            >
              Getting Started Guide
            </Link>
            <Link
              href="https://github.com/zainulabedeen123/Best-Saas-Kit--V2"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              GitHub Repository
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuickNavCard({ icon, title, description, href }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className="group block p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <div className="flex items-center space-x-3">
        {icon}
        <div>
          <h3 className="font-semibold group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
}

function APIEndpoint({ method, endpoint, title, description, parameters, response }: {
  method: string;
  endpoint: string;
  title: string;
  description: string;
  parameters: Array<{ name: string; type: string; description: string; required: boolean }>;
  response: any;
}) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <span className={`px-2 py-1 text-xs font-medium rounded ${
          method === 'GET' ? 'bg-green-100 text-green-800' :
          method === 'POST' ? 'bg-blue-100 text-blue-800' :
          method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {method}
        </span>
        <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
          {endpoint}
        </code>
      </div>
      
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      
      {parameters.length > 0 && (
        <div>
          <h4 className="font-medium mb-2">Parameters</h4>
          <div className="space-y-2">
            {parameters.map((param) => (
              <div key={param.name} className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <code className="text-sm">{param.name}</code>
                  <span className="text-xs text-gray-500">({param.type})</span>
                  {param.required && <span className="text-xs text-red-500">required</span>}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-4 flex-1">
                  {param.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h4 className="font-medium mb-2">Response</h4>
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
          <code>{JSON.stringify(response, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

function APIFunction({ name, description, location, parameters = [], usage, returns }: {
  name: string;
  description: string;
  location: string;
  parameters?: Array<{ name: string; type: string; description: string; required: boolean }>;
  usage: string;
  returns: string;
}) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
          {location}
        </span>
      </div>
      
      {parameters.length > 0 && (
        <div>
          <h4 className="font-medium mb-2">Parameters</h4>
          <div className="space-y-2">
            {parameters.map((param) => (
              <div key={param.name} className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <code className="text-sm">{param.name}</code>
                  <span className="text-xs text-gray-500">({param.type})</span>
                  {param.required && <span className="text-xs text-red-500">required</span>}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-4 flex-1">
                  {param.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h4 className="font-medium mb-2">Usage</h4>
        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
          <code>{usage}</code>
        </pre>
      </div>
      
      <div>
        <h4 className="font-medium mb-1">Returns</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{returns}</p>
      </div>
    </div>
  );
}
