import React, { useState } from 'react';
import './App.css';
import { generateWordDocument } from './wordDocument';

import Button from '@mui/material/Button';
import { FormControl, TextField } from '@mui/material';

function App() {
	const [customerName, setCustomerName] = useState('');
	const [latency, setLatency] = useState('');
	const [throughput, setThroughput] = useState('');
	const [geographies, setGeographies] = useState('');
	const [analysisMethods, setAnalysisMethods] = useState('');

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' + dd;

	const onCustomerChange = (e) => setCustomerName(e.target.value);
	const onLatencyChange = (e) => setLatency(e.target.value);
	const onThroughputChange = (e) => setThroughput(e.target.value);
	const ongeographiesChange = (e) => setGeographies(e.target.value);
	const onanalysisMethodsChange = (e) => setAnalysisMethods(e.target.value);

	return (
		<div>
			<section>
				<h1 style={{ textAlign: 'center' }}>Joint Test Plan</h1>
				<FormControl
					style={{
						display: 'flex',
						width: '30%',
						justifyContent: 'center',
						margin: 'auto',
					}}
				>
					<TextField
						id='outlined-basic'
						label='Customer Name'
						variant='outlined'
						onChange={onCustomerChange}
					/>
					<h3>Metrics & Analysis</h3>
					<TextField
						id='outlined-basic'
						label='Latency Requirement (p99)'
						variant='outlined'
						onChange={onLatencyChange}
					/>
					<TextField
						id='outlined-basic'
						label='Throughput Requirement (QPS)'
						variant='outlined'
						onChange={onThroughputChange}
						sx={{ marginTop: '10px' }}
					/>
					<TextField
						id='outlined-basic'
						label='Geographies (only if relevant to the test)'
						variant='outlined'
						onChange={ongeographiesChange}
						sx={{ marginTop: '10px' }}
					/>
					<TextField
						id='outlined-basic'
						label='Analysis Method (Rules or Machine Learning?)'
						variant='outlined'
						onChange={onanalysisMethodsChange}
						sx={{ marginTop: '10px' }}
					/>
				</FormControl>
			</section>
			<section
				style={{
					display: 'flex',
					width: '30%',
					justifyContent: 'center',
					margin: 'auto',
				}}
			>
				<Button
					onClick={() =>
						generateWordDocument(
							customerName,
							latency,
							throughput,
							geographies,
							analysisMethods
						)
					}
					variant='contained'
					style={{ marginTop: '10px' }}
				>
					Generate Form
				</Button>
			</section>
		</div>
	);
}

export default App;
