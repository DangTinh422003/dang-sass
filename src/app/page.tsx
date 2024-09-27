export default function Home() {
  return (
    <h1
      className={`
        row-auto flex items-center rounded-none text-3xl

        hover:bg-slate-800

        md:text-start
      `}
    >
      hello
      <p
        className={`
          border-collapse rounded-none text-3xl text-red-400

          hover:text-2xl

          md:text-5xl
        `}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, eligendi repellat fuga esse aliquid illum at
        ipsam ea quia asperiores accusamus eveniet alias cum perspiciatis quas laboriosam nulla quibusdam voluptatem.
      </p>
    </h1>
  )
}
