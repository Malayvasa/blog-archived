import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400"></div>
            <div className="text-gray-500 dark:text-gray-400"></div>
            {/* <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div> */}
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I'm a student at Srishti Manipal Institute in Bangalore, where I'm studying HCI and
              UI/UX. Over the past couple of years, I've been freelancing as a designer. I've
              handled Social Media creatives for companies like{' '}
              <Link href="https://leapfinance.com/">Leap Finance</Link>,{' '}
              <Link href="https://avalonmeta.com/">Avalon Labs</Link>, etc. I'm also currently
              Interning as a Product Designer at <Link href="https://modfy.video/">Modfy</Link> a
              SaaS company making Figma for video.
            </p>
            <p>
              In the past couple of months, I have been exploring creative coding and one of my
              first projects,{' '}
              <Link href="https://www.behance.net/gallery/89701531/Generative-Identity-Abstract-Symbols-From-Names">
                Generative Identity
              </Link>{' '}
              has been featured in the p5.js 2020 worldwide showcase.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
