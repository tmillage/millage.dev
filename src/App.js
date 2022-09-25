import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Resume from './components/Resume'
import Examples from './components/Examples'
import Contact from './components/Contact'
import Egg from './components/Egg'

function App() {
const workDetails = [
  {
    Id:3, Name:"Tribute Tech", Title: "Senior Software Engineer", Dates: "Dec 2021 - Aug 2022", 
    ThingsDone: [
      "Researched, identified, tested, and implemented a method to highlight new obituary messages without adversely impacting backend performance",
      "Updated Google Tag Manager (GTM) datalayer events to support AB testing",
      "Identified method to extend core company software without causing incompatibilities with future releases of nopCommerce, the open source base for the project",
      "Mentored peers through ongoing code reviews"
    ]
  },
  {
    Id:2, Name:"Sumtotal Systems", Title: "Senior Software Engineer", Dates: "Jul 2012 - Dec 2021", 
    ThingsDone: [
      "Implemented third party services to improve user experiences, such as",
      ["Braintree to facilitate credit card purchases","Avalara to for sales tax collection","Adobe Connect for creating learning sessions and scheduling management", "Livefyre (Adobe Experience Manager) for real time social comment streams"],
      "Innovated custom learning management progress dashboard display for multiple audiences (encompassing individual, supervisor, and organizational levels)",
      "Drove multiple process improvements to enable team success, including",
      ["Automating running database scripts, optimizing DBA time and maintaining robust logging documentation", "Building robust reusable configurable components for team productivity improvements","Automating local IIS setup to streamline team member onboarding", "Designing framework to allow unit testing custom XML to HTML page parser engine", "Overseeing upgrades of tools libraries, such as Visual Studio, .NET, NUnit", "Optimizing application performance improvements through improved SQL queries and function implementations" ],
      "Addressed build issues to improve team throughput, such as",
      ["Minimizing inconsistent and intermittent test failures","Reducing build times with threaded testing", "Creating helpers to restore local databases and notifications for build finish"],
      "Responded to security related issues, including",
      ["Preventing cross site ajax requests","Securing uploaded client files", "Validating uploaded files"],
      "Served as team point person for Javascript and NAnt issues"
    ]
  },
  {
    Id:1, Name:"Advanced Technology Services", Title: "Web Developer", Dates: "May 2006 – Jul 2012", 
    ThingsDone: [
      "Led Caterpillar enterprise level project management/validation web application development using ColdFusion and C#",
      "Supervised project management/validation application conversion from ColdFusion 5 to ColdFusion MX 8; subsequently followed by conversion to C#/Flex",
      "Migrated project management/validation application data from ColdFusion to C#/Flex",
      "Developed method for automating Windows share requests and synchronization of access to those shares with access to associated projects",
      "Developed customized storage web application compatible with mobile barcode scanners",
      "Organized client request data from Excel spreadsheets into centralized database",
      "Created/maintained RSS feeds, signed Java applets, and enterprise web apps"
    ]
  }
]
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/resume'>Work Experience</Link>
          <Link to='/examples'>Code</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume workDetails={workDetails} />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/c" element={<Egg />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
