import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileMenuOpen: false,
    activeSection: 'hero',
  },
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload
    },
  },
})

export const { toggleMobileMenu, closeMobileMenu, setActiveSection } = uiSlice.actions
export default uiSlice.reducer
