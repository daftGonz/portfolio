import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({name: 'Scripting & Automation',slug: 'automation' }),
	defineSkillCategory({ name: 'Applications', slug: 'apps' }),
	defineSkillCategory({ name: 'Identity & Access Management', slug: 'iam' }),
	defineSkillCategory({ name: 'Containerization', slug: 'container-platforms' }),
	defineSkillCategory({ name: 'Cloud Computing', slug: 'cloud-compute' }),
	defineSkillCategory({ name: 'Data Interchange Formats', slug: 'data-formats' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Development Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({name: 'Mobile Device Management (MDM)', slug: 'mdm'})
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'json',
		color: 'yellow',
		description:
			'3+ years of experience using JSON (JavaScript Object Notation) for data serialization and exchange between RESTful APIs, SaaS platforms, and automation workflows. Implemented JSON-based integrations with Freshservice, Microsoft 365, and Azure Logic Apps to enable seamless automation of onboarding/offboarding and service catalog requests.',
		logo: Assets.JSON,
		name: 'JSON',
		category: 'data-formats'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'2+ years of experience developing automation and integration solutions with Python. Designed and built a custom application to streamline IT inventory intake and asset tagging by integrating Freshservice ITSM API and the Brother Printer SDK, reducing asset processing time by 80%.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'powershell',
		color: 'blue',
		description:
			'6+ years of experience writing PowerShell scripts to automate administrative tasks across Microsoft 365 and Azure. Projects include automating Exchange resource provisioning, bulk user/group management in Entra ID, and Teams/SharePoint administration. Skilled in leveraging Microsoft Graph PowerShell modules and REST APIs for advanced workflows.',
		logo: Assets.PowerShell,
		name: 'PowerShell',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'2+ years of experience managing containerized applications using Docker. Proficient with Docker CLI and Docker Compose for deploying services with persistent storage, custom networks, and reverse proxy setups. Experience running self-hosted solutions such as Home Assistant, UniFi Controller, Plex, and VPN servers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'container-platforms'
	}),
	defineSkill({
		slug: 'aws',
		color: 'blue',
		description:
			'3+ years of experience working with Amazon Web Services (AWS) core services including EC2, S3, IAM, and VPC. Proficient in deploying workloads, managing IAM policies, and setting up secure cloud infrastructure. Hands-on knowledge of AWS CLI, management console, and integration with automation tools.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud-compute'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description:
			'3+ years of experience designing and managing solutions in Microsoft Azure. Skilled in Azure Virtual Machines, Azure Active Directory (Entra ID), Logic Apps, and SQL Managed Instance. Delivered integrations between enterprise apps and SaaS platforms using Azure Data Factory and automation workflows.',
		logo: Assets.Azure,
		name: 'Azure',
		category: 'cloud-compute'
	}),
	defineSkill({
		slug: 'git',
		color: 'blue',
		description:
			'2+ years of experience using Git for version control and collaboration. Proficient with branching strategies, pull requests, and resolving merge conflicts in platforms like GitHub and Azure DevOps. Applied Git in automation, infrastructure-as-code, and Python/PowerShell project repositories.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'blue',
		description:
			'2+ years of experience using JavaScript to build dynamic web applications and extend automation workflows. Familiar with DOM manipulation, event handling, and asynchronous programming. Applied JavaScript in REST API integrations, frontend scripting, and process automation with SaaS applications.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'blue',
		description:
			'7+ years of experience building and structuring web pages using HTML5. Skilled in semantic markup, accessibility standards, and integrating HTML with CSS/JavaScript to deliver responsive and user-friendly web interfaces.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'veeam',
		color: 'blue',
		description:
			'4+ years of experience implementing, administering, and troubleshooting Veeam Backup & Replication and Veeam Backup for Microsoft 365. Skilled in configuring backup jobs, retention policies, and performing disaster recovery to ensure data protection and compliance.',
		logo: Assets.Veeam,
		name: 'Veeam',
		category: 'apps'
	}),
	defineSkill({
		slug: 'intune',
		color: 'blue',
		description:
			'4+ years of experience managing and securing endpoints using Microsoft Intune. Proficient in configuring device compliance policies, app deployments, conditional access, and mobile device management (Windows, iOS, and Android).',
		logo: Assets.Intune,
		name: 'Intune',
		category: 'mdm'
	}),
		defineSkill({
		slug: 'jamfpro',
		color: 'blue',
		description:
			'3+ years of experience managing and securing endpoints using Jamf. Proficient in configuring device compliance policies (w/ integration to Entra ID), app deployments, and configuration',
		logo: Assets.JamfPro,
		name: 'Jamf Pro',
		category: 'mdm'
	}),
	defineSkill({
		slug: 'entraid',
		color: 'blue',
		description:
			'6+ years of experience administering Microsoft Entra ID (formerly Azure Active Directory). Skilled in identity lifecycle management, SSO, conditional access, MFA, and privileged identity management. Certified as a Microsoft Identity and Access Administrator Associate.',
		logo: Assets.EntraID,
		name: 'Entra ID',
		category: 'iam'
	}),
		defineSkill({
		slug: 'active-directory',
		color: 'blue',
		description:
			'6+ years of experience administering Active Directory. Skilled in identity management and RBAC (Role-based Access Control)',
		logo: Assets.ActiveDirectory,
		name: 'Active Directory',
		category: 'iam'
	}),
		defineSkill({
		slug: 'azure-automation',
		color: 'blue',
		description:
			'3+ years of experience drafting and deploying Azure Runbooks within an Azure Automation account. Accomponied by managed identities with Microsoft Graph API permissions or Entra ID role assignments.',
		logo: Assets.AzureAutomation,
		name: 'Azure Automation',
		category: 'automation'
	}),
		defineSkill({
		slug: 'azure-logic-apps',
		color: 'blue',
		description:
			'3+ years of experience drafting and deploying Azure Logic Apps for triggered or scheduled automations with third-party or Microsoft SaaS applications. Accomponied by managed identities with Microsoft Graph API permissions or Entra ID role assignments.',
		logo: Assets.AzureLogicApps,
		name: 'Azure Logic Apps',
		category: 'automation'
	}),
		defineSkill({
		slug: 'azure-devops',
		color: 'blue',
		description:
			'2+ years of experience using Azure DevOps for CI/CD operations of SQL and PowerShell scripts for new and existing data pipelines and orchestrations.',
		logo: Assets.AzureDevOps,
		name: 'Azure DevOps',
		category: 'devtools'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
