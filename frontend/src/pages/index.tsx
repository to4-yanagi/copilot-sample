import Head from 'next/head'
import UserTable from '../components/userTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>copilot sample</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: "50px" }}>
        <UserTable />
      </main>
    </>
  )
}
