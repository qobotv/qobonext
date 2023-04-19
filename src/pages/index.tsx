import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: any) {
  return (
    <>
      {data.submissions.map((submission: any) => (
        <div key={submission.id}>
          <a href={`/submission/${encodeURIComponent(submission.id)}`} className="text-lg font-semibold">
              {submission.title}
          </a>
          <p className="text-gray-500">{submission.description}</p>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from openSB
  const res = await fetch(`https://qobo.tv/api/v2/get_submissions`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}