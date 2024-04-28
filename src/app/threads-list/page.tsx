import { getThreadsList } from "@/lib/getThreadsList";

export default async function ThreadsList() {
  const messages = await getThreadsList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl grid-cols-3 lg:text-left">
        {messages.map((message) => (
          <a
            key={message.id}
            href="#"
            className="group rounded-lg border border-transparent m-1 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-sm font-semibold break-words">
              {message.snippet}
            </h2>
          </a>
        ))}
      </div>
    </main>
  );
}
