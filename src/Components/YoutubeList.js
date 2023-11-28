import { YoutubeItem } from "./YoutubeIem";
import { youtubeData } from "./youtubeData";



const YoutubeList = (props) => {
    return(
        <div className='youtube-list'>
        {props.children}
        {youtubeData.map((item, index) => {
          let newClass = index === 1 ? 'abc' : '';
  
          return (
          <YoutubeItem key={item.id}
            image={item.image}
            avatar={item.avatar}          
            author={item.author || "Đặng Quốc Huy"}
            title={item.title}>
          </YoutubeItem>
        );
        })}
      </div>
    )
} 

export default YoutubeList;