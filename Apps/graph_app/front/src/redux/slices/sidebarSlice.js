import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebaropen: (state)=>{
      state.isSidebarOpen = true;
    },
    setSidebarclose: (state)=>{
      state.isSidebarOpen = false;
    }
  },
});
// 업데이트 되는 내용 actions
export const { toggleSidebar, setSidebaropen, setSidebarclose } = sidebarSlice.actions;
// reducer
export default sidebarSlice.reducer;
