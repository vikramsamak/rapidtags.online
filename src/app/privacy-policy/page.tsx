export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 text-justify md:px-6">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">
          Last updated: October 13, 2025
        </p>
        <p className="mb-4">
          Welcome to Rapitags.online. We are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and share
          information when you use our service.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-bold">Information We Collect</h2>
        <p className="mb-4">
          We collect the following information when you use our service:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            <strong>Content Information:</strong> The title or keyword and the
            social media platform you provide to generate hashtags.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how
            you use our service, such as your IP address, browser type, and the
            pages you visit. This helps us understand how our service is used
            and how we can improve it.
          </li>
        </ul>

        <h2 className="mt-6 mb-2 text-2xl font-bold">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            <strong>To Generate Hashtags:</strong> We use the title and platform
            you provide to generate relevant hashtags for your content.
          </li>
          <li>
            <strong>To Improve Our Service:</strong> We analyze usage data to
            understand how our service is used and to make it better.
          </li>
        </ul>

        <h2 className="mt-6 mb-2 text-2xl font-bold">Data Sharing</h2>
        <p className="mb-4">
          To generate hashtags, we send the title and platform you provide to a
          third-party AI service. We do not share any other personal information
          with this service.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-bold">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-bold">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, you can contact
          us by visiting this page on our website:{' '}
          <a
            href="https://vikramsamak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://vikramsamak.com
          </a>
        </p>
      </div>
    </section>
  );
}
