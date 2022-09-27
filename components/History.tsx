import { CallHistoryInfo, HistoryProps } from "../utils/interfaces";
import Call from "./Call";


const History = ({ history }: HistoryProps): JSX.Element => {
    if (history.length === 0) return <p className='in-center-ish text-white-500'>No History</p>
    return (
        <div className="w-full flex flex-col gap-2">
            <h1 className="text-xl font-bold mb-2">History</h1>
            {
                history.map((call: CallHistoryInfo, i: number) => {
                    return <Call key={`Call-${i}`} {...call} />
                })
            }

        </div>
    )
};

export default History;