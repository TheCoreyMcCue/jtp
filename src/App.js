import React, { useState } from 'react';
import './App.css';
import { generateWordDocument } from './wordDocument';

import Button from '@mui/material/Button';
import { Card, FormControl, TextField } from '@mui/material';

function App() {
	const [customerName, setCustomerName] = useState('');
	const [latency, setLatency] = useState('');
	const [throughput, setThroughput] = useState('');
	const [geographies, setGeographies] = useState('');
	const [analysisMethods, setAnalysisMethods] = useState('');
	const [decisionFactor, setDecisionFactor] = useState('');
	const [ekataDeliver, setEkataDeliver] = useState('');
	const [customerDeliver, setCustomerDeliver] = useState('');

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
	const onDecisionFactorChange = (e) => setDecisionFactor(e.target.value);
	const onEkataDeliverChange = (e) => setEkataDeliver(e.target.value);
	const onCustomerDeliverChange = (e) => setCustomerDeliver(e.target.value);

	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<h1>Joint Test Plan</h1>
			</div>
			<Card
				style={{
					width: '55%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					margin: 'auto',
					padding: '4rem',
				}}
			>
				<FormControl style={{ width: '95%' }}>
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
					<TextField
						id='outlined-basic'
						label='Key Decision Factor (i.e. Reduce fraud by x%)'
						variant='outlined'
						onChange={onDecisionFactorChange}
						sx={{ marginTop: '10px' }}
					/>
					<h3 style={{ marginTop: '35px' }}>Deliverables</h3>
					<h4 style={{ marginTop: '-5px' }}>Ekata</h4>
					<TextField
						id='outlined-basic'
						label='Appended file, signal correlation, rule recommendation?'
						variant='outlined'
						onChange={onEkataDeliverChange}
					/>
					<h4>{customerName}</h4>
					<TextField
						id='outlined-basic'
						label='What will they present to us? (ROI, internal correlation, rules analysis, etc?)'
						variant='outlined'
						onChange={onCustomerDeliverChange}
					/>
				</FormControl>
			</Card>
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
							analysisMethods,
							decisionFactor,
							ekataDeliver,
							customerDeliver
						)
					}
					variant='contained'
					style={{ margin: '10px' }}
				>
					Generate Form
				</Button>
			</section>
		</div>
	);
}

export default App;
