import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim()
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

// Create Supabase client
// export const supabase = createClient(supabaseUrl, supabaseKey)
export const supabase = null

// Database table type definition
export interface NewsletterSubscriber {
  id?: number
  first_name: string
  last_name: string
  email: string
  created_at?: string
}

// Newsletter service functions
export const newsletterService = {
  // Add new subscriber
  async addSubscriber(subscriber: Omit<NewsletterSubscriber, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('user_subscribers')
      .insert([subscriber])
      .select()

    if (error) {
      throw new Error(`Failed to add subscriber: ${error.message}`)
    }

    return data
  },

  // Check if email already exists
  async checkEmailExists(email: string) {
    const { data, error } = await supabase
      .from('user_subscribers')
      .select('email')
      .eq('email', email)

    if (error) {
      throw new Error(`Failed to check email: ${error.message}`)
    }

    return data && data.length > 0
  },

  // Get all subscribers
  async getAllSubscribers() {
    const { data, error } = await supabase
      .from('user_subscribers')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(`Failed to get subscribers: ${error.message}`)
    }

    return data
  }
}
