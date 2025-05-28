import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_TASKS_API_URL, UPDATE_COMPLETED_TASK_API_URL } from '../../utils/apiUrl';
import { getRequest, patchRequest } from '../../utils/requests';

const getItemsFetchThunk = (actionType, apiUrl)=>{
  return createAsyncThunk(actionType, async (userId)=>{
    const fullPath = `${apiUrl}/${userId}`;
    return await getRequest(fullPath);
  });
}

const updateCompletedFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (options) => {
    // console.log(options)
    return await patchRequest(apiUrl, options);
  });
};

export const fetchGetItems = getItemsFetchThunk('fetchGetItems', GET_TASKS_API_URL);
export const fetchUpdateCompleted = updateCompletedFetchThunk('fetchUpdateCompleted', UPDATE_COMPLETED_TASK_API_URL);


const handleFulFilled = (stateKey)=>{
  return (state, action)=>{
    state[stateKey] = action.payload;
  }
}

const handleRejected = (state, action)=>{
  console.log("error",action);
}

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    getItemsData: null,
    updateCompletedData: null,
  },
  extraReducers: (builder)=>{
    builder
      .addCase(fetchGetItems.fulfilled, handleFulFilled("getItemsData"))
      .addCase(fetchGetItems.rejected, handleRejected)
      .addCase(fetchUpdateCompleted.fulfilled, handleFulFilled("updateCompletedData"))
      .addCase(fetchUpdateCompleted.rejected, handleRejected)
  }
});

export default apiSlice.reducer;