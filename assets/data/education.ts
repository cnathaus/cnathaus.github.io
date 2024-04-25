import tum_logo from '@/assets/thumbnails/tum_logo.png';
import nus_logo from '@/assets/thumbnails/nus_logo.png';
import rwth_logo from '@/assets/thumbnails/rwth_logo.png';
import yonsei_logo from '@/assets/thumbnails/yonsei_logo.png';

enum Category {
  Education = 'Education',
  WorkExperience = 'Work Experience',
}

type CategoryColorMap = {
  [key in Category]: string;
};

export const categoryColorMap: CategoryColorMap = {
  [Category.Education]: 'var(--mantine-color-blue-9)',
  [Category.WorkExperience]: 'var(--mantine-color-red-9)',
};

export interface EducationEntry {
  title: string;
  subtitle: string;
  date: string;
  logo: { src: string; imageProps: { scale: number; marginTop?: number } };
  category: Category;
  details?: string[];
}

export const education: EducationEntry[] = [
  // {
  //   title: 'Maybe BrainLab?', // TODO: integrate this differently
  //   // subtitle: 'Robotics & Software Engineer',
  //   date: '2024 - ',
  //   logo: { src: brainlab_logo.src, imageProps: { scale: 0.9 } },
  // },
  {
    title: 'Semester Abroad',
    subtitle: 'Yonsei University, South Korea',
    date: '2023',
    logo: { src: yonsei_logo.src, imageProps: { scale: 0.7 } },
    category: Category.Education,
    details: ['top university in South Korea']
  },
  {
    title: 'M.Sc. Robotics, Cognition, Intelligence',
    subtitle: 'TUM - Technical University of Munich, Germany',
    date: '2020 - 2023',
    logo: { src: tum_logo.src, imageProps: { scale: 0.7 } },
    category: Category.Education,
    details: ['passed with distinction']
  },
  {
    title: 'Semester Abroad',
    subtitle: 'National University of Singapore',
    date: '2019',
    logo: { src: nus_logo.src, imageProps: { scale: 0.7, marginTop: 8 } },
    category: Category.Education,
    details: ['top 8 university worldwide', 'received DAAD PROMOS scholarship', 'took classes in Robotics'],
  },
  {
    title: 'B.Sc. Mechanical Engineering',
    subtitle: 'RWTH Aachen University, Germany',
    date: '2016 - 2020',
    logo: { src: rwth_logo.src, imageProps: { scale: 0.7 } },
    category: Category.Education,
    details: ['Dean\'s List (top 5% of graduating class)'],
  },
];
