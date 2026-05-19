import AppHeader from '../../components/AppHeader'
import SectionContainer from '../../components/SectionContainer'
import PrivacyPolicy from '../../components/PrivacyPolicy'

export default function LaraJonesPrivacy() {
  return (
    <section className="app-description">
      <SectionContainer>
        <AppHeader
          title="Lara Jones and the Caves of Madness"
          icon="/applications/lara-jones-and-the-caves-of-madness/img/app-icon.png"
          iconAlt="Lara Jones and the Caves of Madness Icon"
          storeUrl="https://phillipstemmlar.itch.io/lara-jones-and-the-caves-of-madness"
          storeLabel="Itch.io"
          colour="salmon"
        />
        <PrivacyPolicy
          appName="Lara Jones and the Caves of Madness"
          appSlug="lara-jones-and-the-caves-of-madness"
          effectiveDate="14 March 2023"
          colour="salmon"
        />
      </SectionContainer>
    </section>
  )
}
