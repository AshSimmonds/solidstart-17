import { initTRPC, TRPCError } from "@trpc/server"
import type { IContext } from "./context"

export const t = initTRPC.context<IContext>().create()

export const router = t.router


const isRegistered = t.procedure.use(
    t.middleware(async ({ ctx, next }) => {

        if (!ctx.session || !ctx.session.user) {
            throw new TRPCError({
                code: "UNAUTHORIZED",
                message: "Unauthorised",
            });
        }

        // console.log(`\n\n server / trpc / utils.ts / isRegistered / ctx.session:\n ${JSON.stringify(ctx.session, null, 4)} `)

        return next({ ctx: { ...ctx, session: { ...ctx.session, user: ctx.session.user }, } });

    })
)





export const procedurePublic = t.procedure

export const procedureRegistered = isRegistered

// export const procedurePremium = t.procedure.use(isPremium)

// export const procedurePower = t.procedure.use(isPower)

// export const procedureAdmin = t.procedure.use(isAdmin)
