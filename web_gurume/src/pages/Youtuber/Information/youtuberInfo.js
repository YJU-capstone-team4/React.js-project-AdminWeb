import React, {useState, useEffect} from 'react'
import Youtuber from '../../../components/Youtuber/Youtuber'
import axios from 'axios'

const YoutuberInfo = () => {

    const [youtubers, setYoutubers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchYoutubers = async() => {
            try{
                setError(null);
                setYoutubers(null);
                setLoading(true);
                const response = await axios.get(
                    'http://localhost:3000/ytbChannelTb'
                );
                setYoutubers(response.data.ytbChannelTb);
            } catch(e){
                setError(e);
            }
            setLoading(false);
        }

        fetchYoutubers();
    }, [])

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!youtubers) return null
    
    return (
        <div className="bodyFrame">
            <div className="assist">
                <div> 유튜버 목록 </div>
            </div>

            <div className="subFrame">
                {/* 유튜버 데이터 가져와서 Youtuber 컴포넌트에 넣음 */}
                {youtubers.map(v=>
                    <Youtuber ytbData={v}/>
                )}
            </div>
        </div>
    )
}

export default YoutuberInfo