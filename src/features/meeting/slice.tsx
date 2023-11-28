import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";  
import { CreateMeeting, CreateRace, GetAllMeetings, GetSingleMeeting, GetSingleRace, UpdateMeeting, UpdateRace, DeleteMeeting } from "./service";
import { MeetingType, RaceType } from "../../config/types";

const initialState = {
    meetings: [],
    meeting: {},
    race: {},
    message: '',
    status: 'idle'
} as MeetingState

export const getMeetings = createAsyncThunk(
    'meeting/getMeetings',
    async (_, { rejectWithValue }) => {
        try {
            return await GetAllMeetings();
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getSingleMeeting = createAsyncThunk(
    'meeting/getSingleMeeting',
    async (meetingId: string, { rejectWithValue }) => {
        try {
            return await GetSingleMeeting(meetingId);
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)
                

export const createMeeting = createAsyncThunk(
    'meeting/createMeeting',
    async (data: object, { rejectWithValue }) => {
        try {
            return await CreateMeeting(data);
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const updateMeeting = createAsyncThunk(
    'meeting/updateMeeting',
    async ({meetingId, data}: { meetingId: string, data: object }, { rejectWithValue }) => {
        try {
            return await UpdateMeeting(meetingId, data);
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const deleteMeeting = createAsyncThunk(
    'meeting/deleteMeeting',
    async (meetingId: string, { rejectWithValue }) => {
        try {
            return await DeleteMeeting(meetingId);
        }
        catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getSingleRace = createAsyncThunk(
    'meeting/getSingleRace',
    async ({meetingId, raceId}: { meetingId: string, raceId: string }, { rejectWithValue }) => {
        try {
            return await GetSingleRace(meetingId, raceId);
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const createRace = createAsyncThunk(
    'meeting/createRace',
    async ({meetingId, data}: { meetingId: string, data: object }, { rejectWithValue }) => {
        try {
            return await CreateRace(meetingId, data);
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const updateRace = createAsyncThunk(
    'meeting/updateRace',
    async ({meetingId, raceId, data}: { meetingId: string, raceId: string, data: object }, { rejectWithValue }) => {
        try {
            return await UpdateRace(meetingId, raceId, data);
        } catch (e) {
            const errorMessage = (e as Error).message;
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const meetingSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMeetings.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMeetings.fulfilled, (state, action: PayloadAction<MeetingPayload>) => {
                state.meetings = [action.payload?.payload] || []
                state.status = 'loaded'
            })
            .addCase(getMeetings.rejected, (state) => {
                state.status = 'error'
                state.message = action.payload?.message
            })
            .addCase(getSingleMeeting.pending, (state) => {
                state.status = statuses.loading
            })
            .addCase(getSingleMeeting.fulfilled, (state, action) => {
                state.meeting = action.payload?.payload
                state.status = statuses.loaded
            })
            .addCase(getSingleMeeting.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
            .addCase(createMeeting.pending, (state) => {
                state.status = statuses.saving
            })
            .addCase(createMeeting.fulfilled, (state, action) => {
                state.status = statuses.saved
                state.message = action.payload?.message
            })
            .addCase(createMeeting.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
            .addCase(updateMeeting.pending, (state) => {
                state.status = statuses.saving
            })
            .addCase(updateMeeting.fulfilled, (state, action) => {
                state.status = statuses.saved
                state.message = action.payload?.message
            })
            .addCase(updateMeeting.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
            .addCase(deleteMeeting.pending, (state) => {
                state.status = statuses.deleting
            })
            .addCase(deleteMeeting.fulfilled, (state, action) => {
                state.status = statuses.deleted
                state.message = action.payload?.message
            })
            .addCase(deleteMeeting.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
            .addCase(getSingleRace.pending, (state) => {
                state.status = statuses.loading
            })
            .addCase(getSingleRace.fulfilled, (state, action) => {
                state.race = action.payload?.payload
                state.status = statuses.loaded
            })
            .addCase(getSingleRace.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
            .addCase(createRace.pending, (state) => {
                state.status = statuses.saving
            })
            .addCase(createRace.fulfilled, (state, action) => {
                state.status = statuses.saved
                state.message = action.payload?.message
            })
            .addCase(createRace.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
            .addCase(updateRace.pending, (state) => {
                state.status = statuses.deleting
            })
            .addCase(updateRace.fulfilled, (state, action) => {
                state.status = statuses.deleted
                state.message = action.payload?.message
            })
            .addCase(updateRace.rejected, (state, action) => {
                state.status = statuses.error
                state.message = action.payload?.message
            })
    }
})

interface MeetingState {
    meetings: Array<MeetingType>,
    meeting: object,
    race: object,
    message: string,
    status: string,
}

interface MeetingPayload {
    status: number,
    success: boolean,
    message: string,
    payload?: {
        meeting: MeetingType,
    }
}

export default meetingSlice.reducer