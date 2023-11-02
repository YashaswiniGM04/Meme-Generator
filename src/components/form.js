import React from "react"

export default function Form() {

    const [allMemeImages, setAllMemeImages] = React.useState()

    React.useState(()=>{

        async function getMemes(){
            const data = await fetch("https://api.imgflip.com/get_memes")
            const res = await data.json()
            setAllMemeImages(res.data.memes)
        }

        getMemes()
    }, []  
    )


   const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:""
   })

   function changeHandler(event){
        const {value,name} = event.target
        setMeme(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
   }

   

    function onClickHandler() {
        const arr = allMemeImages
     
        const randomNum = Math.floor(Math.random()*arr.length)
        const url = arr[randomNum].url
       setMeme(oldmeme=>{
        return({
            ...oldmeme,
            randomImage: url
        })
       })
    }

    return (
        <main>
            <div className="form-div">
                <input className="input-box" type="text" placeholder="Top text" 
                name="topText"
                onChange={changeHandler}
                value={meme.topText}
                />
                <input className="input-box" id="second-box" type="text" placeholder="Bottom text" 
                name="bottomText"
                onChange={changeHandler}
                value={meme.bottomText}
                />
                <br></br>
                <button className="submit-btn" onClick={onClickHandler}>Get a new meme image</button>
            </div>
            <div className="meme-sec">
            <img src={meme.randomImage} className="meme-img"></img>
            <h2 className="inputText top">{meme.topText}</h2>
            <h2 className="inputText bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}