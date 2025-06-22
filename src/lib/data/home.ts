import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Alex';

export const lastName = 'R. González';

export const description =
	'A dedicated Systems Engineer with a strong focus on Microsoft Azure and AWS cloud architecture. I specialize in designing and implementing secure, scalable systems that prioritize business continuity, disaster recovery, and operational resilience. My approach includes building robust cloud environments, integrating critical services and applications, and aligning infrastructure with organizational goals to maximize performance and minimize downtime. I thrive on solving complex infrastructure challenges and enabling teams to move faster and more securely in the cloud.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/daftGonz' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/alex-r-gonzalez/'
	},
	{
		platform: Platform.Email,
		link: 'alex.gonzalez0@pm.me'
	}
];

export const skills = getSkills('powershell', 'json','python');
