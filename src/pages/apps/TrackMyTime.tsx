import AppHeader, { AppDescription, AppFeatures, AppFooter } from '../../components/AppHeader'
import SectionContainer from '../../components/SectionContainer'
import Button from '../../components/Button'

const FEATURES = [
  'Create and manage tasks effortlessly.',
  'Start, pause, and switch between tasks seamlessly.',
  'Generate basic reports based on current time spent.',
  'Save reports locally on the app.',
  'View and analyze the history of tracked tasks.',
]

export default function TrackMyTime() {
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
          privacyUrl="/applications/track-my-time/privacy"
        />

        <AppDescription>
          <h3>About this application</h3>
          <br />
          <p>
            The ultimate solution for efficient time management on the go! With our user-friendly
            interface, you can effortlessly create and manage tasks tailored to your unique
            workflow. Start tracking tasks with a single tap, pause at your convenience, and
            seamlessly switch between activities.
          </p>
          <br />
          <p>
            Our app empowers you to stay in control of your time. Generate basic reports based on
            the current time spent on each task. Whether you're a professional managing multiple
            projects or a student juggling assignments, our app adapts to your needs.
          </p>
          <br />
          <p>
            Save your reports locally on the app for quick reference and analysis. Dive into the
            history of your tracked tasks, gaining insights into your productivity patterns over
            time. The intuitive design ensures a hassle-free experience, allowing you to focus on
            what matters most—your tasks.
          </p>
          <br />
        </AppDescription>

        <AppFeatures items={FEATURES} />

        <br />
        <AppFooter>
          <p>
            Take charge of your time and enhance your productivity with our Track My Time app.
            Download now and embark on a journey to efficient time management!
          </p>
          <br />
          <Button href="/#apps" colour="green">
            Back to Home
          </Button>
        </AppFooter>
        <br />
      </SectionContainer>
    </section>
  )
}
