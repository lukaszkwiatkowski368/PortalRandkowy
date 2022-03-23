import { Data } from "@angular/router";

export interface Message {
    id: Number;
    senderId: Number;
    senderUserName: string;
    senderPhotoUrl: string;
    recipientId: Number;
    recipientUserName: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dataRead: Data;
    dateSend: Data;
}
