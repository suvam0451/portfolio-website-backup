import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
// import { SiteMetadataQuery } from 'generated/types/gatsby'
import { css } from '@emotion/core'
import { Header } from './Header'

 
const wrapper = css`
margin: 0 auto;
max-width: 960px;
padding: 0 1.0875rem 1.45rem;
`

interface LayoutProps {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({children}: LayoutProps) => {
    // const data = 
    return  (
        <main>
            <Helmet
                meta={[
                    {
                        name: 'description',
                        content: 'a test gatsby website'
                    },
                    {
                        name: 'keywords',
                        content: 'gatsby, gatsbyjs, sample, demo, typescript'
                    }
                ]}
            />
            <Header title='girlslikeyou'/>
            <div css={wrapper}>{children}</div>
        </main>
    )
}