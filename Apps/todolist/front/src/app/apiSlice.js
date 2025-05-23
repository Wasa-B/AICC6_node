import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest, postRequest } from '../constants/methods';
import { GET_TASKS_URL, ADD_TASK_URL } from '../constants/apiUrl';

const createFetchThunk =(actionType, apiUrl)=>{
  return createAsyncThunk(actionType, async ()=>{
    return await getRequest(apiUrl);
  });
}

const createPostThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (data)=>{
    return await postRequest(apiUrl, data);
  });
}

export const fetchTasks = createFetchThunk("fetchTasks", GET_TASKS_URL);
export const addTask = createPostThunk("addTask", ADD_TASK_URL);


const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
}

//요청 실패시 상태 업데이트
const handleRejected = (state, action) => {
  console.log("Error", action.payload);
  // state.isError = true;
}

const apiSlice = createSlice({
    name: "apis",
    initialState: {
        tasks: [],
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTasks.fulfilled, handleFulfilled("tasks"))
        .addCase(fetchTasks.rejected, handleRejected)
        .addCase(addTask.fulfilled, handleFulfilled("tasks"))
        .addCase(addTask.rejected, handleRejected)
    },
});

export default apiSlice.reducer;