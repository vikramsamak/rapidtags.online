import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallButton = () => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPrompt(event as BeforeInstallPromptEvent);
      console.log('beforeinstallprompt', event);
    };

    // Listen for the browser's install prompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      console.log('Install prompt not available.');
      return;
    }

    // Show the browser's installation prompt
    await installPrompt.prompt();
    console.log('Installation prompt shown.');

    // Wait for the user to respond to the prompt
    const { outcome } = await installPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    // We've used the prompt, and it can't be used again, so clear it
    setInstallPrompt(null);
  };

  // Only render the button if the install prompt is available
  if (!installPrompt) {
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      className="bg-primary text-primary-foreground focus:ring-ring fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      aria-label="Install App"
    >
      <Download className="h-6 w-6" />
    </button>
  );
};

export default PWAInstallButton;
