'use server'

export async function submitQuoteLanding(formData: FormData) {
  const entry = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    service: formData.get('service'),
    source: formData.get('source'),
    optin: formData.get('optin') === 'on',
    timestamp: new Date().toISOString(),
    origin: 'junk-removal-landing',
  }
  console.log('[New Quote Request]', entry)
  return { success: true }
}
