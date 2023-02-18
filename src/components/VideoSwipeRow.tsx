import { Component, For, JSX, Show } from "solid-js"
import { A } from "solid-start"
import { trpc } from "~/utils/trpc"
import ShowHide from "./ShowHide"

interface VideoSwipeRowProps {
    tag: string,
    class?: string,
    children?: JSX.Element
}

const VideoSwipeRow: Component<VideoSwipeRowProps> = (props) => {

    // TODO: maybe use actual tags, just need hundreds of data points to make it work
    // const theTaggedVideoList = trpc.videoRouter.getVideosByTag.useQuery(() =>
    //     ({ tag: props.tag })
    // )
    const theTaggedVideoList = trpc.videoRouter.getVideosByView.useQuery(() =>
        ({ viewId: props.tag })
    )



    return (
        <Show when={theTaggedVideoList.data}>
            <div>
                <div class={` w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4  ${props.class} `}>

                    <For each={theTaggedVideoList.data.records}>
                        {(theVideo: { id: string, fields: { title: string, sort_position: number, thumbnail: string, video_tag_id: string } }, vidIndex) => (

                            <>
                                <A href={`/video/${theVideo.id}`}>
                                    <img src={theVideo.fields.thumbnail}
                                        class="w-40"
                                    />
                                    <div class="text-left text-xs">
                                        {theVideo.fields.title}
                                    </div>
                                </A>
                            </>
                        )}
                    </For>
                </div>

                <ShowHide showWhat="metadata" >
                    <pre>{JSON.stringify(theTaggedVideoList.data, null, 4)}</pre>
                </ShowHide>

                {props.children}
            </div>
        </Show>
    )
}

export default VideoSwipeRow
