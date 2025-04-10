const JOTFORM_API_KEY = process.env.JOTFORM_API_KEY
const JOTFORM_API_URL = "https://api.jotform.com"

// Create a new form based on a template
export async function createFormFromTemplate(templateId: string, formTitle: string) {
  try {
    const response = await fetch(`${JOTFORM_API_URL}/form/${templateId}/clone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `apiKey=${JOTFORM_API_KEY}`,
    })

    const data = await response.json()

    if (data.responseCode !== 200) {
      throw new Error("Failed to clone form")
    }

    const newFormId = data.content.id

    // Update the form title
    await updateFormProperties(newFormId, {
      title: formTitle,
    })

    return newFormId
  } catch (error) {
    console.error("Error creating form from template:", error)
    throw error
  }
}

// Update form properties
export async function updateFormProperties(formId: string, properties: Record<string, any>) {
  try {
    const formData = new URLSearchParams()
    formData.append('apiKey', JOTFORM_API_KEY as string)
    
    for (const [key, value] of Object.entries(properties)) {
      formData.append(key, value)
    }

    const response = await fetch(`${JOTFORM_API_URL}/form/${formId}/properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })

    const data = await response.json()

    if (data.responseCode !== 200) {
      throw new Error("Failed to update form properties")
    }

    return data.content
  } catch (error) {
    console.error("Error updating form properties:", error)
    throw error
  }
}

// Generate a QR code for a form
export function generateQRCode(formId: string) {
  const formUrl = `https://form.jotform.com/${formId}`
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(formUrl)}`

  return qrCodeUrl
}
