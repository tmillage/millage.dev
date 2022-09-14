import PropTypes from 'prop-types'

const Resume = ({workDetails}) => {
  return (
    <div className='content'>
      My work history:

      <ul>
        {workDetails.map((job) => (
          <JobDetails key={job.Id} job={job} />
        ))}
      </ul>
    </div>
  )
}

Resume.propTypes = {
  workDetails: PropTypes.array.isRequired
}

const JobDetails = ({job}) => {
  return (
    <li>
      <span>{job.Title} at {job.Name} from {job.Dates}</span>
      <ul>{job.ThingsDone.map((thingDone, index) => (<ThingDone key={index} thing={thingDone} />))}</ul>
    </li>
  )
}

JobDetails.propTypes = {
  job: PropTypes.object.isRequired
}

const ThingDone = ({thing}) => {
  return (
    <>{
      thing.constructor === Array ? (
        <ul>{thing.map((thingDone, index) => (<ThingDone key={index} thing={thingDone} />))}</ul>
      ):(
        <li>{thing}</li>
      )}</>
  )
}


export default Resume