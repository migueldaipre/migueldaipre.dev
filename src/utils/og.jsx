export function og(title) {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'space-between',
				backgroundColor: '#131313',
				backgroundImage:
					'radial-gradient(circle, rgba(8,48,64,1) 0%, rgba(19,19,19,1) 85%);',
				padding: 40,
			}}
		>
			<h1
				style={{
					fontSize: 60,
					letterSpacing: -2,
					fontWeight: 700,
					color: 'white',
				}}
			>
				{title}
			</h1>
			<div
				style={{
					display: 'flex',
					gap: 5,
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<div style={{ fontSize: 20, fontWeight: 600, color: 'white' }}>
					Miguel Daipré
				</div>
				<div style={{ fontSize: 16, fontWeight: 400, color: '#D1D1D1' }}>
					migueldaipre.dev
				</div>
			</div>
		</div>
	)
}
