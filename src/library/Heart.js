import React from 'react'
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const heartIconStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: 'white',
  textAlign: 'center'
}

export default function Heart({ saved }) {
  return (
    <div style={heartIconStyle}>
      <span style={{ color: '#de2162', lineHeight: '34px' }}>
        {saved ? <IoIosHeart /> : <IoIosHeartEmpty /> }
      </span>
    </div>
  );
}
