import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import HeroSlider from '../components/HeroSlider'
import IntroBlocks from '../components/IntroBlocks'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Summary from '../components/Summary'
import Container from '../components/Container'
import SEO from '../components/SEO'




const Home = ({ data }) => {
    const postNode = {
        title: `Home - ${config.siteTitle}`,
    }

    return (
        <Layout>
            <Helmet>
                <title>{`Contact - ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postNode={postNode} pagePath="contact" customTitle />

            <Container>
                <HeroSlider />
                <IntroBlocks />
                <Testimonials />
                <Services />
                <Summary />
            </Container>
        </Layout>
    )
}

export default Home