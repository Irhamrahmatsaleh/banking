// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// Documentation: https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // Replace this with an environment variable for security in production
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://e300b41df2ffb6d4592972400a25c0d3@o4506876178464768.ingest.us.sentry.io/4507159179034624",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0, // Sample rate for performance monitoring

  // Debugging can be enabled during development for better troubleshooting
  debug: process.env.NODE_ENV === "development",

  // Configure Replay for error reporting
  replaysOnErrorSampleRate: 1.0, // Capture 100% of errors with replay
  replaysSessionSampleRate: 0.1, // Capture 10% of all sessions

  // Add integrations if using additional Sentry features
  integrations: [
    new Sentry.Replay({
      maskAllText: true, // Mask sensitive text
      blockAllMedia: true, // Block media content
    }),
  ],

  // Optional: Custom environment settings
  environment: process.env.NODE_ENV || "development",

  // Optional: Set release version for tracking (useful for CI/CD)
  release: process.env.NEXT_PUBLIC_APP_VERSION || "unknown",
});
