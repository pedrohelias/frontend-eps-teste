import axiosInstance from '@/config/AxiosInstance'
import { CreateSchoolType, SchoolResponseDto } from '@/types/Schools'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface SchoolState {
  loading: boolean
  error: string | null
  schools: SchoolResponseDto[]
}

const initialState: SchoolState = {
  loading: false,
  error: null,
  schools: []
}

export const fetchSchools = createAsyncThunk(
  'schools/fetchSchools',
  async () => {
    const response = await axiosInstance.get('/schools')
    return response.data
  }
)

export const createSchool = createAsyncThunk(
  'schools/createSchool',
  async (schoolData: CreateSchoolType, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/schools', schoolData)
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

const schoolSlice = createSlice({
  name: 'schools',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createSchool.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(createSchool.fulfilled, (state, action) => {
        state.loading = false
        state.schools.push(action.payload)
      })
      .addCase(createSchool.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(fetchSchools.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.loading = false
        state.schools = action.payload
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Erro ao buscar escolas'
      })
  }
})

export default schoolSlice.reducer
