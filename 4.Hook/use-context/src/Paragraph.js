 import {useContext} from 'react'
 import {ThemeContext} from './Theme'

 function Paragraph() {
    const context = useContext(ThemeContext);
        return (    
            <div className={context.theme} >
                <h1>hello tôi là ngọc phú  rất vui được gặp bạn</h1>
            </div>
  
        )
        }


export default Paragraph
