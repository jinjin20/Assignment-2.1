import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Self-Introduction</h1>
     <h2>Name: Park jinyoung</h2>
     <h2>Birth date: 2002.12.17</h2>
     <h2>Hobby: Watching movies</h2>
     <h2>a student at Hanyang Univercity</h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}