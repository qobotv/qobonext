function SubmissionPage({ data }: any) {
	return (
		<>
			<div className="grid grid-cols-2 gap-3" key={data}>
				<div>
					<div>
						<SubmissionView type={data.type} file={"https://" + process.env.BUNNY_CDN_URL + data.file}/>
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

function SubmissionView({ type, file }: any) {
	if (type == 0) {
		return (
			<>
				<h1>It's a video!</h1>
			</>
		)
	}

	if (type == 2) {
		return (
			<>
				<img src={ file } className="w-full"/>
			</>
		)
	}

	return (
		<>
			<h1>Invalid submission type</h1>
		</>
	)
}

export async function getServerSideProps(context: any) {
    // Fetch data from openSB
    const res = await fetch(process.env.QOBOSITE + `/api/v2/get_submission?id=` + context.query.pid)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default SubmissionPage