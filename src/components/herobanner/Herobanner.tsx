function Herobanner() {
  return (
    <div style={{ marginBottom: '6rem' }}>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        src='https://www.pexels.com/sv-se/download/video/2711111/?fps=24.0&h=720&w=1280'
      ></video>
      <div
        style={{
          position: 'absolute',
          left: '100px',
          top: '300px',
          display: 'flex',
          backgroundColor: 'pink',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        <h1 style={{ color: 'white' }}>Nature's Adventure</h1>
        <div>
          <button>Play</button>
          <button>More info</button>
        </div>
      </div>
    </div>
  )
}

export default Herobanner
