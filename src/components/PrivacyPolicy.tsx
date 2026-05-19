import type { ButtonColour } from '../types/App'
import Button from './Button'

interface PrivacyPolicyProps {
  appName: string
  appSlug: string
  effectiveDate: string
  colour: ButtonColour
}

export default function PrivacyPolicy({
  appName,
  appSlug,
  effectiveDate,
  colour,
}: PrivacyPolicyProps) {
  return (
    <div className="app-description">
      <div>
        <h2>Privacy Policy</h2>
        <span>Effective date: {effectiveDate}</span>
      </div>
      <br />
      <div>
        <p>
          Stemmlar Technologies ("us", "we", or "our") operates the {appName} mobile application
          (the "Service").
        </p>
        <br />
        <p>
          This page informs you of our policies regarding the collection, use, and disclosure of
          personal data when you use our Service and the choices you have associated with that data.
        </p>
        <br />
        <p>We do not collect any user-specific data, and we do not share any data with third parties.</p>
        <br />
        <h4>Data Collection and Use</h4>
        <br />
        <p>
          The only data that {appName} collects is related to the tasks created and time tracked by
          the user within the application. This includes the list of tasks created by the user and
          the time tracked per task per day.
        </p>
        <br />
        <h4>Storage of Collected Data</h4>
        <br />
        <p>
          All data collected by {appName} is stored locally on the user's device and is never
          uploaded to any external service or server. The collected data resides solely on the
          user's device for the purpose of providing task tracking functionality within the
          application.
        </p>
        <br />
        <h4>Data Security</h4>
        <br />
        <p>
          While Stemmlar Technologies takes reasonable measures to secure the data stored on the
          user's device, it is important to note that any data stored on the device can be accessed
          by anyone who has physical access to the device. Users are advised to take necessary
          precautions to safeguard their device and data.
        </p>
        <br />
        <h4>Data Deletion</h4>
        <br />
        <p>
          If the {appName} application is deleted from the user's device, all traces of the
          collected data will be deleted as well. This includes the list of tasks created and the
          time tracked per task per day.
        </p>
        <br />
        <h4>Changes to This Privacy Policy</h4>
        <br />
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this
          page periodically for any changes. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>
        <br />
        <h4>Contact Us</h4>
        <br />
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
        <br />
      </div>
      <br />
      <div className="app-footer">
        <Button href={`/applications/${appSlug}`} colour={colour}>
          Back to Application
        </Button>
        <Button href="/#contact" colour={colour} style={{ marginLeft: '10px' }}>
          Contact Us
        </Button>
      </div>
      <br />
    </div>
  )
}
