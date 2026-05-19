import AppHeader from '../../components/AppHeader'
import SectionContainer from '../../components/SectionContainer'
import PrivacyPolicy from '../../components/PrivacyPolicy'

export default function TrackMyTimePrivacy() {
  return (
    <section className="app-description">
      <SectionContainer>
        <AppHeader
          title="Track My Time"
          subtitle="Effortless task tracking: Boost productivity, generate reports, stay organized!"
          icon="/applications/track-my-time/img/app-icon.png"
          iconAlt="Track My Time Icon"
          storeUrl="https://play.google.com/store/apps/details?id=com.stemmlar.track_my_time"
          storeLabel="Google Play"
          colour="green"
        />
        <PrivacyPolicy
          appName="Track My Time"
          appSlug="track-my-time"
          effectiveDate="14 March 2023"
          colour="green"
        />
      </SectionContainer>
    </section>
  )
}
