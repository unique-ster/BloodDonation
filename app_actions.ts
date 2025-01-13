'use server'

import { revalidatePath } from 'next/cache'

export async function submitInterest(formData: FormData) {
  // In a real application, you would save this data to a database
  const name = formData.get('name')
  const email = formData.get('email')
  const date = formData.get('date')
  const time = formData.get('time')

  console.log(`Interest submitted: ${name} (${email}) for ${date} at ${time}`)

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  revalidatePath('/')

  return { success: true, message: 'Thank you for your interest in donating blood!' }
}

