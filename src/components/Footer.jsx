import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-suit/50 sm:px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-display font-bold text-suit">{site.name}</p>
          <p className="mt-1">{site.affiliationKo}</p>
          <p>{site.address} · Tel {site.tel}</p>
        </div>
        <div className="flex gap-5">
          <a className="hover:text-suit" href={site.github}>GitHub</a>
          <a className="hover:text-suit" href={site.piHomepage}>PI Homepage</a>
          <a className="hover:text-suit" href={site.orcid}>ORCID</a>
          <a className="hover:text-suit" href={`mailto:${site.email}`}>Email</a>
        </div>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  )
}
