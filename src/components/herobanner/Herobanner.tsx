function Herobanner() {
  return (
    <div style={{ marginBottom: '6rem' }}>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
        src='https://www.pexels.com/sv-se/download/video/2711111/?fps=24.0&h=720&w=1280'
      ></video>
      <div style={{ position: 'absolute', left: '100px', top: '350px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <h1 style={{ color: 'white' }}>Nature's Adventure</h1>
          <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
          >
            <button style={{ display: 'flex,', alignItems: 'center' }}>
              <span className='material-symbols-outlined'>play_arrow</span>
              Play
            </button>
            <button style={{ display: 'flex,', alignItems: 'center' }}>
              <span className='material-symbols-outlined'>info</span>More info
            </button>
          </div>
        </div>
        <div style={{width: '500px'}}>
          <p style={{ color:'white'}}>
            Emily, an adventurous biologist, sets out to uncover the secrets of an untouched
            wilderness. As she immerses herself in the diverse landscapes, from towering mountains
            to serene lakeshores, the film becomes a celebration of nature's resilience and the
            intrinsic connection between humanity and the great outdoors.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Herobanner
