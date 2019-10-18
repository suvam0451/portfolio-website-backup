import React from "react"


// const Alert = (title: string, type: string, children : any) => {
const Alert = (title, type, children) => {
    return (
      <div className={`alert alert-${type}`}>
        <h4 className={type}>{title}</h4>
        {children}
      </div>
    )
  }
  
export default Alert;