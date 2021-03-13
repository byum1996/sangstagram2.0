import React, { useState } from 'react'; 
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import Checkbox from '@material-ui/core/Checkbox'; 
import Favorite from '@material-ui/icons/Favorite'; 
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'; 
  
const LikeButton = () => { 
  const [ likeState, setLikeState ] = useState(0)
  const [ likedAlreadyState, setLikedAlreadyState ] = useState(false)

  const handleOnClickAddLike = () => {
    if (likedAlreadyState === false) {
      setLikeState(likeState + 1)
      setLikedAlreadyState(true)
      console.log(likedAlreadyState)
    }
      else if (likedAlreadyState === true) {
        setLikeState(likeState - 1)
        setLikedAlreadyState(false)
        console.log(likedAlreadyState)
      }
  }

  return ( 
          <FormControlLabel 
              control={<Checkbox icon={<FavoriteBorder />}  
              checkedIcon={<Favorite />} 
              name="checkedH" />}
              onClick={handleOnClickAddLike} 
          />
  ); 
} 
  
export default LikeButton;