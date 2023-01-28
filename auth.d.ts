import type { DefaultSession } from "@auth/core/types"

declare module "@auth/core/types" {
  export interface Session {
    user?: {
      id?: string
      email?: string
      username?: string
      display_name?: string
      locale?: string
      avatar?: string
      avatar_decoration?: any
      discriminator?: string
      public_flags?: number
      flags?: number
      banner?: any
      banner_color?: string
      accent_color?: number
      mfa_enabled?: boolean
      premium_type?: number
      premium_since?: any
      communication_disabled_until?: any
      is_pending?: boolean
      pending?: boolean
      nick?: string
      joined_at?: string
      roles?: string[]
      mute?: boolean
      deaf?: boolean
      admin?: boolean
    } & DefaultSession["user"]
  }
}
