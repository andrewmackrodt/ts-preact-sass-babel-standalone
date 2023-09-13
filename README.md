# ts-preact-sass-babel-standalone

A demo "application" to test transpiling TypeScript, (P)react and SASS on the
client without using any build tools. This is not intended for real-world use
and has many limitations including:

- Synchronous loading of imports (which will block the UI thread)
- Increased client CPU load
- Transfers ~5MB uncompressed JS to serve a hello world page
- No ability to debug components or imported modules
- Types are only used as IDE hints as there is no tsc
