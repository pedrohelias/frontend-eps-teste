import axiosInstance from '@/config/AxiosInstance'
import { CreateStudentType, StudentResponseDTO } from '@/types/Students'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface StudentState {
  loading: boolean
  error: string | null
  students: StudentResponseDTO[]
}

const initialState: StudentState = {
  loading: false,
  error: null,
  students: []
}

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const response = await axiosInstance.get('/students')
    return response.data
  }
)

export const createStudent = createAsyncThunk(
  'students/createStudent',
  async (studentData: CreateStudentType, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/students', studentData)
      return response.data
    } catch (error: unknown) {
      let errorMessage = 'Ocorreu um erro'
      if (axios.isAxiosError(error) && error.response?.data) {
        errorMessage = error.response.data.message || errorMessage
      }
      return rejectWithValue(errorMessage)
    }
  }
)

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createStudent.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false
        state.students.push(action.payload)
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(fetchStudents.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false
        state.students = action.payload
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao buscar estudantes'
      })
  }
})

export default studentSlice.reducer
