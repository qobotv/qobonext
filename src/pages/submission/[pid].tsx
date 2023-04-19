function PostPage({ data }: any) {
	return (
		<>
			<div className="grid grid-cols-2 gap-3" key={data}>
				<div>
					<div>
						<h1 className="text-xl font-bold">{ data.title }</h1>
						<p className="text-gray-500">
                            { data.views } views • { data.time }
						</p>
					</div>
				</div>
				<div>
					<h1>Placeholder</h1>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(context: any) {
    // Fetch data from openSB
    const res = await fetch(`https://qobo.tv/api/v2/get_submission?id=` + context.query.pid)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default PostPage