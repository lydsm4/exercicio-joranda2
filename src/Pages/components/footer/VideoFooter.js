import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({name,description, music}) {
  return (
    <div className='VideoFooter'>
        <div className='VideoFooterText'>
        <h3>@{name}</h3>
        <p>{description}</p>

        <div className='VideoFooterMusic'>
          <div>
            <p>
            <MusicNoteIcon className='VideoFooterIcon' />
            </p>
          
          </div>       
            <div className='VideoFooterMusicText'>  
              <p> {music}</p>
            </div>
                      
        </div>
        
        </div>

        <img
        
          className='VideoFooterRecord'
        
        alt='Imagem de um vinil girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
        />
    </div>
  )
}

export default VideoFooter