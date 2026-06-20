import { client } from "@/sanity/client"
import { INFO_QUERY } from "@/sanity/queries"

export default async function Contact() {
  const info = await client.fetch(INFO_QUERY)

  return (
    <>
      <ul className="pointer-events-auto hidden text-sm md:block">
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
              Instagram:{" "}
            </span>
            <a
              href={`https://www.instagram.com/${info.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-text bg-background shadow-border hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 decoration-transparent"
            >
              @{info.instagram}
            </a>
          </li>
        )}
      </ul>
      <ul className="pointer-events-auto flex gap-1 text-sm md:hidden">
        {info?.mail && (
          <li>
            <a
              href={`mailto:${info.mail}`}
              className="border-text bg-background shadow-border hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 decoration-transparent"
            >
              mail
            </a>
          </li>
        )}
        {info?.instagram && (
          <li>
            <a
              href={`https://www.instagram.com/${info.instagram}/`}
              className="border-text bg-background shadow-border hover:border-accent hover:bg-accent hover:text-background rounded-full border px-2 decoration-transparent"
            >
              ig
            </a>
          </li>
        )}
      </ul>
    </>
  )
}
