import { CallHistoryInfo, HistoryProps } from "../utils/interfaces";
import Call from "./Call";


const History = ({ history }: HistoryProps): JSX.Element => {
    return (
        <div className="w-full flex flex-col gap-2">
            <h1 className="text-xl font-bold">History</h1>
            {
                history.map((call: CallHistoryInfo, i: number) => {
                    return <Call key={`Call-${i}`} {...call} />
                })
            }

        </div>
    )
};

export default History;