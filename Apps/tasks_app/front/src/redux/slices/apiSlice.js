import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET_TASKS_API_URL } from '../../utils/apiUrl';
import { getRequest } from '../../utils/requests';

const getItemsFetchThunk = (actionType, apiUrl)=>{
  return createAsyncThunk(actionType, async (userId)=>{
    const fullPath = `${apiUrl}/${userId}`;
    return await getRequest(fullPath);
  });
}


export const fetchGetItems = getItemsFetchThunk('fetchGetItems', GET_TASKS_API_URL);



const handleFulFilled = (stateKey)=>{
  return (state, action)=>{
    state[stateKey] = action.payload;
  }
}

const handleRejected = (state, action)=>{
  console.log("error"+action.payload);
}

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    getItemsData: null,
  },
  extraReducers: (builder)=>{
    builder
      .addCase(fetchGetItems.fulfilled, handleFulFilled("getItemsData"))
      .addCase(fetchGetItems.rejected, handleRejected)
  }
});

export default apiSlice.reducer;