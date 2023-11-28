import api from "../../config/api";

export const GetAllMeetings = async () => {
    const url = "/api/v1/meeting";
    
    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.get(url, config);

    return response.data;
}

export const GetSingleMeeting = async (meetingId: string) => {
    const url = `/api/v1/meeting/${meetingId}`;
    
    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.get(url, config);

    return response.data;
}

export const CreateMeeting = async (data: object) => {
    const url = "/api/v1/meeting/create";
    
    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.post(url, data, config);

    return response.data;
}

export const UpdateMeeting = async (meetingId: string, data: object) => {
    const url = `/api/v1/meeting/update/${meetingId}`;
    
    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.put(url, data, config);

    return response.data;
}

export const DeleteMeeting = async (meetingId: string) => {
    const url = `/api/v1/meeting/${meetingId}`;
    
    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.delete(url, config);

    return response.data;
}

export const GetSingleRace = async (meetingId: string, raceId: string) => {
    const url = `/api/v1/meeting/${meetingId}/${raceId}`;

    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.get(url, config);

    return response.data;
}

export const CreateRace = async (meetingId: string, data: object) => {
    const url = `/api/v1/meeting/${meetingId}/race/create`;

    const config = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.post(url, data, config);

    return response.data;
}

export const UpdateRace = async (meetingId: string, raceId: string, data: object) => {
    const url = `/api/v1/meeting/${meetingId}/race/${raceId}`;

    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accept_token")}`,
        },
    };
    
    const response = await api.put(url, data, config);

    return response.data;
}