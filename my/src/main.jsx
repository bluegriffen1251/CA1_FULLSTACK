import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TeamMemeberCard from './components/TeamMemberCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeamMemeberCard/>
  </StrictMode>,
)
