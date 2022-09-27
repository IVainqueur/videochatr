import React from "react";
import { CallInfo, CallInfoAction } from "./interfaces";


export const updateCallInfo: React.Reducer<CallInfo, CallInfoAction> = (cur_state: CallInfo, action: CallInfoAction): CallInfo => {
    const state: CallInfo = { ...cur_state };
    switch (action.type) {
        case 'isBeingCalled':
            state.caller = { ...action.caller! };
            state.isBusy = true;
            return state;
        case 'isCalling':
            state.recipient = { ...action.recipient! };
            state.isBusy = true;
            return state;
        case 'hangup':
            state.recipient = undefined;
            state.caller = undefined;
            state.isBusy = false;
            state.isInCall = false;
            return state;
        case 'acceptCall':
            state.isInCall = true;
            state.isBusy = true;
            return state;
        default:
            return state;
    }

}