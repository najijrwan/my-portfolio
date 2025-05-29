import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code2, Rocket } from 'lucide-react';
import Navbar from '../components/Navbar';
import { h2Ele } from './About.jsx';

export default function Career() {
  return (
    <article className="bg-[#121212] min-h-screen text-white font-sans">
      <Navbar />
      <div className="p-5 sm:p-8">
        <h2 className={`${h2Ele} text-center text-3xl sm:text-4xl font-bold text-yellow-400 mb-10`}>
          🚀 Career Timeline
        </h2>

        <VerticalTimeline lineColor="#ffdb70">
          {/* Software Engineer */}
          <VerticalTimelineElement
            contentStyle={{
              background: '#1e1e1e',
              color: '#fff',
              boxShadow: 'var(--shadow-3)',
              border: '1px solid hsl(45, 100%, 72%)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
            date="2022 - Present"
            iconStyle={{
              background: 'linear-gradient(to right, #ffdb70, #facc15)',
              color: '#000',
              boxShadow: '0 0 10px #ffdb70',
              animation: 'pulse 1.5s infinite ease-in-out',
            }}
            icon={<Briefcase />}
          >
            <h3 className="text-xl font-bold tracking-wide text-yellow-400">Software Engineer</h3>
            <h4 className="text-md font-semibold text-gray-300">TechCorp</h4>
            <p className="mt-2 text-sm text-gray-300">
              Built scalable apps using React, Firebase, and Node.js. Led UI redesign with Tailwind.
            </p>
          </VerticalTimelineElement>

          {/* Frontend Developer */}
          <VerticalTimelineElement
            contentStyle={{
              background: '#1e1e1e',
              color: '#fff',
              boxShadow: 'var(--shadow-2)',
              border: '1px solid hsl(45, 100%, 72%)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
            date="2020 - 2022"
            iconStyle={{
              background: 'linear-gradient(to right, #ffdb70, #facc15)',
              color: '#000',
              boxShadow: '0 0 10px #ffdb70',
              animation: 'pulse 1.5s infinite ease-in-out',
            }}
            icon={<Code2 />}
          >
            <h3 className="text-xl font-bold tracking-wide text-yellow-400">Frontend Developer</h3>
            <h4 className="text-md font-semibold text-gray-300">DevSolutions</h4>
            <p className="mt-2 text-sm text-gray-300">
              Developed modern UIs with React and Tailwind, collaborated in agile teams, improved performance by 30%.
            </p>
          </VerticalTimelineElement>

          {/* Intern */}
          <VerticalTimelineElement
            contentStyle={{
              background: '#1e1e1e',
              color: '#fff',
              boxShadow: 'var(--shadow-1)',
              border: '1px solid hsl(45, 100%, 72%)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
            date="2019 - 2020"
            iconStyle={{
              background: 'linear-gradient(to right, #ffdb70, #facc15)',
              color: '#000',
              boxShadow: '0 0 10px #ffdb70',
              animation: 'pulse 1.5s infinite ease-in-out',
            }}
            icon={<Rocket />}
          >
            <h3 className="text-xl font-bold tracking-wide text-yellow-400">Intern Developer</h3>
            <h4 className="text-md font-semibold text-gray-300">CodeSpark</h4>
            <p className="mt-2 text-sm text-gray-300">
              Contributed to frontend tasks, built mini-projects in JavaScript, and learned Git and collaboration.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </article>
  );
}
