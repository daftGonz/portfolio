import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'full-time-employment',
		company: 'Conifer Realty, LLC',
		description: 'Experienced in automating cloud infrastructure with IaC tools like Azure Resource Manager and Bicep to ensure scalable, consistent deployments. Led device management for 700+ endpoints across Intune, Autopilot, and Jamf to streamline configuration and compliance. Successfully migrated on-premises environments to Azure with a focus on cost, security, and automation. Designed and maintained secure, high-performance network infrastructures for new developments. Implemented SSO and SCIM provisioning with RBAC and automated licensing to enhance identity and access management across enterprise applications.',
		contract: ContractType.FullTime,
		type: 'Information Technology',
		location: 'Rochester, NY, USA',
		period: { from: new Date(2022, 12, 0), to: new Date() },
		skills: getSkills('json', 'powershell','python'),
		name: 'Systems Engineer II',
		color: 'red',
		links: [],
		logo: Assets.ConiferRealtyLLC,
		shortDescription: 'Experienced in automating cloud infrastructure with IaC tools like Azure Resource Manager and Bicep to ensure scalable, consistent deployments. Led device management for 700+ endpoints across Intune, Autopilot, and Jamf to streamline configuration and compliance. Successfully migrated on-premises environments to Azure with a focus on cost, security, and automation. Designed and maintained secure, high-performance network infrastructures for new developments. Implemented SSO and SCIM provisioning with RBAC and automated licensing to enhance identity and access management across enterprise applications.'
	},
	{
		slug: 'full-time-employment',
		company: 'AeroSafe Global',
		description: 'Experienced in automating cloud infrastructure with IaC tools like Azure Resource Manager and Bicep to ensure scalable, consistent deployments. Led device management for 700+ endpoints across Intune, Autopilot, and Jamf to streamline configuration and compliance. Successfully migrated on-premises environments to Azure with a focus on cost, security, and automation. Designed and maintained secure, high-performance network infrastructures for new developments. Implemented SSO and SCIM provisioning with RBAC and automated licensing to enhance identity and access management across enterprise applications.',
		contract: ContractType.FullTime,
		type: 'Information Technology',
		location: 'Rochester, NY, USA',
		period: { from: new Date(2022, 03, 0), to: new Date() },
		skills: getSkills('json', 'powershell','python'),
		name: 'Systems Engineer I',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Experienced in automating cloud infrastructure with IaC tools like Azure Resource Manager and Bicep to ensure scalable, consistent deployments. Led device management for 700+ endpoints across Intune, Autopilot, and Jamf to streamline configuration and compliance. Successfully migrated on-premises environments to Azure with a focus on cost, security, and automation. Designed and maintained secure, high-performance network infrastructures for new developments. Implemented SSO and SCIM provisioning with RBAC and automated licensing to enhance identity and access management across enterprise applications.'
	},
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
