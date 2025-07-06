import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Containerization', slug: 'container-platforms' }),
	defineSkillCategory({ name: 'Data Interchange Formats', slug: 'data-formats' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
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
			'3+ years of experience using JSON to support automation workflows between Freshservice, Microsoft 365, and various SaaS platforms. Built fully automated service catalog workflows and end-to-end employee onboarding/offboarding solutions using Azure Logic Apps and custom RESTful APIs, enabling seamless data exchange and reducing manual intervention.',
		logo: Assets.JSON,
		name: 'JSON',
		category: 'data-formats'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'Designed and built a custom Python web application to streamline IT inventory intake and asset tag generation, integrating with Freshservice and Brother Printer SDK. Reduced asset processing time from 10 minutes to under 2 minutes per asset, significantly improving operational efficiency.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'powershell',
		color: 'blue',
		description:
			'7+ years of experience developing custom scripts to automate administrative and programmatic tasks across Microsoft 365 and Azure environments. Projects include automating creation of Exchange Workspace resources, bulk updates to users and groups in Entra ID, and scripting workflows for Teams and SharePoint administration.',
		logo: Assets.PowerShell,
		name: 'PowerShell',
		category: 'pro-lang'
	}),
		defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'2+ years of personal experience managing Docker containers in my home lab, running services like Home Assistant, UniFi Controller, Plex server, and VPN server. I\'ve used Docker Compose extensively to deploy and maintain these applications with persistent storage, custom networks, and reverse proxy configurations',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'container-platforms'
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
