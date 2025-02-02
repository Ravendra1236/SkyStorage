# 🌟 SkyStorage - Modern Cloud Storage Solution

## 📋 Overview
SkyStorage is a cutting-edge cloud storage platform built with Next.js and Appwrite, designed to revolutionize how you manage and share digital content. Whether you're organizing documents, sharing media, or collaborating with team members, SkyStorage provides a seamless, secure, and intuitive experience. 

## 🎯 Purpose
Our mission is to simplify file management while maintaining enterprise-grade security and real-time collaboration capabilities. SkyStorage stands out with its modern UI/UX design, lightning-fast performance, and comprehensive feature set.

## ✨ Key Highlights

### 🔐 Security First
    - End-to-end file encryption
    - Secure authentication with email OTP
    - Granular access controls
    - Protected file sharing

### 🚀 Performance
    - Real-time updates and synchronization
    - Optimized file uploads and downloads
    - Efficient search and filtering
    - Responsive across all devices

### 💼 Professional Features
    - 📊 Storage analytics and usage tracking
    - 📁 Intelligent file organization
    - 🔄 Version control and history
    - 🤝 Team collaboration tools
    - 📱 Cross-platform compatibility

### 🎨 User Experience
    - Clean, intuitive interface
    - Drag-and-drop functionality
    - Quick preview capabilities
    - Customizable workspace

### 🛠 Technical Excellence
    - Built with Next.js 15.1.0
    - Powered by Appwrite backend
    - Styled with Tailwind CSS
    - Component library by shadcn/ui
    - Real-time charts with Recharts

## 💡 Perfect For
    - 👨‍💼 Professionals managing documents
    - 🎨 Creatives storing media files
    - 👥 Teams collaborating on projects
    - 🏢 Businesses requiring secure storage
    - 🌐 Anyone needing organized cloud storage

## 🌈 Why SkyStorage?
    - 🎯 User-centric design
    - ⚡ Lightning-fast performance
    - 🛡️ Enterprise-grade security
    - 🤝 Seamless collaboration
    - 📱 Cross-platform accessibility
    - 🔄 Real-time synchronization
    - 📊 Comprehensive analytics

Experience the future of cloud storage with SkyStorage - where security meets simplicity! 🚀

## Project Structure
    
    sky-storage/
    ├── app/
    │ ├── (auth)/
    │ │ └── layout.tsx
    │ ├── (root)/
    │ │ ├── [type]/
    │ │ │ └── page.tsx
    │ │ └── page.tsx
    │ ├── globals.css
    │ └── layout.tsx
    ├── components/
    │ ├── ui/
    │ │ └── [shadcn components]
    │ ├── ActionsDropdown.tsx
    │ ├── ActionsModalContent.tsx
    │ ├── Card.tsx
    │ ├── Chart.tsx
    │ ├── FormattedDateTime.tsx
    │ └── [other components]
    ├── lib/
    │ ├── actions/
    │ │ ├── file.actions.ts
    │ │ └── user.actions.ts
    │ ├── appwrite/
    │ │ ├── config.ts
    │ │ └── index.ts
    │ └── utils.ts
    ├── public/
    │ └── assets/
    ├── types/
    └── [config files]


## Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Appwrite instance (local or cloud)

### Environment Variables

Create a `.env` file in the root directory:

    env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=
    NEXT_PUBLIC_APPWRITE_PROJECT=
    NEXT_PUBLIC_APPWRITE_DATABASE=
    NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=
    NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=
    NEXT_PUBLIC_APPWRITE_BUCKET=
    NEXT_APPWRITE_SECRET=

### Installation

1. Clone the repository:

        bash
        git clone https://github.com/yourusername/sky-storage.git
        cd sky-storage
   
2. Install dependencies:

        bash
        npm install
        or
        yarn install
        or
        pnpm install

3. Run the development server:

        bash
        npm run dev
        or
        yarn dev
        or
        pnpm dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Appwrite Setup

    1. Create an Appwrite project
    2. Create the following collections:
       - Users Collection
       - Files Collection
    3. Create a storage bucket
    4. Set up the appropriate security rules and permissions
    5. Update environment variables with your Appwrite credentials

## Key Components

### File Management
The file management system is implemented in:

        typescript:lib/actions/file.actions.ts
        export const getFiles = async ({
        types = [],
        searchText = "",
        sort = "$createdAt-desc",
        limit,
        }: GetFilesProps) => {
        const { databases } = await createAdminClient();
        try {
        const currentUser = await getCurrentUser();
        if (!currentUser) throw new Error("User not found");
        const queries = createQueries(currentUser, types, searchText, sort, limit);
        const files = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.filesCollectionId,
        queries
        );
        return parseStringify(files);
        } catch (error) {
        handleError(error, "Failed to get files");
        }
        };

### Dashboard Analytics
The dashboard analytics are handled in:

        typescript:lib/utils.ts
        export const getUsageSummary = (totalSpace: any) => {
        return [
        {
        title: "Documents",
        size: totalSpace.document.size,
        latestDate: totalSpace.document.latestDate,
        icon: "/assets/icons/file-document-light.svg",
        url: "/documents",
        },
        // ... other file types
        ];
        };

### Authentication
User authentication is managed through:

        typescript:lib/actions/user.actions.ts
        export const sendEmailOTP = async ({ email }: { email: string }) => {
        const { account } = await createAdminClient();
        try {
        const session = await account.createEmailToken(ID.unique(), email);
        return session.userId;
        } catch (error) {
        handleError(error, "Failed to send email OTP");
        }
        };
        export const createAccount = async({
        fullName,
        email
        }: {
        fullName: string;
        email: string;
        }) => {
        // ... account creation logic
        };  

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Appwrite](https://appwrite.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

For more detailed information about specific features or components, please refer to the inline documentation in the source code.
