// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            I&apos;m a passionate full-stack developer with a love for creating beautiful, 
            functional digital experiences.
          </p>
          <p className="text-lg text-gray-600">
            This page is under construction. More content coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}