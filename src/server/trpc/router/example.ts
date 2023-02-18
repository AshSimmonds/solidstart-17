import { z } from "zod"
import { procedurePublic, procedureRegistered, router } from "../utils"

interface PostData {
    userId: number
    id: number
    title: string
    body: string
}

export default router({
    hello: procedurePublic.input(z.object({ name: z.string() })).query(({ input }) => {
        return `Hello ${input.name}`
    }),


    random: procedurePublic
        .input(z.object({ num: z.number() }))
        .mutation(({ input }) => {
            return Math.floor(Math.random() * 100) / input.num
        }),

    secret: procedureRegistered.query(({ ctx }) => {
        return `This is top secret - ${ctx.session.user.name}`
    }),




    jsonplaceholder: procedurePublic
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {

            // console.log(`\ntrpc jsonplaceholder input`, JSON.stringify(input, null, 4))

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${input.id}`)
                .then((res) => res.json())

            // console.log(`\ntrpc jsonplaceholder response`, JSON.stringify(response, null, 4))

            return [response] as PostData[]
        }
        ),

    jsonplaceholderProtected: procedureRegistered
        .input(z.object({ id: z.number() }))
        .query(async ({ input }) => {

            // console.log(`\ntrpc jsonplaceholder input`, JSON.stringify(input, null, 4))

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${input.id}`)
                .then((res) => res.json())

            // console.log(`\ntrpc jsonplaceholder response`, JSON.stringify(response, null, 4))

            return [response] as PostData[]
        }
        ),


})
