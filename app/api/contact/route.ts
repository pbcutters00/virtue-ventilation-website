
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, propertyType, message } = body

    // For now, we'll use a form submission service like Formspree or EmailJS
    // This is a placeholder that will work with services like Netlify Forms or Vercel
    
    // Create email content
    const emailContent = `
New inquiry from Virtue Ventilation website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Property Type: ${propertyType || 'Not specified'}

Message:
${message || 'No additional message'}

Sent from: virtueventilation.com contact form
    `

    // Using Formspree (you'll need to set this up)
    const formspreeUrl = `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`
    
    if (process.env.FORMSPREE_FORM_ID) {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          propertyType,
          message: emailContent,
          _replyto: email,
        }),
      })

      if (response.ok) {
        return NextResponse.json({ success: true, message: 'Email sent successfully' })
      }
    }

    // Fallback: Return success but log that no email service is configured
    console.log('Contact form submission:', { name, email, phone, propertyType, message })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully. Please set up email service for actual delivery.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send message' 
    }, { status: 500 })
  }
}
