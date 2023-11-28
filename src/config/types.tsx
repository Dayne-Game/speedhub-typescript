export interface UserType {
    firstname: string,
    lastname: string,
    email: string
}

export interface MeetingType {
    _id: string,
    average_finish_position: number,
    average_start_position: number,
    meeting_completed: boolean,
    meeting_date: string,
    meeting_format: string,
    meeting_location: string,
    meeting_name: string,
    overtack_ratio: number,
    races: RaceType[],
}

export interface RaceType {
    finish_position: number,
    laps: number,
    notes: string,
    race: string,
    start_position: number,
    track_condition: string,
    setups: RaceSetupType[]
}

export interface RaceSetupType {
    id: string,
    value: string
}

export interface SetupType {
    
}














export interface MeetingState {
    meetings: MeetingType[],
    meeting: MeetingType,
    race: RaceType,
    message: string,
    status: string,
}

export interface MeetingPayload {
    status: number,
    success: boolean,
    message: string,
    payload?: {
        meeting: MeetingType,
    }
}