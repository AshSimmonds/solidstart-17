import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start";
// import Github from "@auth/core/providers/github";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { serverEnv } from "~/env/server";
// import { prisma } from "~/server/db/client";
import Discord from "@auth/core/providers/discord";

// TODO: get rid of magick numbers
const roleAdmin = '1053715007306739833'

export const authOpts: SolidAuthConfig = {
  callbacks: {
    async jwt({ token, user }) {

      console.log(`\n\n[...solidauth].ts / callbacks jwt /\ntoken:\n ${JSON.stringify(token, null, 4)}`);

      console.log(`\n\n[...solidauth].ts / callbacks jwt /\nuser:\n ${JSON.stringify(user, null, 4)}`);

      if (user) {
        token = {
          ...token,
          user: user,
        };
      }

      return token
    },




    async session({ session, user, token }) {

      console.log(`\n\n[...solidauth].ts / callbacks session /\ntoken:\n ${JSON.stringify(token, null, 4)}`);

      console.log(`\n\n[...solidauth].ts / callbacks session /\nuser:\n ${JSON.stringify(user, null, 4)}`);

      if (session.user) {

        // session.user.lastActive = Date.now()

        if (!session.user.id) {
          if (token.sub) {
            session.user.id = token.sub
          }
        }

      }

      console.log(`\n\n([...solidauth].ts / callbacks session /)\nsession:\n ${JSON.stringify(session, null, 4)}`);

      return {
        ...session,
        ...token
      }
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // adapter: PrismaAdapter(prisma) as any,
  providers: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore types error
    // Github({
    //   clientId: serverEnv.GITHUB_ID,
    //   clientSecret: serverEnv.GITHUB_SECRET,
    // }),
    Discord({
      clientId: serverEnv.DISCORD_CLIENT_ID,
      clientSecret: serverEnv.DISCORD_CLIENT_SECRET,
      profile: async (profile) => {
        console.log(`\n\n[...solidauth].ts / profile: ${JSON.stringify(profile, null, 4)}`);

        const headersList = {
          "Accept": "*/*",
          "Authorization": `Bot ${serverEnv.DISCORD_BOT_TOKEN}`
        }

        const discordGuildMemberUrl = `https://discord.com/api/guilds/${serverEnv.DISCORD_GUILD_ID}/members/${profile.id}`

        console.log(`\n\n[...solidauth].ts / discordGuildMemberUrl:\n ${discordGuildMemberUrl}`)

        const response = await fetch(`${discordGuildMemberUrl}`, {
          method: "GET",
          headers: headersList
        })

        const discordData = await response.json()

        console.log(`\n\n[...solidauth].ts / discordData:\n ${JSON.stringify(discordData, null, 4)}`)

        const discordUser = {
          display_name: discordData.nick ? discordData.nick : discordData.user.username,
          admin: discordData.roles.includes(roleAdmin),
          communication_disabled_until: discordData.communication_disabled_until,
          flags: discordData.flags,
          is_pending: discordData.is_pending,
          joined_at: discordData.joined_at,
          nick: discordData.nick,
          pending: discordData.pending,
          premium_since: discordData.premium_since,
          roles: discordData.roles,
          mute: discordData.mute,
          deaf: discordData.deaf,
        }


        return {
          ...profile,
          ...discordUser
        };
      }
    }),
  ],
  session: {
    strategy: "jwt",
    generateSessionToken: () => {
      return crypto.randomUUID();
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

export const { GET, POST } = SolidAuth(authOpts);
