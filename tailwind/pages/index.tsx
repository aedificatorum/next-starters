import Head from 'next/head';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Amazing template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-grow flex-col">
        <h1 className="p-2 bg-palevioletred">Site title</h1>
        <ul className="mt-4">
          <li className="p1 bg-red-50">Red 50</li>
          <li className="p1 bg-gray-200">Gray 200</li>
          <li className="p1 bg-gray-400">Gray 400</li>
          <li className="p1 bg-gray-600">Gray 600</li>
          <li className="p1 bg-indigo-400">Indigo 400</li>
          <li className="p1 bg-blue-400">Blue 400</li>
          <li className="p1 bg-green-400">Green 400</li>
        </ul>
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
