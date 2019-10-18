import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Alert } from 'react-bootstrap'

const DarkAlert = styled(Alert)`{
    background-color: #202020;
    border-color: #202020;
    color: #969696;
    border-bottom: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
    margin-right: 0px;
    margin-left: 0px;
    border-right: 0px;
    border-left: 0px;
    box-shadow: 2px 2px 1px 1px rgba(32,32,32,0.5);
  }`

const Wrapper = styled('div')`
  margin: 1rem 0;
  text-align: center;
`

const Button = styled('button')`
  padding: 1rem 2rem;
`

const Count = styled('span')`
  padding: 1rem 2rem;
`

export const Counteract = () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <DarkAlert>
                <h4 className="alert-heading">Thank you for visiting!</h4>
                <p>Hope you got the resources you needed. Come visit again :)</p>
                <hr className="my-2"/>
                <p>I upload weekly and revamp bi-monthly.  You can support my work at <b>Patreon</b> | <b>Paypal</b> | <b>Marketplace</b> | <b>gumroad</b>.</p>
        </DarkAlert>
      </div>
    )
  }
  