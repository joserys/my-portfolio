import { StyleSheet, View, Text } from 'react-native';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import Grid from './src/components/grid.jsx';
import SideNav from './src/components/sideNav.jsx';
import ResumeSection from './src/components/resumeSection.jsx';
import ResumeCard from './src/components/resumeCard.jsx';
import ResumeList from './src/components/resumeList.jsx';


const style = StyleSheet.create({
  container: {
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundColor: '#ab67d8'
  },
});

const contactInfo = [{
  id: 'location',
  icon: icon({name: 'map-location-dot', style: 'solid'}),
  iconSize: "2xl",
  title: 'Location',
  description: 'Mishawaka, Indiana'
},
{
  id: 'email',
  icon: icon({name: 'envelope', style: 'solid'}),
  iconSize: "2xl",
  title: 'Email',
  description: 'jose.rys@outlook.com'
},
{
  id: 'phoneNumber',
  icon: icon({name: 'phone', style: 'solid'}),
  iconSize: "2xl",
  title: 'Cell Phone',
  description: '(574) 992-1089'
},
{
  id: 'linkedin',
  icon: icon({name: 'linkedin', style: 'brands'}),
  iconSize: "2xl",
  title: 'linkedin',
  description: 'link goes here'
}]

const skillInfo = [{
  id: 'HTML',
  icon: icon({name: 'html5', style: 'brands'}),
  iconSize: "2xl",
  title: 'HTML'
},
{
  id: 'CSS',
  icon: icon({name: 'css3-alt', style: 'brands'}),
  iconSize: "2xl",
  title: 'CSS'
},
{
  id: 'SASS',
  icon: icon({name: 'sass', style: 'brands'}),
  iconSize: "2xl",
  title: 'SASS'
},
{
  id: 'Bootstrap',
  icon: icon({name: 'bootstrap', style: 'brands'}),
  iconSize: "2xl",
  title: 'Bootstrap'
},
{
  id: 'Javascript',
  icon: icon({name: 'square-js', style: 'brands'}),
  iconSize: "2xl",
  title: 'Javascript'
},
{
  id: 'jQuery',
  icon: icon({name: 'linkedin', style: 'brands'}),
  iconSize: "2xl",
  title: 'jQuery'
},
{
  id: 'React.js',
  icon: icon({name: 'react', style: 'brands'}),
  iconSize: "2xl",
  title: 'React.js'
},
{
  id: 'Angular.js',
  icon: icon({name: 'angular', style: 'brands'}),
  iconSize: "2xl",
  title: 'Angular.js'
},
{
  id: 'Node.js',
  icon: icon({name: 'node', style: 'brands'}),
  iconSize: "2xl",
  title: 'Node.js'
},
{
  id: 'PHP',
  icon: icon({name: 'php', style: 'brands'}),
  iconSize: "2xl",
  title: 'PHP'
},
{
  id: 'SQL/MariaDB',
  icon: icon({name: 'database', style: 'solid'}),
  iconSize: "2xl",
  title: 'MariaDB'
},
{
  id: 'Amazon Web Services',
  icon: icon({name: 'aws', style: 'brands'}),
  iconSize: "2xl",
  title: 'Amazon Web Services'
},
{
  id: 'Java',
  icon: icon({name: 'java', style: 'brands'}),
  iconSize: "2xl",
  title: 'Java'
}]


const App = () => {
  return (
    <main style={style.container}>
      <Grid layout={["sideNav ViewContent"]} sizes={{ cols: ["300px", "Auto"]}} scrollable={false}>
        <SideNav/>
        <View style={{overflowY: "scroll"}}>
          <ResumeSection title="Jose Lopez-Reyes" subTitle="Full Stack Software Engineer" withBorder={true}>
            <ResumeList listToGenerate={contactInfo}></ResumeList>
            <Text>To Continue growing my software engineering career, while apply my technical and analytical skills to develop efficient and effective software solutions.</Text>
          </ResumeSection>

          <ResumeSection title="Skills" withBorder={true}>
            <ResumeList listToGenerate={skillInfo}></ResumeList>
          </ResumeSection>

          <ResumeSection title="Education" subTitle="Indiana University | 2018 - 2021" withBorder={true}>
            <Text>Bachelor of science in Informatics With a minor in Computer Science</Text>
          </ResumeSection>

          <ResumeSection title="Experience" withBorder={true}>
            <resumeCard title="Firefly Integrations LLC" subTitle="Full Stack Software Engineer | Nov 2021-Present | Middlebury, IN">
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
              <ResumeList listToGenerate={[{id: 'fireflyAchievement', icon: icon({name: 'award', style: 'solid'}), title: 'Key Achievements'}]}></ResumeList>
            </resumeCard>
          </ResumeSection>
          <ResumeSection title="Projects" withBorder={false}>
            <Text>My Projects Will Go Here</Text>
          </ResumeSection>
        </View>
      </Grid>
    </main>
  );
}

export default App;