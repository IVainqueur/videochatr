import { useEffect, useState } from "react"
import { CallHistoryInfo } from "../utils/interfaces"
import Img from "./Img"

const Call = ({ caller, recipient, received: recieved, time }: CallHistoryInfo): JSX.Element => {
    const [typeOfCall, setTypeOfCall] = useState<string>(recieved ? 'incoming' : 'missed');
    useEffect(() => {
        const username = localStorage.getItem('vc_username');
        if (username === caller.username) setTypeOfCall('outgoing')
    }, [caller])
    return (
        <div className="flex items-center justify-between px-2">
            <div className="flex flex-row items-center gap-4">
                <Img
                    src={`/${typeOfCall}_call.svg`}
                    height={14}
                    width={14}
                    alt={'TypeOfCall Icon'}
                />
                <div className="flex flex-col gap-0">
                    <h1 className="text-lg font-bold">{typeOfCall === 'outgoing' ? recipient.username : caller.username}</h1>
                    <p className="text-white-500">{!!time ? time : '--:--'}</p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3">
                <Img
                    src="/audio_call.svg"
                    alt="Audio Call icon"
                    height={18}
                    width={18}
                    onClick={() => console.log('Audio Call')}
                    className="hover:scale-105 cursor-pointer"
                />
                <Img
                    src="/video_call.svg"
                    alt="Video Call icon"
                    height={18}
                    width={18}
                    onClick={() => console.log('Video Call')}
                    className="hover:scale-105 cursor-pointer"
                />
            </div>
        </div>
    )
}

export default Call