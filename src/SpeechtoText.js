import { useEffect } from "react"
import SpeechRecognition,{ useSpeechRecognition } from "react-speech-recognition";

const SpeechtoText =()=>{
    const {transcript,resetTranscript} =useSpeechRecognition()



    useEffect(()=>{
        SpeechRecognition.startListening({continuous:true})
        console.log('listening starts');
    },[]);
    return(
        <div>
            <form>
                <textarea value={transcript}></textarea>
                <button onClick={resetTranscript}>clear text</button>
            </form>
        </div>
    )
}


export default SpeechtoText