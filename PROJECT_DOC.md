
# Project Documentation: Rapitags.online

## 1. Project Overview

Rapitags.online is an AI-powered web application that helps users generate relevant and effective hashtags for their social media content. Users can enter a title or a keyword related to their content, select a social media platform, and the application will provide a list of optimized hashtags to improve their content's visibility.

The application is designed with a modern, user-friendly interface and is built with performance and scalability in mind. It acts as a frontend that communicates with an external AI service for the core hashtag generation functionality.

## 2. Features

* **AI-Powered Hashtag Generation:** Utilizes an external AI service to generate smart and relevant hashtag suggestions.
* **Multi-Platform Support:** Supports various social media platforms, including Instagram, TikTok, YouTube, LinkedIn, and Twitter.
* **Easy to Use:** Simple and intuitive interface for a seamless user experience.
* **Copy to Clipboard:** Allows users to quickly copy the generated hashtags with a single click.
* **Selective Copy:** Users can select specific hashtags to copy.
* **Responsive Design:** The application is fully responsive and works beautifully on all devices, from desktops to mobile phones.
* **Lightweight and Fast:** Built with modern technologies like Next.js and Tailwind CSS for optimal performance.
* **Toast Notifications:** Provides feedback to the user through toast notifications for actions like successful generation or copying of hashtags.

## 3. Technologies Used

### Frontend

* **[Next.js](https://nextjs.org/):** A React framework for building server-side rendered and statically generated web applications.
* **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
* **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that compiles to plain JavaScript.
* **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
* **[Shadcn/ui](https://ui.shadcn.com/):** A collection of re-usable UI components.
* **[Lucide React](https://lucide.dev/):** A library of simply designed, beautiful icons.
* **[Sonner](https://sonner.emilkowal.ski/):** A toast notification library for React.
* **[Axios](https://axios-http.com/):** A promise-based HTTP client for the browser and Node.js.
* **[clsx](https://github.com/lukeed/clsx):** A tiny utility for constructing `className` strings conditionally.
* **[tailwind-merge](https://github.com/dcastil/tailwind-merge):** A utility to merge Tailwind CSS classes without style conflicts.

### Backend

The backend logic for hashtag generation is handled by an external AI service. The Next.js application communicates with this service through a webhook.

## 4. Project Structure

```bash
.
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── nixpacks.toml
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── .git/
├── .next/
├── node_modules/
├── public/
│   ├── icon/
│   └── screenshots/
└── src/
    ├── app/
    │   ├── api/
    │   │   └── generate-hashtags/
    │   │       └── route.ts
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── manifest.ts
    │   ├── not-found.tsx
    │   ├── opengraph-image.tsx
    │   ├── page.tsx
    │   ├── robots.ts
    │   └── sitemap.ts
    ├── components/
    │   ├── ui/
    │   ├── footer.tsx
    │   ├── header.tsx
    │   ├── hero-section.tsx
    │   ├── how-it-works.tsx
    │   └── why-choose-us.tsx
    ├── constants/
    │   ├── app.constants.ts
    │   └── index.ts
    ├── lib/
    │   └── utils.ts
    ├── types/
    │   ├── api.types.ts
    │   └── index.ts
    └── utils/
        ├── api.utils.ts
        └── index.ts
```

### Key Files and Directories

* **`src/app/page.tsx`:** The main entry point of the application's UI.
* **`src/app/api/generate-hashtags/route.ts`:** The API route that handles hashtag generation requests.
* **`src/components/hero-section.tsx`:** The main component that contains the hashtag generation form and displays the results.
* **`src/components/ui/`:** Contains the reusable UI components from Shadcn/ui.
* **`src/utils/api.utils.ts`:** Contains the utility function for making API requests.
* **`public/`:** Contains static assets like images and icons.

## 5. How it Works

1. **User Interaction:** The user enters a title or keyword and selects a platform in the `HeroSection` component.
2. **API Request:** When the "Generate Hashtags" button is clicked, the `handleGenerate` function in `hero-section.tsx` is triggered. This function makes a POST request to the `/api/generate-hashtags` endpoint with the user's input.
3. **Backend Forwarding:** The `/api/generate-hashtags` API route receives the request and forwards it to an external AI service using a webhook URL defined in the `GENERATE_HASHTAGS_WEBHOOK` environment variable.
4. **AI Processing:** The external AI service processes the request, generates the hashtags, and sends them back to the Next.js application.
5. **Displaying Results:** The Next.js application receives the hashtags and displays them to the user in the `HeroSection` component.
6. **Copy to Clipboard:** The user can then select the desired hashtags and copy them to their clipboard.

## 6. API Endpoints

### POST /api/generate-hashtags

This endpoint is responsible for generating hashtags.

* **Method:** `POST`
* **Request Body:**

    ```json
    {
      "title": "Your content title or keyword",
      "platform": "youtube"
    }
    ```

* **Success Response (200):**

    ```json
    {
      "data": [
        "#hashtag1",
        "#hashtag2",
        "#hashtag3"
      ]
    }
    ```

* **Error Response (400):**

    ```json
    {
      "message": "Title and platform are required"
    }
    ```

* **Error Response (500):**

    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## 7. Environment Variables

The following environment variables are required to run the application:

* `GENERATE_HASHTAGS_WEBHOOK`: The URL of the external AI service's webhook for generating hashtags.
