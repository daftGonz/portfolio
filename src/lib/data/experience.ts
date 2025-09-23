import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-time-employment',
		company: 'Conifer Realty, LLC',
		description: `
		◦ Configured at scale iOS, Android, Windows, ChromeOS, and macOS devices using Microsoft Intune, Windows Autopilot, and Jamf to streamline device enrollment, configuration, and compliance.

		◦ Administered Microsoft 365 and Azure environments including Entra ID, Intune, SharePoint, Exchange, etc.

		◦ Migrated on-premises resources to Azure with adherence to the Azure Well-Architected Framework.

		◦ Designed enterprise-level network solutions for new and existing sites using Hamina Network Planner.

		◦ Configured and deployed network devices such as firewalls, switches, and access points.

		◦ Developed integrations with CI/CD using Azure DevOps, leveraging PowerShell, SQL, and RESTful APIs of SaaS solutions including but not limited to Exchange, SharePoint, Freshservice, and Paylocity.

		◦ Led an identity and mobile device management initiative to transition to employee-assigned identities and managed devices, implementing MFA and enforcement of conditional access policies through Entra ID and Intune.`,
		contract: ContractType.FullTime,
		type: 'Information Technology',
		location: 'Rochester, NY, USA',
		period: { from: new Date(2022, 11, 5), to: new Date(2025,8,11) },
		skills: getSkills('json', 'powershell','python','git','javascript','html','css','saas','azure','aws','veeam','intune','jamfpro','entraid','active-directory','azure-automation','azure-logic-apps','azure-devops'),
		name: 'Systems Engineer II',
		color: 'red',
		links: ['https://coniferllc.com'],
		logo: Assets.ConiferRealtyLLC,
		shortDescription: 'Experienced in enterprise device management across multiple platforms, administration of Microsoft 365 and Azure environments, cloud migration following best practices, and designing secure network solutions. Skilled in deploying and configuring network infrastructure, building CI/CD integrations with Azure DevOps and various SaaS platforms, and leading identity and mobile device management initiatives with strong security enforcement.'
	},
	{
		slug: 'full-time-employment',
		company: 'AeroSafe Global',
		description: `
		◦ Maintained a scalable, secure, and highly available infrastructure to support 24/7 operations, ensuring optimal performance and reliability.

		◦ Deployed and customized a Windows Deployment Server (WDS) to facilitate consistent configurations and streamline the device setup process.

		◦ Automated routine administrative tasks using scripting, improving operational efficiency and reducing manual workload.

		◦ Managed backup infrastructure, implementing backup policies and conducting disaster recovery (DR) testing to ensure business continuity.
		
		◦ Monitored and maintained network infrastructure, troubleshooting issues and coordinating with stakeholders to resolve system problems and enhance network health.`,
		contract: ContractType.FullTime,
		type: 'Information Technology',
		location: 'Rochester, NY, USA',
		period: { from: new Date(2022, 2, 5), to: new Date(2022,10,15) },
		skills: getSkills('json', 'powershell','aws','veeam','entraid'),
		name: 'Systems Engineer I',
		color: 'green',
		links: ['https://aerosafeglobal.com'],
		logo: Assets.AeroSafeGlobal,
		shortDescription: 'Maintained secure, highly available infrastructure, automated administrative tasks, managed backups with DR testing, deployed WDS for streamlined device setup, and monitored network systems to ensure performance and reliability.'
	},
	{
		slug: 'full-time-employment',
		company: 'Innovative Solutions',
		description: `
		◦ Provided on-site technical support and consulting, assisting end users with technology-related issues and implementations.

		◦ Conducted preventative maintenance on network, compute, and storage infrastructure to minimize downtime and enhance system reliability.

		◦ Collaborated with account managers and clients to proactively plan for future IT needs, supporting the development and implementation of new projects and installations.

		◦ Installed, troubleshot, and supported network-connected devices and software with continuous focus on documentation and refinement of repeatable processes.
		`,
		contract: ContractType.FullTime,
		type: 'Information Technology',
		location: 'West Henrietta, NY, USA',
		period: { from: new Date(2021, 2, 5), to: new Date(2022,2,5) },
		skills: getSkills('powershell','python','aws','intune'),
		name: 'Support Analyst',
		color: 'blue',
		links: ['https://innovativesol.com'],
		logo: Assets.InnovativeSol,
		shortDescription: 'Delivered on-site technical support, maintained infrastructure for reliability, collaborated with clients on future IT needs, and installed and troubleshot network devices and software with documented processes.'	
	},
	{
		slug: 'full-time-employment',
		company: 'Conifer Realty, LLC',
		description: `
		◦ Installed, diagnosed, repaired, and upgraded PC hardware and equipment, minimizing downtime for end users.

		◦ Drafted technical specifications and documentation for purchasing and end-user instructions, streamlining hardware acquisitions and user onboarding processes.

		◦ Assisted in establishing an employee life cycle policy with focus on facilitating automated role-based access control (RBAC) and streamlining employee onboarding.

		◦ Troubleshot hardware and software issues in-person, by phone, or via email, providing timely and accurate technical support.
		`,
		contract: ContractType.FullTime,
		type: 'Information Technology',
		location: 'Rochester, NY, USA',
		period: { from: new Date(2018, 10, 16), to: new Date(2021,2,5) },
		skills: getSkills('powershell','entraid','active-directory'),
		name: 'End-User Support Technician I',
		color: 'red',
		links: ['https://coniferllc.com'],
		logo: Assets.ConiferRealtyLLC,
		shortDescription: 'Installed, repaired, and upgraded PC hardware, created documentation to streamline onboarding and purchasing, supported RBAC policy development, and provided timely hardware and software troubleshooting.'	}
	/*
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}*/
];

export const title = 'Experience';
