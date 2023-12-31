/* eslint-disable jsx-a11y/alt-text */
export function YoutubeItem(props) {
    // console.log(props);
    return (
        <div className={`youtube-item ${props.className}`}>
            <div className='youtube-image'>
                <img src={props.image} />
            </div>
            <div className='youtube-footer'>
                <img src={props.avatar} className='youtube-avatar' />
                <div className='youtube-info'>
                    <h3 className='youtube-title'>{props.title}</h3>
                    <h4 className='youtube-author'>{props.author || 'Đặng Quốc Huy'}</h4>
                </div>
            </div>
        </div>
    )
}