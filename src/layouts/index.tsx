import * as React from 'react'
import { rhythm } from "../utils/typography"

var myArr : number[];
myArr = [1, 2];
myArr.push();
const MainLayout: React.FC = ({children}) => (
    <div 
    style={{
        margin: `0 auto`,
        marginBottom: rhythm(1.5),
        marginTop: rhythm(1.5),
        maxWidth: 650,
        paddingLeft: rhythm(3 / 4),
        paddingRight: rhythm(3 / 4),
      }}
    >
        {children}
    </div>
)

export default MainLayout