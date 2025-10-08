import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'entra-id-paylocity-sync',
		color: '#0078d4',
		description:
			'Developed a bidirectional user synchronization process between Microsoft Entra ID and Paylocity using Azure Logic Apps. The workflow retrieves employees from Paylocity via the [Get All Employees API](https://developer.paylocity.com/integrations/reference/get-all-employees) and users from Microsoft Graph with selective filters. Both datasets are stored in arrays, filtered for active/valid users, and compared in a For each loop. For Paylocity, Entra ID values such as `businessPhones` and `userPrincipalName` update `phone` and `emailAddress`. For Entra ID, Paylocity values like `workAddress`, `jobTitle`, `employeeType`, `supervisorEmployeeId`, `employeeId`, `firstName`, `lastName`, `preferredName`, and department (via `customDropDownFields`) are synchronized. This integration ensures accurate and consistent user profiles across both platforms, reducing manual reconciliation and errors.',
		shortDescription:
			'Azure Logic App integration for bidirectional user sync between Microsoft Entra ID and Paylocity using RESTful APIs',
		links: [],
		logo: Assets.Azure,
		name: 'Entra ID ↔ Paylocity Sync',
		period: { from: new Date(2025, 6, 21), to: new Date(2025,7,5) },
		skills: getSkills('json', 'rest', 'graph', 'paylocity', 'azure'),
		type: 'Integration Project',
		screenshots: [
		]
	},
	{
	slug: 'exchange-workspace-provisioning',
	color: '#0078d4',
	description:
		'Developed a PowerShell automation integrated with Freshservice and Azure Automation to provision and configure reservable workspace resources (offices, cubicles) in Exchange Online. The script ingests webhook data from Freshservice Workflow Automator via a POST API call, authenticates using Azure Managed Identity, and retrieves secrets securely from Azure Key Vault. It creates room mailboxes of type “Workspace,” assigns location and capacity metadata, applies calendar processing rules, and manages permissions for managers or administrative groups. It also updates Freshservice tickets automatically with success, failure, or duplication status, creating a fully automated, secure, and auditable resource provisioning workflow.',
	shortDescription:
		'PowerShell + Azure Automation integration that provisions Exchange Online workspace mailboxes via Freshservice Workflow Automator',
	links: [],
	logo: Assets.PowerShell,
	name: 'Exchange Online Workspace Provisioning Automation',
	period: { from: new Date(2024, 1, 15), to: new Date(2025, 4, 23) },
	skills: getSkills('powershell', 'azure'),
	type: 'Automation Project',
	screenshots: [
		// Example placeholder:
		// { src: '/images/workspace-automation-diagram.png', alt: 'Automation architecture diagram' },
	],
}

];
export const title = 'Projects';
