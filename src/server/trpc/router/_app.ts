import { t } from "../utils";
import exampleRouter from "./example";
import discordRouter from "./discord"

// export const appRouter = t.mergeRouters(exampleRouter);

export const appRouter = t.router({
    exampleRouter: exampleRouter,
    discordRouter: discordRouter,
});

export type IAppRouter = typeof appRouter;
