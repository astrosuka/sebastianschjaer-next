import { client } from "@/sanity/client"
import { INFO_QUERY } from "@/sanity/queries"

export default async function Home() {
  const info = await client.fetch(INFO_QUERY)

  return (
    <main className="p-6">
      <h1 className="font-display mb-6 text-3xl lowercase">
        {info?.name ? info.name : "Sebastián Schjaer"}
      </h1>
      <ul>
        {info?.mail && (
          <li>
            <span className="bg-background shadow-border rounded-r-sm pr-1 pl-1 lowercase italic md:pl-0">
              Mail:{" "}
            </span>
            <a
              href={`mailto:${info.mail}`}
              className="border-text bg-background shadow-border hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 decoration-transparent"
            >
              {info.mail}
            </a>
          </li>
        )}
        {info?.instagram && (
          <li>
            <span className="bg-background shadow-border rounded-r-sm pr-1 pl-1 lowercase italic md:pl-0">
              instagram:{" "}
            </span>
            <a
              className="border-text bg-background shadow-border hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 decoration-transparent"
              href={`https://www.instagram.com/${info.instagram}/`}
              target="_blank"
            >
              @{info.instagram}
            </a>
          </li>
        )}
      </ul>
    </main>
  )
}
