export interface User {
    id: string;
    username: string;
}

export interface CallInfo {
    isInCall: boolean;
    isBeingCalled: boolean;
    isCalling: boolean;
    isBusy?: boolean;
    caller?: User | undefined;
    recipient?: User | undefined;
}

export interface CallInfoAction {
    type: string;
    caller?: User | undefined;
    recipient?: User | undefined;
}

export interface CallHistoryInfo {
    caller: User;
    recipient: User;
    recieved: boolean;
    time: string;
}

export interface HistoryProps {
    history: CallHistoryInfo[]
}

export interface OnClickEvent {
    (e: MouseEvent): void;
}

export interface ImgProps {
    src: string;
    alt: string;
    height?: number | string;
    width?: number | string;
    className?: string;
    onClick?: OnClickEvent;
}
