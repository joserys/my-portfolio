import { StyleSheet, View, div } from 'react-native';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './src/css/responsive.css'

import Grid from './src/components/grid.jsx';
import SideNav from './src/components/sideNav.jsx';
import ResumeSection from './src/components/resumeSection.jsx';
import ResumeCard from './src/components/resumeCard.jsx';
import ResumeList from './src/components/resumeList.jsx';


const style = StyleSheet.create({
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    color:"#F4F4F9"
  },
});

const contactInfo = [{
  id: 'location',
  icon: icon({name: 'map-location-dot', style: 'solid'}),
  iconSize: "xl",
  title: 'Mishawaka, Indiana',
  description: 'Location'
},
{
  id: 'email',
  icon: icon({name: 'envelope', style: 'solid'}),
  iconSize: "xl",
  title: 'jose.rys@outlook.com',
  description: 'Email'
},
{
  id: 'phoneNumber',
  icon: icon({name: 'phone', style: 'solid'}),
  iconSize: "xl",
  title: '(574) 992-1089',
  description: 'Cell Phone'
},
{
  id: 'linkedin',
  icon: icon({name: 'linkedin', style: 'brands'}),
  iconSize: "xl",
  title: 'Link Goes Here',
  description: 'linkedin'
}]

const skillInfo = [{
  id: 'HTML',
  icon: icon({name: 'html5', style: 'brands'}),
  iconSize: "xl",
  title: 'HTML'
},
{
  id: 'CSS',
  icon: icon({name: 'css3-alt', style: 'brands'}),
  iconSize: "xl",
  title: 'CSS'
},
{
  id: 'SASS',
  icon: icon({name: 'sass', style: 'brands'}),
  iconSize: "xl",
  title: 'SASS'
},
{
  id: 'Bootstrap',
  icon: icon({name: 'bootstrap', style: 'brands'}),
  iconSize: "xl",
  title: 'Bootstrap'
},
{
  id: 'Javascript/jQuery',
  icon: icon({name: 'square-js', style: 'brands'}),
  iconSize: "xl",
  title: 'Javascript'
},
{
  id: 'React.js',
  icon: icon({name: 'react', style: 'brands'}),
  iconSize: "xl",
  title: 'React.js'
},
{
  id: 'Angular.js',
  icon: icon({name: 'angular', style: 'brands'}),
  iconSize: "xl",
  title: 'Angular.js'
},
{
  id: 'Node.js',
  icon: icon({name: 'node', style: 'brands'}),
  iconSize: "xl",
  title: 'Node.js'
},
{
  id: 'PHP',
  icon: icon({name: 'php', style: 'brands'}),
  iconSize: "xl",
  title: 'PHP'
},
{
  id: 'SQL/MariaDB',
  icon: icon({name: 'database', style: 'solid'}),
  iconSize: "xl",
  title: 'MariaDB'
},
{
  id: 'Amazon Web Services',
  icon: icon({name: 'aws', style: 'brands'}),
  iconSize: "xl",
  title: 'Amazon Web Services'
},
{
  id: 'Java',
  icon: icon({name: 'java', style: 'brands'}),
  iconSize: "xl",
  title: 'Java'
}]


const App = () => {
  return (
    <main className="mainContainer">
      <SideNav/>
      <div className="smoothScrolling">
        <ResumeSection id="aboutMe" title="Jose Lopez-Reyes" subTitle="Full Stack Software Engineer" withBorder={true}>
          <ResumeList listToGenerate={contactInfo}></ResumeList>
          <div>To Continue growing my software engineering career, while apply my technical and analytical skills to develop efficient and effective software solutions.</div>
        </ResumeSection>

        <ResumeSection id="skills" title="Skills" withBorder={true}>
          <ResumeList listToGenerate={skillInfo}></ResumeList>
        </ResumeSection>

        <ResumeSection id ="education" title="Education" subTitle="Indiana University | 2018 - 2021" withBorder={true}>
          <div style={{marginBottom: "2rem"}}>    For my undergrad I went to Indiana University to start a 4 year program as an Informatics major. Knowing that
          I wanted to follow a fullstack developer career I decided to also minor in Computer Science. With all the college credits I received during my
          highschool career I manage to finish the 4 year program within 3 years instead graduating a year sooner then my peers. During my time at IU I
          was enrolled into the deans list 3 semesters in a row. In May 2021 I graduated from IU with a Bachelors of science in Informatics With a minor in Computer Science</div>
          <ResumeCard title="Courses Taken" subTitle="Related to Full Stack Development"></ResumeCard>
        </ResumeSection>

        <ResumeSection id="experience" title="Work Experience" subTitle="As A Full Stack Developer" withBorder={true}>
          <ResumeCard title="Firefly Integrations LLC" subTitle="Full Stack Software Engineer | Nov 2021 - Present | Middlebury, IN">
            <ul>
              <li>
                Integrated 6 new RV hardware to Firefly's RV control unit software, insuring all communication between the software and devices is functional and secure
              </li>
              <li>
                Programmed new features for Firefly's linux based RV control unit using angular.js and Node.js, insuring that the clients needs and wants are meet within the giving deadline.
              </li>
              <li>
                Insured the linux based RV control unit was up to date with the RV device communication standards
              </li>
              <li>
                Insured that the IOS and Android applications graphics and features were up to date with the main Rv control unit linux based web application, within Ionic Capacitor's Single code-base environment
              </li>
              <li>
                Insured that the IOS and Android applications functions and looked the same to each other while feeling native to their own OS environment
              </li>
            </ul>
            <div>
              <div>
                <FontAwesomeIcon className="listIcon" icon={icon({name: 'award', style: 'solid'})} size={"xl"}/>
                <div>Key Achievement: Optimized 7-year-old Software</div>
              </div>
              <div>
                Optimized firefly's 7-year-old linux-based rv control unit software. reducing the CPU usage from 15% to 2% while the software is idle, While with heavy processing the CPU usage went from 27% to 15%. During this process I had to make sure that the software functioned and looked the same as it has always been.
              </div>
            </div>
          </ResumeCard>

          <ResumeCard title="Suite-Living Nursing Home" subTitle="Full Stack Web Developers | August 2020 - May 2021 | Marion, IN">
            <ul>
              <li>
                Lead a team of 5 entry level programmers through the designing, documenting, and development of a MariaDB relational database from start to finish.
              </li>
              <li>
                Lead a 5 person team of PHP, SQL, and Ajax developers to program functional applications and scripts for suite-living.
              </li>
              <li>
                Ensured that back-end applications were functional by the deadline, by guiding and helping team members as needed.
              </li>
              <li>
                Programmed a dynamic front-end design using HTML, bootstrap, PHP, and MySQL basing the design generated on which type of user is connected.
              </li>
              <li>
                Program a maintenance ticket system using PHP and MySQL that allowed residents and staff to request maintenance throughout the facilities.
              </li>
              <li>
                Designed and developed the admin portal insuring only admin users can access the portal and insuring all functionality was working.
              </li>
            </ul>
            <div>
              <div style={{display: "inline-block", width:"100%"}}>
                <FontAwesomeIcon style={{float: "left"}} className="listIcon" icon={icon({name: 'award', style: 'solid'})} size={"xl"}/>
                <div style={{float: "left"}}>Key Achievement: Fully Developed a Relational Database From Start to Finish</div>
              </div>
              <div>
                Optimized firefly's 7-year-old linux-based rv control unit software. reducing the CPU usage from 15% to 2% while the software is idle, While with heavy processing the CPU usage went from 27% to 15%. During this process I had to make sure that the software functioned and looked the same as it has always been.
              </div>
            </div>
          </ResumeCard>
        </ResumeSection>
        <ResumeSection id="projects" title="Personal Projects" withBorder={false}>
          My Projects Will Go Here
        </ResumeSection>
      </div>
    </main>
  );
}

export default App;