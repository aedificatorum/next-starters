import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Amazing template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-grow flex-col">
        <h1 className="p-2 bg-palevioletred">Site title</h1>
      </main>

      <footer className="p-2 bg-gray-200">
        Template by{' '}
        <a
          href="https://github.com/aedificatorum/next-starters"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          Aedificatorum
        </a>
      </footer>
    </div>
  );
}
