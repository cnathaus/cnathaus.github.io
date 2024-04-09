import brainlab_logo from '@/assets/thumbnails/brainlab_logo.png';
import tum_logo from '@/assets/thumbnails/tum_logo.png';
import nus_logo from '@/assets/thumbnails/nus_logo.png';
import rwth_logo from '@/assets/thumbnails/rwth_logo.png';
import yonsei_logo from '@/assets/thumbnails/yonsei_logo.png';

export const cv = [
  {
    title: 'Maybe BrainLab?',
    // subtitle: 'Robotics & Software Engineer',
    date: '2024 - ',
    logo: { src: brainlab_logo.src, imageProps: { scale: 0.9 } },
  },
  {
    title: 'Semester Abroad',
    subtitle: 'Yonsei University, South Korea',
    date: '2023',
    logo: { src: yonsei_logo.src, imageProps: { scale: 0.7 } },
  },
  {
    title: 'M.Sc. Robotics, Cognition, Intelligence',
    subtitle: 'Technical University of Munich, Germany',
    date: '2020 - 2023',
    logo: { src: tum_logo.src, imageProps: { scale: 0.7 } },
  },
  {
    title: 'Semester Abroad',
    subtitle: 'National University of Singapore',
    date: '2019',
    logo: { src: nus_logo.src, imageProps: { scale: 0.7, marginTop: 8 } },
  },
  {
    title: 'B.Sc. Mechanical Engineering',
    subtitle: 'RWTH Aachen University, Germany',
    date: '2016 - 2020',
    logo: { src: rwth_logo.src, imageProps: { scale: 0.7 } },
  },
];
