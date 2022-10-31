import {
	AlignmentType,
	Document,
	HeadingLevel,
	Packer,
	Paragraph,
	TextRun,
} from 'docx';
import { saveAs } from 'file-saver';

export const generateWordDocument = async (
	customer,
	latency,
	throughput,
	geographies,
	analysisMethod,
	decisionFactor,
	ekataDeliver,
	customerDeliver
) => {
	let doc = new Document({
		sections: [
			{
				children: [
					new Paragraph({
						heading: HeadingLevel.HEADING_1,
						alignment: AlignmentType.CENTER,
						children: [
							new TextRun({
								text: `Joint Test Plan - ${customer}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 40,
							}),
						],
					}),
					new Paragraph({
						heading: HeadingLevel.HEADING_3,
						// alignment: AlignmentType.CENTER,
						children: [
							new TextRun({
								text: 'Objective Statement',
								break: 2,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 28,
							}),
							new TextRun({
								break: 2,
							}),
						],
					}),
					new Paragraph({
						border: {
							top: {
								color: '#000000',
								space: 4,
								style: 'single',
								size: 6,
							},
							bottom: {
								color: '#000000',
								space: 4,
								style: 'single',
								size: 6,
							},
							left: {
								color: '#000000',
								space: 4,
								style: 'single',
								size: 6,
							},
							right: {
								color: '#000000',
								space: 4,
								style: 'single',
								size: 6,
							},
						},
						children: [
							new TextRun({
								text: `Offline historical test to evaluate Ekata’s Address Risk API’s features in a modeling exercise to determine if Ekata can help improve ${customer}’s ability to detect fraud by {X}%.`,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: 'Metrics & Analysis',
								break: 1,
								font: 'arial',
								color: '#999999',
								size: 28,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						break: 1,
						children: [
							new TextRun({
								text: `Latency Requirement (p99): ${latency}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						children: [
							new TextRun({
								text: `Throughput Requirement (QPS): ${throughput}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						children: [
							new TextRun({
								text: `Geographies: ${geographies}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						children: [
							new TextRun({
								text: `Analysis Method: ${analysisMethod}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						children: [
							new TextRun({
								text: `Key Decisioning Factor: ${decisionFactor}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						children: [
							new TextRun({
								text: 'Workflow',
								break: 1,
								font: 'arial',
								color: '#999999',
								size: 28,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						break: 1,
						children: [
							new TextRun({
								text: `Ekata: ${ekataDeliver}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
					new Paragraph({
						bullet: { level: 0 },
						break: 1,
						children: [
							new TextRun({
								text: `${customer}: ${customerDeliver}`,
								bold: true,
								font: 'arial',
								color: '#000000',
								size: 20,
							}),
						],
					}),
				],
			},
		],
	});
	Packer.toBlob(doc).then((blob) => {
		// saveAs from FileSaver will download the file
		saveAs(blob, `${customer} - JTP.docx`);
	});
};
