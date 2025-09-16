import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Associate of Science',
		description: 'Program: Computer Information Systems | Specalization: Networking',
		location: 'Syracuse, NY',
		logo: Assets.Unknown,
		name: '',
		organization: 'SUNY OCC',
		period: { from: new Date(2016, 7, 1), to: new Date(2018, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra','Calculus', 'Python','Creative Writing','Technical Writing','Project Management', 'C++', 'Java', 'English']
	}
];

export const title = 'Education';
