import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'entra-id-paylocity-sync',
		color: '#0078d4', // Microsoft blue (you can adjust if needed)
		description:
			'Developed a bidirectional user synchronization process between Microsoft Entra ID and Paylocity using Azure Logic Apps. The workflow retrieves employees from Paylocity via the [Get All Employees API](https://developer.paylocity.com/integrations/reference/get-all-employees) and users from Microsoft Graph with selective filters. Both datasets are stored in arrays, filtered for active/valid users, and compared in a For each loop. For Paylocity, Entra ID values such as `businessPhones` and `userPrincipalName` update `phone` and `emailAddress`. For Entra ID, Paylocity values like `workAddress`, `jobTitle`, `employeeType`, `supervisorEmployeeId`, `employeeId`, `firstName`, `lastName`, `preferredName`, and department (via `customDropDownFields`) are synchronized. This integration ensures accurate and consistent user profiles across both platforms, reducing manual reconciliation and errors.',
		shortDescription:
			'Azure Logic App integration for bidirectional user sync between Microsoft Entra ID and Paylocity via RESTful APIs.',
		links: [],
		logo: Assets.Azure, // You could also create a composite logo later
		name: 'Entra ID ↔ Paylocity Sync',
		period: {
			from: new Date() // Replace with actual project start date if you want
		},
		skills: getSkills('json', 'rest', 'graph', 'paylocity', 'azure'),
		type: 'Integration Project',
		screenshots: [
			{
				label: 'Logic App Workflow',
				src: '/screenshots/entra-paylocity-logicapp.png' // replace with your screenshot later
			},
			{
				label: 'Source Code Snippet',
				src: '/screenshots/entra-paylocity-source.png'
			}
		]
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	} 
];
export const title = 'Projects';
