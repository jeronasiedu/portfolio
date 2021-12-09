import laundry from './images/2.png'
import portfolioImage from './images/portfolio.png'
import reminder from './images/reminder.png'
import review1 from './images/review1.jpg'
import review3 from './images/review3.jpg'
import review4 from './images/review4.jpg'
const skills = [
  {
    title: 'Frontend Developer',
    duration: 'More than a year',
    icon: 'BsBraces',
    initState: true,
    data: [
      {
        name: 'HTML',
        percent: 90,
      },
      {
        name: 'CSS',
        percent: 70,
      },
      {
        name: 'JAVASCRIPT',
        percent: 65,
      },
      {
        name: 'REACT',
        percent: 55,
      },
    ],
  },
  {
    title: 'Backend Developer',
    duration: 'More than 6 months',
    icon: 'FiDatabase',
    initState: false,
    data: [
      {
        name: 'NODE',
        percent: 60,
      },
      {
        name: 'EXPRESS',
        percent: 80,
      },
      {
        name: 'MONGODB',
        percent: 85,
      },
      {
        name: 'FIREBASE',
        percent: 55,
      },
    ],
  },
  {
    title: 'Designer',
    duration: 'More than 2 months',
    icon: 'designIcon',
    initState: false,
    data: [
      {
        name: 'PHOTOSHOP',
        percent: 45,
      },
      {
        name: 'ADOBE XD',
        percent: 50,
      },
    ],
  },
]
export const service = [
  {
    first: 'UI/UX',
    last: 'Designer',
    icon: 'designIcon',
    data: [
      'I develop the user interface',
      'Web page development',
      'I create UX element interactions',
      'I position your company brand',
    ],
  },
  {
    first: 'Frontend',
    last: 'Development',
    icon: 'code',
    data: [
      'I write web contents',
      'Web page development',
      'I implement structured design ',
      'I build user friendly web apps',
    ],
  },
  {
    first: 'Backend',
    last: 'Development',
    icon: 'FiDatabase',
    data: [
      'I write high quality code',
      'Capable of managing  hosting environments',
      'Troubleshooting and debugging',
      'Keeping on top of new technologies',
    ],
  },
]
export const portfolio = [
  {
    image: laundry,
    title: 'Modern Website',
    desc: 'Website laundry website adaptable on all devices for keeping track of sales ',
    href: 'https://github.com/jeronasiedu/laundry',
  },
  {
    image: reminder,
    title: 'Reminder App',
    desc: 'Beautiful reminder app filled with UI components and animated interactions ',
    href: 'https://jeronnotes.netlify.app',
  },
  {
    image: portfolioImage,
    title: 'Portfolio',
    desc: 'A well designed portfolio, filled with inspiration and crafted to the very best',
    href: 'https://github.com/jeronasiedu',
  },
]
export const testimonial = [
  {
    image: review1,
    name: 'Margaret Webb',
    test: 'What a helpful bunch after being scammed by another web developer, I was recommended Jeron and I now know why',
  },
  {
    image: review3,
    name: 'Stanley Perry',
    test: 'I have worked with  other web designers before but was never satisfied with the end result. From start to finish, my interaction with Jeron was professional, stress-free and I had complete trust in his ability to deliver',
  },
  {
    image: review4,
    name: 'Clayton Tran',
    test: "I am extremely happy with the website that Jeron created for me, I'ts visually appealing, clean, easy to navigate and responsive, everything we asked for",
  },
]
export default skills
