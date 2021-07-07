import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import SectionContainer from '@/components/SectionContainer'

export default function Resources() {
  return (
    <>
      <SectionContainer>
        <PageSeo
          title={`Projects - ${siteMetadata.author}`}
          description={siteMetadata.description}
          url={`${siteMetadata.siteUrl}/resources`}
        />
        <Card
          key={'Hi'}
          title={'Creative Coding Resources'}
          description={'d.description'}
          imgSrc={'/static/images/time-machine.jpg'}
          href={'d.href'}
        />
        <h1>Hello World!</h1>
      </SectionContainer>
    </>
  )
}
