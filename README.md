<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SkyStorage Documentation</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        h1, h2, h3 {
            color: #2d3748;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .feature-card {
            background: #f7fafc;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .tech-stack {
            background: #edf2f7;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
        }

        .code-block {
            background: #2d3748;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
        }

        .installation-steps {
            background: #fff;
            padding: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            margin: 20px 0;
        }

        .env-variables {
            background: #f8f9fa;
            padding: 15px;
            border-left: 4px solid #3DD9B3;
            margin: 20px 0;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            background: #3DD9B3;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 0;
        }

        .button:hover {
            background: #2fb89a;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 SkyStorage - Cloud Storage Solution</h1>
        <p>A modern cloud storage solution built with Next.js</p>
    </div>

    <section>
        <h2>✨ Features</h2>
        <div class="features">
            <div class="feature-card">
                <h3>📁 File Management</h3>
                <p>Upload, download, rename, and delete files with ease</p>
            </div>
            <div class="feature-card">
                <h3>🔄 Real-time Updates</h3>
                <p>See changes instantly across all devices</p>
            </div>
            <div class="feature-card">
                <h3>🔍 Search & Filter</h3>
                <p>Find your files quickly and efficiently</p>
            </div>
            <div class="feature-card">
                <h3>📊 Analytics</h3>
                <p>Track storage usage and file statistics</p>
            </div>
        </div>
    </section>

    <section class="tech-stack">
        <h2>🛠️ Tech Stack</h2>
        <ul>
            <li><strong>Framework:</strong> Next.js 15.1.0</li>
            <li><strong>Authentication:</strong> Appwrite</li>
            <li><strong>Styling:</strong> Tailwind CSS</li>
            <li><strong>UI Components:</strong> shadcn/ui</li>
            <li><strong>File Storage:</strong> Appwrite Storage</li>
            <li><strong>Charts:</strong> Recharts</li>
            <li><strong>Form Handling:</strong> React Hook Form</li>
            <li><strong>Validation:</strong> Zod</li>
        </ul>
    </section>

    <section>
        <h2>📁 Project Structure</h2>
        <div class="code-block">
            <pre>
sky-storage/
├── app/
│   ├── (auth)/
│   │   └── layout.tsx
│   ├── (root)/
│   │   ├── [type]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── ActionsDropdown.tsx
│   ├── ActionsModalContent.tsx
│   └── [other components]
├── lib/
│   ├── actions/
│   ├── appwrite/
│   └── utils.ts
├── public/
│   └── assets/
└── types/
            </pre>
        </div>
    </section>

    <section class="installation-steps">
        <h2>🚀 Getting Started</h2>
        
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js 18+</li>
            <li>npm/yarn/pnpm</li>
            <li>Appwrite instance</li>
        </ul>

        <h3>Environment Variables</h3>
        <div class="env-variables">
            <pre>
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
NEXT_PUBLIC_APPWRITE_DATABASE=
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=
NEXT_PUBLIC_APPWRITE_BUCKET=
NEXT_APPWRITE_SECRET=
            </pre>
        </div>

        <h3>Installation Steps</h3>
        <ol>
            <li>
                <p>Clone the repository:</p>
                <div class="code-block">
                    <code>git clone https://github.com/yourusername/sky-storage.git</code>
                    <br>
                    <code>cd sky-storage</code>
                </div>
            </li>
            <li>
                <p>Install dependencies:</p>
                <div class="code-block">
                    <code>npm install</code>
                    <br>
                    <code># or yarn install</code>
                    <br>
                    <code># or pnpm install</code>
                </div>
            </li>
            <li>
                <p>Run the development server:</p>
                <div class="code-block">
                    <code>npm run dev</code>
                    <br>
                    <code># or yarn dev</code>
                    <br>
                    <code># or pnpm dev</code>
                </div>
            </li>
        </ol>
    </section>

    <section>
        <h2>⚙️ Appwrite Setup</h2>
        <ol>
            <li>Create an Appwrite project</li>
            <li>Create required collections:
                <ul>
                    <li>Users Collection</li>
                    <li>Files Collection</li>
                </ul>
            </li>
            <li>Create a storage bucket</li>
            <li>Configure security rules and permissions</li>
            <li>Update environment variables</li>
        </ol>
    </section>

    <section>
        <h2>🤝 Contributing</h2>
        <ol>
            <li>Fork the repository</li>
            <li>Create your feature branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
            <li>Commit your changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
            <li>Push to the branch (<code>git push origin feature/AmazingFeature</code>)</li>
            <li>Open a Pull Request</li>
        </ol>
    </section>

    <section>
        <h2>📝 License</h2>
        <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>
    </section>

    <section>
        <h2>🙏 Acknowledgments</h2>
        <ul>
            <li><a href="https://nextjs.org/" target="_blank">Next.js</a></li>
            <li><a href="https://appwrite.io/" target="_blank">Appwrite</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></li>
            <li><a href="https://ui.shadcn.com/" target="_blank">shadcn/ui</a></li>
        </ul>
    </section>

    <footer style="text-align: center; margin-top: 50px; padding: 20px; border-top: 1px solid #e2e8f0;">
        <p>For more detailed information about specific features or components, please refer to the inline documentation in the source code.</p>
        <a href="https://github.com/yourusername/sky-storage" class="button">View on GitHub</a>
    </footer>
</body>
</html>
