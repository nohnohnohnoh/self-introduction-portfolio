import React from 'react'
import './MainStyles/Project.scss'

const Project = () => {
  return (
    <div className="project">
      <div className="projectHead">
        <div className="projectHeadContent">02. Project</div>
      </div>
      <div className="projectBox">
        <div className="projectOne">
          <img
            className="fruitImg"
            src="/images/프룯츠.png"
            alt="프룯츠 프로젝트"
          />
          <div>Fruits Project</div>
        </div>
        <div className="projectTwo">
          <img
            className="goCloudImg"
            src="/images/go-cloud.png"
            alt="go-cloud"
          />
          <div>Go-Cloud Project</div>
        </div>
      </div>
    </div>
  )
}

export default Project
