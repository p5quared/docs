export type Platform = 
  'android' | 
  'angular' | 
  'flutter' | 
  'javascript' | 
  'nextjs' | 
  'react' | 
  'react-native' | 
  'swift' | 
  'vue';
export type Platforms = Platform[];

export const PLATFORMS: Platforms = [
  'android',
  'angular',
  'flutter',
  'javascript',
  'nextjs',
  'react',
  'react-native',
  'swift',
  'vue'
];

export const PLATFORM_DISPLAY_NAMES: Record<Platform, string> = {
  android: 'Android',
  angular: 'Angular',
  flutter: 'Flutter',
  javascript: 'JavaScript',
  nextjs: 'Next.js',
  react: 'React',
  'react-native': 'React Native',
  swift: 'Swift',
  vue: 'Vue'
};
