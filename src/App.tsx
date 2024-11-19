
import './App.css'
import { useConferenceStore } from './store/store'

function App() {
  const users = useConferenceStore((state) => state.conectedUsers)
  const setConectedUsers = useConferenceStore((state) => state.setConectedUsers)

  return (
    <>
      <div>
        {users}
        <button onClick={() => setConectedUsers(20)}>Click</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
