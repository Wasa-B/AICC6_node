import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: "task",
    initialState: { value: []},
    reducers: {
        updateTasks: (state, action) => {
            state.value = action.payload
        },
        addTask: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
        },
        completeTask: (state, action) => {
            const index = action.payload;
            state.value[index].completed = !state.value[index].completed
        },
        deleteTask: (state, action) => {
            const index = action.payload;
            state.value.splice(index, 1);
        }
    },
});
export const { addTask, completeTask, deleteTask, editTask, updateTasks } = taskSlice.actions
export default taskSlice.reducer;