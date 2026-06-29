import Navbar from '@/components/Navbar'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Privacy Policy | Great Dane Outdoor Services',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20 text-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: June 2025</p>

        <section className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Information We Collect</h2>
            <p>When you submit a quote request or contact form on this website, we collect your name, phone number, email address, and any details you provide about your service request. This information is used solely to respond to your inquiry and schedule services.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">SMS / Text Messaging</h2>
            <p>By providing your phone number on our quote request form, you consent to receive text messages from Great Dane Outdoor Services LLC at the number provided. These messages may include quote confirmations, appointment reminders, and service notifications.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Message frequency varies based on your service requests.</li>
              <li>Message and data rates may apply.</li>
              <li>We do not share your mobile number with third parties for marketing purposes.</li>
              <li>Reply STOP at any time to opt out of text messages. Reply HELP for help.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Respond to your quote requests and inquiries</li>
              <li>Schedule and confirm service appointments</li>
              <li>Send you quotes and invoices</li>
              <li>Follow up on completed work</li>
            </ul>
            <p className="mt-2">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Data Security</h2>
            <p>We take reasonable steps to protect your personal information. Your data is stored securely and accessible only to Great Dane Outdoor Services personnel.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Contact</h2>
            <p>If you have questions about this privacy policy, contact us at:</p>
            <p className="mt-1 font-medium text-gray-900">Great Dane Outdoor Services LLC<br />(870) 995-1166<br />gibson@greatdaneoutdoorservices.com</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
