
function Synonyms(props){
    if(props.synonyms.length !== 0){
        return(
            <div className="Synonyms">
                <h5>Synonyms:</h5>
                <ul>
                    {props.synonyms.map((synonym, index)=>{
                        if(index < 2){
                            return(
                                <li key={index}>{synonym}</li>
                            );
                            
                        }                    
                    })}  
                </ul>
            </div>
        );
    }
}

export default Synonyms;