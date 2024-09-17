import './App.css'

function App() {
  const profile = {
    name : "本田哲司"
  } ;

  return (
    <div id="root">
      <main className="profile">
        <h2>プロフィール</h2>
        <div className="profile-form">
          <div className="profile-name">
            名前 : {profile.name}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
