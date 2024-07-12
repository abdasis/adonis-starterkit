import { Head, Link } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="AdonisJS StarterKit" />
      <div className="container min-h-screen flex flex-col items-center justify-center">
        <div className="text-4xl font-semibold">AdonisJS {props.version} ❤ Inertia ❤ React (ShadcnUI)</div>
        <span>
          Learn more about AdonisJS and Inertia.js by visiting the
          {' '}
          <Link
            className={'font-semibold text-teal-700'}
            href="https://docs.adonisjs.com/guides/inertia"
          >
            AdonisJS documentation
          </Link>
          .
        </span>
      </div>
    </>
  )
}
