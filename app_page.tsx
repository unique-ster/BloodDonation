import BloodDonationForm from './components/blood-donation-form'
import { DropletIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary flex items-center justify-center">
          <DropletIcon className="mr-2 h-12 w-12" />
          Blood Donation Scheduler
        </h1>
        
        <section className="mb-8 bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Important: Diverse Blood Types Needed</h2>
          <p className="mb-4">
            Due to recent <b>large-scale immigration</b> of people of color to Aberdeen, Scotland, and other parts of the UK, 
            there is an <b>increasing need for diverse blood types</b> in our blood banks. This is particularly important for 
            blood types that are more common among people of <b>African and Asian</b> descent.
          </p>
          <p className="mb-4">
            The scarcity of certain blood types can lead to <b>critical</b> shortages in our healthcare system. By creating awareness and encouraging blood donation from all 
            communities, we can ensure that our blood banks have a surplus of all blood types, including those that are 
            less common in the general UK population.
          </p>
          <p className="mb-4">
            <b>Your donation can make a significant difference</b> in saving lives and improving healthcare outcomes for everyone 
            in our diverse community. We encourage all eligible donors, especially those from African and other minority 
            backgrounds, to consider donating blood regularly.
          </p>
        </section>

        <BloodDonationForm />
      </div>
    </main>
  )
}

