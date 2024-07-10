import service from "../utils/request";

export const session = (strUsrName) => {
    return service.get("/api/msg/session?strUsrName=" + strUsrName);
};

export const sessions = () => {
    return service.get("/api/msg/sessions");
};

export const msgs = (query) => {
    return service.get(`/api/msg/msgs?strUsrName=${query.strUsrName}&page=${query.page}&size=${query.size}`);
};

export const contact = () => {
    return service.get('/api/msg/contact');
};

export const contactSplit = (page, size, ChatRoomType=0) => {
    return service.get(`/api/msg/contact-split?page=${page}&size=${size}&ChatRoomType=${ChatRoomType}`);
};

export const chatroomInfo = (chatroomName) => {
    return service.get(`/api/msg/chatroom-info?chat_room_name=${chatroomName}`);
};

