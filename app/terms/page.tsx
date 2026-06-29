import Navbar from '@/components/Navbar'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Terms & Conditions | Great Dane Outdoor Services',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20 text-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: June 2025</p>

        <section className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Services</h2>
            <p>Great Dane Outdoor Services LLC ("we," "us," or "our") provides pressure washing, junk removal, and landscaping services in the Arkansas area. By requesting a quote or scheduling services, you agree to these terms.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Quotes</h2>
            <p>All quotes are valid for 14 days from the date of issue unless otherwise stated. Prices are based on the information provided at the time of the quote. Conditions found on-site that differ from what was described may result in price adjustments, which will be communicated before work begins.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Scheduling & Cancellation</h2>
            <p>We require at least 24 hours notice to reschedule or cancel an appointment without a cancellation fee. Same-day cancellations may be subject to a fee at our discretion.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Payment</h2>
            <p>Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, card, check, and Venmo. Returned checks are subject to a $35 fee.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">SMS Communications</h2>
            <p>By providing your phone number when requesting a quote, you consent to receive text messages from Great Dane Outdoor Services LLC related to your service requests. Message and data rates may apply. Message frequency varies. Reply STOP to opt out at any time. Reply HELP for assistance.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Liability</h2>
            <p>We carry general liability insurance. We are not responsible for pre-existing damage to surfaces, structures, or underground infrastructure. Customers are responsible for marking utilities and removing valuable items from work areas prior to service.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Satisfaction</h2>
            <p>We stand behind our work. If you are not satisfied with the quality of service, contact us within 48 hours of job completion and we will make it right at no additional charge.</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-2">Contact</h2>
            <p>Questions about these terms? Reach us at:</p>
            <p className="mt-1 font-medium text-gray-900">Great Dane Outdoor Services LLC<br />(870) 995-1166<br />gibson@greatdaneoutdoorservices.com</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
