import type { inferAsyncReturnType } from "@trpc/server"
import type { createSolidAPIHandlerContext } from "solid-start-trpc"
import { getSession } from "@auth/solid-start"
import { authOpts } from "~/routes/api/auth/[...solidauth]"

export const createContextInner = async (
    opts: createSolidAPIHandlerContext
) => {
    const session = await getSession(opts.req, authOpts)
    return {
        ...opts,
        session,
    }
}

export const createContext = async (opts: createSolidAPIHandlerContext) => {
    return await createContextInner(opts)
}

export type IContext = inferAsyncReturnType<typeof createContext>
