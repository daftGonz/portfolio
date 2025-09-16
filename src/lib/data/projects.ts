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
	}
];
export const title = 'Projects';
